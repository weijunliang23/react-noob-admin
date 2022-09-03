interface TypePages {
  default: () => void,
  [K: string]: any,
}
// @ts-ignore
const pages: TypePages = import.meta.glob('../pages/*.tsx', { eager: true })

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)![1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path]?.default || null
  }
})

export default routes