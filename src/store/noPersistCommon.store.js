import { createSlice } from "@reduxjs/toolkit";
import {
  initialState,
  noPersistCommonReducer,
} from "./reducer/noPersistCommon.reducer";

export const noPersistCommonSlice = createSlice({
  name: "noPersistCommon",
  initialState: initialState,
  reducers: noPersistCommonReducer,
});

export const {
  setChangeEmail,
  initChangeEmail,
  setMyAccountAccessCheck,
  initMyAccountAccessCheck,
} = noPersistCommonSlice.actions;

export default noPersistCommonSlice.reducer;
