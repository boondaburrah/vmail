import * as React from "react";
import { Layout } from "antd";

export default class MainWindow extends React.Component {
    public render(){
        return <Layout>
            <Layout.Sider>
                <div>Sidebar</div>
            </Layout.Sider>
            <Layout.Content>
                <div>Content</div>
            </Layout.Content>
        </Layout>;
    }
}
