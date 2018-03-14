import S from "repatch";
import JeeCore from "./core";

export interface StateShape {
    currentPane: "mailbox" | "mailitem";
    currentMailbox: "inbox" | "outbox" | "starred" | "important" | "drafts" | "trash";
}

export default new S({
    currentPane: "mailbox",
    currentMailbox: "inbox"
} as StateShape);

export class CoreConnector{
    private coreRef: JeeCore;

    constructor(core: JeeCore){
        this.coreRef = core;
    }
}
