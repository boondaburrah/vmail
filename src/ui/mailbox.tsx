import * as React from "react";
import * as R from "ramda";
import { Table } from "antd";
import {connect} from "react-redux";
import {StateShape} from "../state";

type mailItemList = any[];

interface MailboxProperties {
    currentPage: number;
    mailboxName: string;
    mailItems: mailItemList;
    checkedItems: string[];
    dispatch: any;
    loading: boolean;
}

export const sampleMail: mailItemList = R.map((i) => {
    return {
        address: "example".concat(Number(i).toFixed(0), "@example.net"),
        subject: "Fake Subject Number ".concat(Number(i).toFixed(0)),
        timestamp: Date.now().toString()
    };
}, R.range(0, 10));

const mailboxColumns = [
  { title: "Address",
    dataIndex: "address",
    key: "address" },
  { title: "Subject",
    dataIndex: "subject",
    key: "subject" },
  { title: "Date",
    dataIndex: "date",
    key: "timestamp" },
  { title: "Actions",
    dataIndex: "important",
    key: "boxactions" }
];

const selectedRowActions = {
    onChange: (keys: any, _: any) => {

    }
};

const mailbox: React.SFC<MailboxProperties> = (props: MailboxProperties) => {
    return <Table rowSelection={{
        onChange: (keys: any, _: any) => {
            props.dispatch((state: StateShape) => ({...state, checkedItems: keys as string[]}));
        },
        getCheckboxProps: (mailItem) => {
            return false;
        }
    }} dataSource={props.mailItems} columns={mailboxColumns}>

    </Table>;
};

const mailboxState = (state: StateShape) => ({
    checkedItems: state.checkedItems,
    loading: state.ajaxArrived
});

export default connect(mailboxState)(mailbox);
