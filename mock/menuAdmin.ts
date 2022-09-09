import { MockMethod } from "vite-plugin-mock"
export default [
  {
    url: "/menuAdmin/list",
    method: "get",
    response: () => {
      return {
        code: 0,
        data: {
          name: "vben"
        }
      }
    }
  }
] as MockMethod[]
