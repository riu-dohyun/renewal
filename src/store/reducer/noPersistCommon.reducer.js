export const initialState = {
  // NOTE: user email change 할 때 사용 할 상태값
  changeEmail: "",
  confirmCheckEmailVerifyCode: false,

  // NOTE: my-account 접근 할 때 체크할 변수값
  myAccountAccessCheck: false,
};

export const noPersistCommonReducer = {
  // NOTE: user email change 할 때 사용 할 reducer START
  setChangeEmail: (state, action) => {
    state.changeEmail = action.payload;
    state.confirmCheckEmailVerifyCode = true;
  },
  initChangeEmail: state => {
    state.changeEmail = "";
    state.confirmCheckEmailVerifyCode = false;
  },
  // NOTE: user email change 할 때 사용 할 reducer END

  // NOTE: my account 페이지 접근 하기위해 비밀번호 접근 감지 상태 값 사용할 reducer START
  setMyAccountAccessCheck: (state, action) => {
    state.myAccountAccessCheck = action.payload;
  },
  initMyAccountAccessCheck: state => {
    state.myAccountAccessCheck = false;
  },
  // NOTE: my account 페이지 접근 하기위해 비밀번호 접근 감지 상태 값 사용할 reducer END
};
