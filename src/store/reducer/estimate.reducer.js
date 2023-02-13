// import * as commonConfig from "src/config/common";

export const initialState = {
  // NOTE: 견적 new & open list
  opportunityList: [],
  opportunityTotalCount: null,

  // NOTE: supplier request detail
  requestDetailInfo: null,
  quoteList: [],

  // NOTE: supplier quote List
  submitQuoteList: [],
  submitQuoteListTotalNum: 0,

  // NOTE: buyer in-progress detail
  buyerInProgressDetailRfq: null,
  buyerInProgressDetailQuoteList: null,
};

export const estimateReducer = {
  // ANCHOR: Async
  getOpportunitiesListTrigger: () => {},
  getOpportunitiesListSuccess: (state, action) => {
    state.opportunityList = action.payload.rfqList;
    state.opportunityTotalCount = action.payload.totalNum;
  },

  getRequestInfoTrigger: () => {},
  getRequestInfoSuccess: (state, action) => {
    state.requestDetailInfo = action.payload.rfq;
    state.quoteList = action.payload.quoteList ? action.payload.quoteList : [];
  },

  createQuoteTrigger: () => {},
  createQuoteSuccess: (state, action) => {
    state.quoteList = action.payload.quoteList;
  },

  updateQuoteTrigger: () => {},
  updateQuoteSuccess: (state, action) => {
    state.quoteList = action.payload.quoteList;
  },

  submitQuoteTrigger: () => {},
  submitQuoteSuccess: () => {},

  getQuoteListTrigger: () => {},
  getQuoteListSuccess: (state, action) => {
    state.submitQuoteList = action.payload.quoteList;
    state.submitQuoteListTotalNum = action.payload.totalNum;
  },

  getBuyerInProgressDetailTrigger: () => {},
  getBuyerInProgressDetailSuccess: (state, action) => {
    state.buyerInProgressDetailRfq = action.payload.rfq;
    state.buyerInProgressDetailQuoteList = action.payload.quoteList;
  },

  createOrderTrigger: () => {},
  createOrderSuccess: () => {},

  // ANCHOR: Sync
  // NOTE: 초기화
  initial: () => initialState,
};
