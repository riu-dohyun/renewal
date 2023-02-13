import { createSlice } from "@reduxjs/toolkit";
import { initialState, userReducer } from "src/store/reducer/user.reducer";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: userReducer,
});

export const {
  // ANCHOR: Async Saga
  // NOTE: 로그아웃
  logout,
  logoutSuccess,
  logoutFailure,
  // NOTE: 로그인
  signIn,
  signInSuccess,
  signInFailure,
  // NOTE: 회원가입
  signUp,
  signUpSuccess,
  signUpFailure,
  // NOTE: 인증코드 이메일 발송
  verifyCodeSend,
  verifyCodeSendSuccess,
  verifyCodeSendFailure,
  // NOTE: 비밀번호 리셋
  passwordReset,
  passwordResetSuccess,
  passwordResetFailure,
  // NOTE: 내 정보 조회
  getInfoTrigger,
  getInfoSuccess,
  getInfoFailure,
  // NOTE: 회원정보 변경
  updateUserInfoTrigger,
  updateUserInfoSuccess,
  // NOTE: 사용자 비밀번호 변경
  updateUserPwdTrigger,
  updateUserPwdSuccess,
  // NOTE: 사용자 탈퇴
  requestAccountDeletionTrigger,
  requestAccountDeletionSuccess,
  // NOTE: 사용자 정보 변경 접근 로그인 트리거
  myAccountAccessCheckTrigger,
  myAccountAccessCheckSuccess,

  // ANCHOR: Sync
  setEmailTimeOver,
  setEmailTimeOverInit,
  setVerifyCodeCheck,
  setVerifyCode,
  setSignUpUserLogin,
  setPasswordResetStep,
  setPrevIsLogin,
  setPasswordResetEmail,

  // ANCHOR: temp after delete reducer
  buyerForceSignIn,
  supplierForceSignIn,

  // NOTE: userType Check
  setUserType,
  initUserType,
} = userSlice.actions;

export default userSlice.reducer;
