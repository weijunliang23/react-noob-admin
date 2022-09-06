import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { NavLink as Link, useLocation, Outlet, useNavigate } from "react-router-dom"
import { TypeMenu } from 'src/@types/test';
import { routes } from '../router/routes'
import { useToggleTheme, getTheme } from '../utils/toggleTheme'

const { Header, Sider, Content } = Layout;
const LayoutIndex = () => {
  const u = useLocation()
  const navigate = useNavigate()

  // redirect
  useEffect(() => {
    if (u.pathname === '/') {
      navigate('/home', { replace: true })
    }
  }, [])
  const [collapsed, setCollapsed] = useState(false);

  // click-menu navigate level1 or invalid -> noop
  const handleClickMenu = (e: TypeMenu) => {
    if (u.pathname === e.key || e.key.startsWith('pid')) return
    navigate(e.key)
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
              defaultSelectedKeys={['home']}
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
            <Button className='dark:bg-black dark:text-white' onClick={useToggleTheme}>{
              getTheme() === 'dark' ? '切换明亮模式' : '切换黑夜模式'
            }</Button>
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