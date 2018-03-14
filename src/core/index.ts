import A, {AxiosResponse} from "axios";
import * as R from "ramda";
import {isBoolean} from "util";

export interface MailItem {
    key: string;
    subject: string;
    body: string;
    from: string;
    to: string;
    date: number;
    mailbox: "inbox" | "outbox" | "drafts" | "trash";
    starred?: boolean;
    important?: boolean;
}

export default class JeeCore{
    private jeedb: MailItem[];

    constructor(ajaxCallback?: any){
        const errorData = [{
            key: "0",
            subject: "No Email Data",
            body: "AJAX hasn't come back with the email data.",
            from: "jee@mail.itself",
            to: "you@dear.reader",
            date: 0,
            mailbox: "inbox",
            starred: false,
            important: true
        }] as MailItem[];
        this.jeedb = errorData;

        A.get("/emails.json").then((response) => {
            console.log("AJAX FIRED! ".concat(response.status.toFixed(0)));
            this.jeedb = (response.status == 200) ? response.data : errorData;
            console.log(this.jeedb);
            if(ajaxCallback){
                ajaxCallback((response.status === 200));
            }
        });

        // for debugging
        (window as any).core = this;
    }

    public getMailboxPage(mailboxName: string, page: number){
        let filterfunc;
        if(mailboxName === "starred" || mailboxName === "important"){
            filterfunc = (i: MailItem) => (i[mailboxName] || false);
        } else {
            filterfunc = (i: MailItem) => (i.mailbox === mailboxName);
        }
        return R.filter(filterfunc, this.jeedb)
            // .slice((page * 10), (page * 10) + 1)
            .map((i) => ({
                ...i,
                address: (mailboxName === "outbox") ? i.to : i.from,
                date: ((d: number) => {
                    let dateobj = new Date(0);
                    dateobj.setUTCSeconds(d);
                    return dateobj.toLocaleDateString();
                })(i.date)
            }));
    }
}
