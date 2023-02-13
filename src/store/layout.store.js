import { createSlice } from "@reduxjs/toolkit";
import { initialState, layoutReducer } from "./reducer/layout.reducer";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: layoutReducer,
});

export const { setMobileLnbActive, setWindowWidth } = layoutSlice.actions;

export default layoutSlice.reducer;
