import * as React from "react";
import { Store } from "repatch";
import { connect } from "react-redux";
import { Layout, Menu, Input } from "antd";
import Mailbox from "./mailbox";
import MailItem from "./mailitem";
import { sampleMail } from "./mailbox";
import {StateShape} from "../state";
import JeeCore from "../core";

interface MainWindowProps {
    store: Store<StateShape>;
    currentMailbox: "inbox" | "outbox" | "drafts" | "important" | "starred" | "trash";
    dispatch: any;
    core: JeeCore;
}

const render: React.SFC<MainWindowProps>= (props: MainWindowProps) => {
    return <Layout>
        <Layout.Sider>
            <div className="logo">logo</div>
            <Input.Search />
            <Menu theme="dark" mode="inline" inlineCollapsed={false}
                  openKeys={["mailboxes"]} selectedKeys={[props.currentMailbox]}
                  onClick={(e) => {
                      console.log(e);
                      props.dispatch((state: StateShape) => ({...state, currentMailbox: e.key}));
                  }}>
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
            <Mailbox currentPage={1} mailboxName={props.currentMailbox} mailItems={props.core.getMailboxPage(props.currentMailbox, 1)}/>
        </Layout.Content>
    </Layout>;
};

function mainWindowState(state: StateShape){
    return {currentMailbox: state.currentMailbox};
}

export default connect(mainWindowState)(render);

// <Mailbox currentPage={1} mailboxName="Inbox" mailItems={sampleMail}/>

