export const initialState = {
  // NOTE: layout 컨트롤
  mobileLnbActive: false, // mobile 일 때 lnb 컨트롤

  // NOTE: media query 컨트롤
  windowWidth: 0,
};

export const layoutReducer = {
  setMobileLnbActive: (state, action) => {
    state.mobileLnbActive = action.payload;
  },

  setWindowWidth: (state, action) => {
    state.windowWidth = action.payload;
  },
};
