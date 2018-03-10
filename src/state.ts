import S from "repatch";

export interface StateShape {
    currentPane: "mailbox" | "mailitem";
    currentMailbox: "inbox" | "outbox" | "starred" | "important" | "drafts" | "trash";
}

export default new S({
    currentPane: "mailbox",
    currentMailbox: "inbox"
} as StateShape);
