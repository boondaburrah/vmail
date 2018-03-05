import * as React from "react";
import { Layout, Menu } from "antd";
import Mailbox from "./mailbox";
import { sampleMail } from "./mailbox";

export default class MainWindow extends React.Component {
    public render(){
        return <Layout>
            <Layout.Sider>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="inbox">
                        Inbox
                    </Menu.Item>
                    <Menu.Item key="starbox">
                        Starred
                    </Menu.Item>
                    <Menu.Item key="sentbox">
                        Sent Mail
                    </Menu.Item>
                    <Menu.Item key="draftsbox">
                        Drafts
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content>
                <Mailbox currentPage={1} mailboxName="Inbox" mailItems={sampleMail}/>
            </Layout.Content>
        </Layout>;
    }
}
