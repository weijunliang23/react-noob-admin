import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink as Link } from "react-router-dom"
const routes = [
  {
    name: "home",
    key: "home",
    label: <Link to="/home">首页</Link>
  },
  {
    name: "advance",
    key: "advance",
    label: <Link to="/advance">每日进步</Link>
  },
  {
    name: "test",
    key: "test",
    label: <Link to="/test">每日测试</Link>
  }
]
const { Header, Sider, Content } = Layout;
const LayoutIndex = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleClickMenu = () => {
  }
  return (
    <div>
      <Layout className='layout-index'>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              onClick={handleClickMenu}
              defaultSelectedKeys={['1']}
              items={routes}
            />
          </Sider>
        </Layout>
        <Layout className="site-layout"

        >
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
        </Layout>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutIndex;