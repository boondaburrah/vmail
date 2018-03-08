import * as React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd/lib/grid";

const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column"
};

const headerLabelStyles: React.CSSProperties = {
    textAlign: "right"
};

function Headers(){
    return <Layout>
        <Row gutter={16}><Col span={4} style={headerLabelStyles}>From:</Col><Col>something@somewhere</Col></Row>
        <Row gutter={16}><Col span={4} style={headerLabelStyles}>To:</Col><Col>something@somewhere</Col></Row>
        <Row gutter={16}><Col span={4} style={headerLabelStyles}>Subject:</Col><Col>Some Subject</Col></Row>
    </Layout>;
}

export default function MailItem(){
    return <div style={styles}>
        <Headers></Headers>
        <div>Edit Area</div>
    </div>;
}
