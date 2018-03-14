import * as React from "react";
import {StateShape} from "../state";
import {connect} from "react-redux";
import MailItem from "./mailitem";
import Mailbox from "./mailbox";

interface PaneProps {
    dispatch: any;
    currentPane: "mailbox" | "mailitem";
    currentMailItem?: string;
}

const pane: React.SFC<PaneProps> = (props: PaneProps) => {
    return { props.currentPane === "mailitem" ? (
        <MailItem/>
    ) : (
        <Mailbox currentPage={0} mailboxName={}></Mailbox>
    )};
};

const paneState = (state: StateShape) => {
    return {
        currentPane: state.currentPane
        curr
    };
};

export default connect(paneState)(pane);