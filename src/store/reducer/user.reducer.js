import { userType } from "src/config/common";

export const initialState = {
  error: null, // 에러

  // NOTE: 이메일 인증 코드
  verifyCode: null,
  verifyCodeCheck: null,
  verifyCodeHash: null,
  timeOver: false,

  // NOTE: 회원가입 유저인지 check
  signUpUserLogin: false,

  // NOTE: 비밀번호 reset step
  passwordResetEmail: null,
  passwordResetStep: 0,

  // NOTE: user info
  uid: -1,
  email: null,
  isLogin: false,
  role: null,
  name: null,
  companyName: null,
  country: null,
  fullName: null,

  userType: null,
};

export const userReducer = {
  // ANCHOR: async reducer
  // NOTE: logout reducer Async
  logout: () => {},
  logoutSuccess: () => initialState,
  logoutFailure: () => {},

  // NOTE: sing in reducer Async
  signIn: () => {},
  signInSuccess: (state, action) => {
    state.isLogin = true;
    state.uid = action.payload.uid;
    state.email = action.payload.email;
    state.role = action.payload.role;
    state.fullName = action.payload.fullName;
    state.companyName = action.payload.companyName;
    state.country = action.payload.country;
  },
  signInFailure: () => initialState,

  // NOTE: send verify code reducer Async
  verifyCodeSend: () => {},
  verifyCodeSendSuccess: (state, action) => {
    state.verifyCodeHash = action.payload.hashCode;
  },
  verifyCodeSendFailure: state => {
    state.verifyCodeHash = null;
  },

  // NOTE: sign up reducer Async
  signUp: () => {},
  signUpSuccess: state => {
    state.signUpUserLogin = true;
  },
  signUpFailure: () => {},

  // NOTE: password reset reducer Async
  passwordReset: () => {},
  passwordResetSuccess: () => initialState,
  passwordResetFailure: () => {},

  // NOTE: Interval get User Info
  getInfoTrigger: () => {},
  getInfoSuccess: () => {},
  getInfoFailure: () => {},

  // NOTE: 사용자 정보 수정
  updateUserInfoTrigger: () => {},
  updateUserInfoSuccess: (state, action) => {
    state.email = action.payload.email;
    state.fullName = action.payload.fullName;
    state.companyName = action.payload.companyName;
    state.country = action.payload.country;
  },

  // NOTE: 사용자 비밀번호 변경
  updateUserPwdTrigger: () => {},
  updateUserPwdSuccess: () => {},

  // NOTE: 사용자 탈퇴 신청
  requestAccountDeletionTrigger: () => {},
  requestAccountDeletionSuccess: () => {},

  // NOTE: 사용자 정보 수정 창 접근 시 비밀번호 체크
  myAccountAccessCheckTrigger: () => {},
  myAccountAccessCheckSuccess: () => {},

  // ANCHOR: sync reducer
  // NOTE: email time over
  setEmailTimeOver: state => {
    state.timeOver = true;
  },
  // NOTE: email time init
  setEmailTimeOverInit: state => {
    state.timeOver = false;
  },
  // NOTE: verifyCodeCheck change
  setVerifyCodeCheck: (state, action) => {
    state.verifyCodeCheck = action.payload;
  },
  // NOTE: verifyCode 저장
  setVerifyCode: (state, action) => {
    state.verifyCode = action.payload;
  },
  // NOTE: 회원가입 한 user인지 체크
  setSignUpUserLogin: (state, action) => {
    state.signUpUserLogin = action.payload;
  },
  // NOTE: password reset step
  setPasswordResetStep: (state, action) => {
    state.passwordResetEmail = null;
    state.passwordResetStep = action.payload;
  },
  // NOTE: password reset email set
  setPasswordResetEmail: (state, action) => {
    state.passwordResetEmail = action.payload;
    state.passwordResetStep = 1;
  },

  // ANCHOR: temp reducer after delete
  buyerForceSignIn: state => {
    state.isLogin = true;
    state.role = userType.buyer;
    state.fullName = userType.buyer;
  },
  supplierForceSignIn: state => {
    state.isLogin = true;
    state.role = userType.supplier;
    state.fullName = userType.supplier;
  },

  // NOTE: Set userType
  setUserType: state => {
    state.userType = true;
  },
  initUserType: state => {
    state.userType = false;
  },
};
