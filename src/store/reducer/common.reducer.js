export const initialState = {
  isLoading: false, // 로딩중
  isDone: false, // 완료
  isPending: false, // 응답이 왔는지
  error: null, // 에러

  // NOTE: PAGE
  pageNo: 0,
  numPageItem: 10,
  sort: 0,
  search: JSON.stringify({}),

  // NOTE: TAB
  editSpecificationState: false,
  detailSpecificationState: false,
  sendSupplierEmailState: false,

  // NOTE: lang
  lang: null,

  // NOTE: next.js loading
  nextLoading: false,
};

export const commonReducer = {
  start: state => {
    state.isLoading = true;
    state.isDone = false;
    state.isPending = true;
    state.error = null;
  },
  end: state => {
    state.isLoading = false; // 로딩중
    state.isDone = false; // 완료
    state.isPending = false; // 응답이 왔는지
    state.error = null; // 에러
  },
  success: state => {
    state.isLoading = false;
    state.isDone = true;
    state.isPending = false;
    state.error = null;
  },
  failure: (state, action) => {
    state.isLoading = false;
    state.isDone = false;
    state.isPending = false;
    state.error = action.payload.error;
  },

  // NOTE: packaging item edit specification
  setEditSpecification: (state, action) => {
    state.editSpecificationState = action.payload;
  },
  // NOTE: packaging item detail specification
  setDetailSpecification: (state, action) => {
    state.detailSpecificationState = action.payload;
  },
  // NOTE: supplier 추천 후 send email tab
  setSendSupplierEmail: (state, action) => {
    state.sendSupplierEmailState = action.payload;
  },

  // NOTE: page 관련 초기화
  initPage: state => {
    state.pageNo = 0;
    state.numPageItem = 10;
    state.sort = 0;
    state.search = JSON.stringify({});
  },
  // NOTE: setPage
  setPage: (state, action) => {
    state.pageNo = action.payload;
  },
  // NOTE: set show item count page
  setNumPageItem: (state, action) => {
    state.numPageItem = action.payload;
  },

  // NOTE: set lang
  setLang: (state, action) => {
    state.lang = action.payload;
  },

  // NOTE: Next.js Loading set
  setNextLoading: (state, action) => {
    state.nextLoading = action.payload;
  },
};
