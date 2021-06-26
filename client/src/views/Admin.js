import React, { Suspense } from "react";
import Dashboard from "./Dashboard";
import { Link, withRouter } from "react-router-dom";


import { Layout, Menu, Button } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function Admin() {
  return (
    <div>
      <Suspense fallback={<h1>LOADING</h1>}>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu
              className="sidebar"
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                nav 4
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Dashboard />
                <Link to="/pageone"><Button type="primary">Page One</Button></Link>
                <Link to="/pagetwo"><Button type="primary">Page Two</Button></Link>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design �2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
        ,
      </Suspense>
    </div>
  );
}

export default Admin;
