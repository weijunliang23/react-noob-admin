import { useState } from 'react'
import './App.css'
import { ConfigProvider } from 'antd'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { store } from './store'
import { Link, Route, Routes, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import routes from './router'
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
const languageList = [{ enUS: enUS }, { zhCN: zhCN }]
const local = store.getState().local
type Locale = typeof enUS
let temp: Locale = enUS
languageList.some((item) => {
  for (const [key, value] of Object.entries(item)) {
    if (key === local) {
      temp = value
    }
  }
})
console.log(temp, 1);
function App() {
  return (
    <>
      <ConfigProvider locale={temp}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout></Layout>} >
              {routes.map(({ path, component: RouteComp }) => {
                return <Route key={path} path={path} element={<RouteComp />}></Route>
              })}
              <Route path='/home' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  )
}

export default App
