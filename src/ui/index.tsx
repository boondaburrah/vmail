import * as React from "react";
import { Layout, Menu, Input } from "antd";
import Mailbox from "./mailbox";
import MailItem from "./mailitem";
import { sampleMail } from "./mailbox";

export default class MainWindow extends React.Component {
    public render(){
        return <Layout>
            <Layout.Sider>
                <div className="logo">logo</div>
                <Input.Search />
                <Menu theme="dark" mode="inline" inlineCollapsed={false}>
                    <Menu.SubMenu key="mailboxes" title="Mailboxes">
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
                    </Menu.SubMenu>
                </Menu>
            </Layout.Sider>
            <Layout.Content>
                <MailItem/>
            </Layout.Content>
        </Layout>;
    }
}

// <Mailbox currentPage={1} mailboxName="Inbox" mailItems={sampleMail}/>
