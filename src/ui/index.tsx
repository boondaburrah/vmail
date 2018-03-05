import * as React from "react";
import { Layout, Menu } from "antd";

export default class MainWindow extends React.Component {
    public render(){
        return <Layout>
            <Layout.Sider>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        Menu Item One!
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content>
                <div>Content</div>
            </Layout.Content>
        </Layout>;
    }
}
