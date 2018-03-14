import * as React from "react";
import * as R from "ramda";
import { Table } from "antd";

type mailItemList = any[];

interface MailboxProperties {
    currentPage: number;
    mailboxName: string;
    mailItems: mailItemList;
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
    key: "timestamp" }
];

export default function Mailbox(props: MailboxProperties){
    return <Table dataSource={props.mailItems} columns={mailboxColumns}>

    </Table>;
}