import A, {AxiosResponse} from "axios";
import * as R from "ramda";

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

    constructor(){
        const errorData = [{
            key: "0",
            subject: "No Email Data",
            body: "AJAX hasn't come back with the email data.",
            from: "jee@mail.itself",
            to: "you@dear.reader",
            date: 0,
            mailbox: "inbox"
        }] as MailItem[];
        this.jeedb = errorData;

        A.get("/emails.json").then((response) => {
            console.log("AJAX FIRED! ".concat(response.status.toFixed(0)));
            this.jeedb = (response.status == 200) ? response.data : errorData;
            console.log(this.jeedb);
        });

        // for debugging
        (window as any).core = this;
    }

    public getMailboxPage(mailboxName: string, page: number){
        return R.filter((i: MailItem) => (i.mailbox === mailboxName), this.jeedb)
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
