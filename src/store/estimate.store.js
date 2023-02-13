import { createSlice } from "@reduxjs/toolkit";
import { estimateReducer, initialState } from "./reducer/estimate.reducer";

export const estimateSlice = createSlice({
  name: "estimate",
  initialState: initialState,
  reducers: estimateReducer,
});

export const {
  initial,
  getOpportunitiesListTrigger,
  getOpportunitiesListSuccess,
  getRequestInfoTrigger,
  getRequestInfoSuccess,
  createQuoteTrigger,
  createQuoteSuccess,
  updateQuoteTrigger,
  updateQuoteSuccess,
  submitQuoteTrigger,
  submitQuoteSuccess,
  getQuoteListTrigger,
  getQuoteListSuccess,
  getBuyerInProgressDetailTrigger,
  getBuyerInProgressDetailSuccess,
  createOrderTrigger,
  createOrderSuccess,
} = estimateSlice.actions;

export default estimateSlice.reducer;
