import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import routes from './router'
// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            {routes.map(({ name, path }) => {
              return (
                <li key={path}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, component: RouteComp }) => {
            return <Route key={path} path={path} element={<RouteComp />}></Route>
          })}
        </Routes>
        <button className='btn'></button>
      </BrowserRouter>
    </>
  )
}

export default App
