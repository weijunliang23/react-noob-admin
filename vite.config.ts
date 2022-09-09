import { UserConfigExport, ConfigEnv, defineConfig } from "vite"

import { viteMockServe } from "vite-plugin-mock"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      // default
      mockPath: "mock"
    })
  ],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")]
    }
  }
})

// export default ({ command, mode }: ConfigEnv): UserConfigExport => {
//   // const {
//   //   VITE_PORT,
//   //   VITE_LEGACY,
//   //   VITE_PUBLIC_PATH,
//   //   VITE_PROXY_DOMAIN,
//   //   VITE_PROXY_DOMAIN_REAL
//   // } = warpperEnv(loadEnv(mode, root))
//   return {
//     plugins: [
//       react(),
//       viteMockServe({
//         // default
//         mockPath: "mock",
//         localEnabled: command === "serve"
//       })
//     ],
//     css: {
//       postcss: {
//         plugins: [require("tailwindcss"), require("autoprefixer")]
//       }
//     }
//   }
// }
