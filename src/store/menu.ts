import { createSlice } from "@reduxjs/toolkit"
import { MenuItem, routes } from "../router/routes"
import type { PayloadAction } from "@reduxjs/toolkit"

// initstate
const initialState: MenuItem = routes

// 切片唯一name,初始状态，处理函数
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu(state, action: PayloadAction<MenuItem[number]>) {
      state.unshift(action.payload)
    }
  }
})

// 工具包处理
export const { addMenu } = menuSlice.actions
export default menuSlice.reducer
