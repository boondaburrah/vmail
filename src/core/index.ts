import A, {AxiosResponse} from "axios";

export interface MailItem {
    id: number;
    subject: string;
    body: string;
    from: string;
    to: string;
    date: number;
    mailbox: "inbox" | "outbox" | "drafts" | "important" | "starred" | "trash";
}

export default class JeeCore{
    private jeedb: MailItem[];

    constructor(){
        this.jeedb = [{
            id: 0,
            subject: "No Email Data",
            body: "AJAX hasn't come back with the email data.",
            from: "jee@mail.itself",
            to: "you@dear.reader",
            date: 0,
            mailbox: "inbox"
        }];
        A.get("/emails.json").then(this.initDataFromJson);
    }

    private initDataFromJson(response: AxiosResponse){
        if(response.status === 200){
            console.log("DATA GET");
            this.jeedb = response.data;
        } else {
            console.log("DATA NOT GET: ".concat(response.status.toFixed(0)).concat(response.statusText));
            debugger;
        }
    }
}
