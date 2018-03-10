import D from "dexie";
import A from "axios";

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
    private jeedb: D;

    constructor(){
        this.jeedb = new D("jeemail");
        this.jeedb.version(0).stores({
            mailItem: "id,subject,body,from,to,date,mailbox"
        });

        this.jeedb.on("ready", this.dbIsReady);
    }

    private dbIsReady(){
        // check if DB has already been loaded. If not, fetch the json by ajax and load it up
        this.jeedb.table("mailItem").count().then((c) => {
            if (c > 0){
                // table already has stuff in it. Do nothing.
                console.log("database found already with data");
                return;
            }
            // If we've gotten to this point, that means the mailItem table is empty.
            console.log("mailItem DB is empty. We should put something in it. I'll try to fetch /emails.json now.");
            return A.get("/emails.json").then((response) => {
                console.log("Ajax came back, got a response code: ".concat(response.status.toFixed(0)));
                if(response.status !== 200){
                    console.error("that's not good. Error text was: ".concat(response.statusText));
                    console.log("Bailing on AJAX error");
                    return;
                }
                this.populateEmailTable(response.data);
            });
        });
    }

    private populateEmailTable(data: MailItem[]){
        if(this.jeedb.isOpen()){
            //pass
        }
    }
}
