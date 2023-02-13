// ANCHOR: 견적
import endPoint from "src/config/endPoint";
import { requestPost } from "src/utils/axiosUtils";

// NOTE: get opportunity list (입찰 진행중인 견적요청 목록 조회)
export const getOpportunityListApi = async props => {
  const { uid, bNew, sort, search, pageNo, numPageItem } = { ...props };
  const responseData = await requestPost(endPoint.getOpportunityList, {
    uid,
    bNew,
    sort,
    search,
    pageNo,
    numPageItem,
  });
  return responseData;
};

// NOTE: get detail request info  (견적 요청 및 견적 상세 조회)
export const getQuotesByRfq = async props => {
  const { uid, rfqId } = { ...props };
  const responseData = await requestPost(endPoint.getQuotesByRfq, {
    uid,
    rfqId,
  });
  return responseData;
};

// NOTE: create quote (quote 생성 => 견적 등록 임시 저장)
export const createQuoteApi = async props => {
  const {
    uid,
    supplierUid,
    rfqId,
    expiration,
    rfqItemId,
    pricing,
    tooling,
    notes,
  } = { ...props };
  const responseData = await requestPost(endPoint.createQuote, {
    uid,
    supplierUid,
    rfqId,
    expiration,
    rfqItemId,
    pricing,
    tooling,
    notes,
  });
  return responseData;
};

// NOTE: update quote (quote가 하나라도 생성되어 있다면 update로 다른 item도 수정해야 한다.)
export const updateQuoteApi = async props => {
  const {
    uid,
    supplierUid,
    quoteId,
    expiration,
    rfqItemId,
    pricing,
    tooling,
    notes,
  } = { ...props };
  const responseData = await requestPost(endPoint.updateQuote, {
    uid,
    supplierUid,
    quoteId,
    expiration,
    rfqItemId,
    pricing,
    tooling,
    notes,
  });
  return responseData;
};

// NOTE: submit quote (quote 모두 작성이 되었을 때 가능)
export const submitQuoteApi = async props => {
  const { uid, supplierUid, quoteId } = { ...props };
  const responseData = await requestPost(endPoint.submitQuote, {
    uid,
    supplierUid,
    quoteId,
  });
  return responseData;
};

// NOTE: Quote 견적 제출한 견적 요청 목록 조회
export const getQuoteListApi = async props => {
  const { uid, supplierUid, sort, search, pageNo, numPageItem } = { ...props };
  const responseData = await requestPost(endPoint.getQuoteList, {
    uid,
    supplierUid,
    sort,
    search,
    pageNo,
    numPageItem,
  });
  return responseData;
};

// NOTE: Buyer In-progress Detail 조회
export const getBuyerInProgressDetailApi = async props => {
  const { uid, rfqId } = { ...props };
  const responseData = await requestPost(endPoint.getQuotesByRfq, {
    uid,
    rfqId,
  });
  return responseData;
};

// NOTE: Buyer create order
export const createOrderApi = async props => {
  const { uid, rfqId, quoteId, selected } = { ...props };
  const responseData = await requestPost(endPoint.createOrder, {
    uid,
    rfqId,
    quoteId,
    selected,
  });
  return responseData;
};
