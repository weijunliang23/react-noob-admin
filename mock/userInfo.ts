import { MockMethod } from "vite-plugin-mock"
export default [
  {
    url: "/test",
    method: "get",
    response: () => {
      console.log(898);
      
      return {
        code: 0,
        data: {
          name: "vben"
        }
      }
    }
  }
] as MockMethod[]
