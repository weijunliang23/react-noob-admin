import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CaretDownOutlined,
  HomeOutlined,
  TagOutlined,
  RocketOutlined
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
  useEffect(() => {
    if (collapsed) {

    }
  }, [collapsed])

  // click-menu navigate level1 or invalid -> noop
  const handleClickMenu = (e: TypeMenu) => {
    if (u.pathname === e.key) return
    navigate(e.key)
  }

  const handleOpenChange = (e: any) => {
    console.log(e);
  }
  return (
    <div >
      <Layout className='w-screen h-screen'>
        <div className="logo" />
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            onClick={handleClickMenu}
            defaultSelectedKeys={['home']}
            items={routes}
            onOpenChange={handleOpenChange}
            expandIcon={<CaretDownOutlined />}
          />
        </Sider>
        <Layout className="site-layout"
        >
          <Header
            className="site-layout-background bg-gre"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger ml-4',
              onClick: () => { setCollapsed(!collapsed) },
            })}
            <Button className='dark:bg-black dark:text-white ml-8' onClick={useToggleTheme}>{
              getTheme() === 'dark' ? '切换明亮模式' : '切换黑夜模式'
            }</Button>
          </Header>
          <Content
            className="site-layout-background "
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