import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
interface TypePages {
  default: () => void,
  [K: string]: any,
}
// @ts-ignore
const pages: TypePages = import.meta.glob('./pages/*.tsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path]?.default || null
  }
})


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
