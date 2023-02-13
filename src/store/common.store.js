import { createSlice } from "@reduxjs/toolkit";
import { commonReducer, initialState } from "./reducer/common.reducer";

export const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: commonReducer,
});

export const {
  start,
  success,
  failure,
  end,
  // NOTE: item edit / detail slide 및 공통 TAB 관련
  setEditSpecification,
  setDetailSpecification,
  setSendSupplierEmail,
  // NOTE: page 관련
  initPage,
  setPage,
  setNumPageItem,

  // NOTE: lang 관련
  setLang,
} = commonSlice.actions;

export default commonSlice.reducer;
