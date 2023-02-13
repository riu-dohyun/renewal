import { getFixedT } from "i18next";
import { call, put, takeLatest } from "redux-saga/effects";
import url from "src/config/url";
import * as estimateApi from "src/store/api/estimate";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
// import * as toastUtils from "src/utils/toastUtils";
import * as commonConfig from "src/config/common";
const t = getFixedT(null, null, commonConfig.i18nKey.sagaKey);

// NOTE: get opportunities list
export function* getOpportunitiesListSaga(action) {
  const i18nMiddleKey = "getOpportunitiesList";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getOpportunityListInfo = yield call(
        estimateApi.getOpportunityListApi,
        { ...action.payload }
      );

      const { retCode, resData } = yield commonUtils.getResponseData(
        getOpportunityListInfo
      );

      if (retCode === 0) {
        yield put({
          type: estimateActions.getOpportunitiesListSuccess,
          payload: resData,
        });
        // success code
      } else {
        yield commonUtils.sagaErrorToast({
          t,
          i18nMiddleKey,
          retCode,
        });
      }
    },
    errorMessage: "server error",
  });
}

export function* watchGetOpportunitiesList() {
  yield takeLatest(
    estimateActions.getOpportunitiesListTrigger,
    getOpportunitiesListSaga
  );
}

// NOTE: get request detail info
export function* getRequestDetailSaga(action) {
  const i18nMiddleKey = "getRequestDetail";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getRequestDetailInfo = yield call(estimateApi.getQuotesByRfq, {
        ...action.payload,
      });

      const { retCode, resData } = yield commonUtils.getResponseData(
        getRequestDetailInfo
      );

      if (retCode === 0) {
        yield put({
          type: estimateActions.getRequestInfoSuccess,
          payload: resData,
        });
      } else {
        yield commonUtils.sagaErrorToast({
          t,
          i18nMiddleKey,
          retCode,
        });
      }

      return { retCode, i18nMiddleKey };
    },
  });
}

export function* watchGetRequestDetail() {
  yield takeLatest(estimateActions.getRequestInfoTrigger, getRequestDetailSaga);
}

// NOTE: create quote saga
function* createQuoteSaga(action) {
  const i18nMiddleKey = "createQuote";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const createQuoteInfo = yield call(estimateApi.createQuoteApi, {
        ...action.payload,
      });

      const { resData, retCode } = yield commonUtils.getResponseData(
        createQuoteInfo
      );

      const { quote } = resData;
      const quoteList = [...action.payload.quoteList];
      quoteList.push(quote);

      if (retCode === 0) {
        yield put({
          type: estimateActions.createQuoteSuccess,
          payload: {
            quoteList: quoteList,
          },
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchCreateQuote() {
  yield takeLatest(estimateActions.createQuoteTrigger, createQuoteSaga);
}

// NOTE: update quote saga
function* updateQuoteSaga(action) {
  const i18nMiddleKey = "updateQuote";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const updateQuoteInfo = yield call(estimateApi.updateQuoteApi, {
        ...action.payload,
      });

      const { resData, retCode } = yield commonUtils.getResponseData(
        updateQuoteInfo
      );

      const { quote } = resData;
      const newQuoteList = yield commonUtils.quoteDataProcessing({
        quote: quote,
        quoteList: [...action.payload.quoteList],
      });

      if (retCode === 0) {
        yield put({
          type: estimateActions.updateQuoteSuccess,
          payload: {
            quoteList: newQuoteList,
          },
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchUpdateQuote() {
  yield takeLatest(estimateActions.updateQuoteTrigger, updateQuoteSaga);
}

// NOTE: submit quote saga
function* submitQuoteSaga(action) {
  const i18nMiddleKey = "submitQuote";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const submitQuoteInfo = yield call(estimateApi.submitQuoteApi, {
        ...action.payload,
      });
      const { retCode } = yield commonUtils.getResponseData(submitQuoteInfo);

      if (retCode === 0) {
        action.payload.navigate(
          `${url.supplier.quoteView}/${action.payload.rfqId}`
        );
      }
      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchSubmitQuote() {
  yield takeLatest(estimateActions.submitQuoteTrigger, submitQuoteSaga);
}

// NOTE: Get Quote 견적 제출 list
function* getQuoteListSaga(action) {
  const i18nMiddleKey = "getQuoteList";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getQuoteListInfo = yield call(estimateApi.getQuoteListApi, {
        ...action.payload,
      });
      const { resData, retCode } = yield commonUtils.getResponseData(
        getQuoteListInfo
      );
      if (retCode === 0) {
        yield put({
          type: estimateActions.getQuoteListSuccess,
          payload: {
            quoteList: resData.quoteList,
            totalNum: resData.totalNum,
          },
        });
      }
      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchGetQuoteList() {
  yield takeLatest(estimateActions.getQuoteListTrigger, getQuoteListSaga);
}

export function* getBuyerInProgressDetailSaga(action) {
  const i18nMiddleKey = "getBuyerInProgressDetail";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getBuyerInProgressDetailInfo = yield call(
        estimateApi.getBuyerInProgressDetailApi,
        {
          ...action.payload,
        }
      );

      const { resData, retCode } = yield commonUtils.getResponseData(
        getBuyerInProgressDetailInfo
      );

      if (retCode === 0) {
        yield put({
          type: estimateActions.getBuyerInProgressDetailSuccess,
          payload: {
            rfq: resData.rfq,
            quoteList: resData.quoteList,
          },
        });
      }

      return { retCode, i18nMiddleKey };
    },
  });
}

export function* watchGetBuyerInProgressDetail() {
  yield takeLatest(
    estimateActions.getBuyerInProgressDetailTrigger,
    getBuyerInProgressDetailSaga
  );
}

function* createOrderSaga(action) {
  const i18nMiddleKey = "createOrder";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const createOrderInfo = yield call(estimateApi.createOrderApi, {
        ...action.payload,
      });

      const { resData, retCode } = yield commonUtils.getResponseData(
        createOrderInfo
      );

      if (retCode === 0) {
        console.log(resData);
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchCreateOrder() {
  yield takeLatest(estimateActions.createOrderTrigger, createOrderSaga);
}

export const sagaFnArray = [
  watchGetOpportunitiesList,
  watchGetRequestDetail,
  watchCreateQuote,
  watchUpdateQuote,
  watchSubmitQuote,
  watchGetQuoteList,
  watchGetBuyerInProgressDetail,
  watchCreateOrder,
];
