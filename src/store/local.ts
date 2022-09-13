import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
type initialState = string

const initState: initialState = "enUS"
export const localSlice = createSlice({
  name: "local",
  initialState: initState,
  reducers: {
    change: (state, action: PayloadAction<string>) => action.payload
  }
})

export const { change } = localSlice.actions
export default localSlice.reducer
