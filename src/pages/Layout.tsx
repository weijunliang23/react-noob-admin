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
import { useAppDispatch, useAppSelector } from '../hooks'
import { change } from '../store/local'
import { routes } from '../router/routes'
import { useToggleTheme, getTheme } from '../utils/toggleTheme'

const { Header, Sider, Content } = Layout;
const LayoutIndex = () => {
  const u = useLocation()
  const navigate = useNavigate()
  const locale = useAppSelector(state => state.local)
  const dispatch = useAppDispatch()
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

  const handleCheckLocal = (): any => {
    const payLoad = locale === 'enUS' ? 'zhCN' : 'enUS'
    dispatch(change(payLoad))
  }
  return (
    <div >
      <Layout className='w-screen h-screen '>
        <div className="logo" />
        <Sider className='bg-gre' trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
            onClick={handleClickMenu}
            defaultSelectedKeys={['home']}
            className="bg-slider"
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
            <Button className='dark:bg-black dark:text-white ml-8 bg-slider' onClick={useToggleTheme}>{
              getTheme() === 'dark' ? '切换明亮模式' : '切换黑夜模式'
            }</Button>
            <Button className='ml-4 hover:bg-pink-200' onClick={handleCheckLocal}>{locale === 'enUS' ? '切换中文' : 'English'}</Button>
          </Header>
          <Content
            className="site-layout-background "
            style={{
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