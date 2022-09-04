import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Link, Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import routes from './router'


function App() {

  return (
    <>
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
    </>
  )
}

export default App
