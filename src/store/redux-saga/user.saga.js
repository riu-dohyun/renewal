import url from "@/config/url";
import { getFixedT } from "i18next";
import { call, put, takeLatest } from "redux-saga/effects";
import * as commonConfig from "src/config/common";
import * as authApi from "src/store/api/auth";
import * as noPersistCommonActions from "src/store/noPersistCommon.store";
import * as userActions from "src/store/user.store";
import * as commonUtils from "src/utils/commonUtils";
import * as toastUtils from "src/utils/toastUtils";

const t = getFixedT(null, null, commonConfig.i18nKey.sagaKey);

// NOTE: login saga
function* signInSaga(action) {
  const i18nMiddleKey = "signIn";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const userInfoResponseData = yield call(
        authApi.signInApi,
        action.payload
      );

      const { resData, retCode } = yield commonUtils.getResponseData(
        userInfoResponseData
      );

      // NOTE: Login success
      if (retCode === 0) {
        const deletedST = Number(resData.deletedST);
        if (deletedST === 1 || deletedST === 3) {
          // NOTE: 탈퇴 신청 OR 탈퇴된 회원
          toastUtils.errorToast(`${t(`${i18nMiddleKey}.deletedUser`)}`);
        } else {
          yield put({
            type: userActions.signInSuccess,
            payload: { ...resData, email: action.payload.email },
          });
          yield action.payload.router.push("/");
        }
      } else {
        // NOTE: Login failure
        yield put({
          type: userActions.signInFailure,
          payload: resData,
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchSignIn() {
  yield takeLatest(userActions.signIn, signInSaga);
}

// NOTE: logout saga
function* logoutSaga(action) {
  const i18nMiddleKey = "logout";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const logoutResponse = yield call(authApi.logoutApi, action.payload);
      const { retCode } = yield commonUtils.getResponseData(logoutResponse);

      if (retCode === 0) {
        yield put({
          type: userActions.logoutSuccess,
        });
        yield console.log("action.payload.router >>>>", action.payload.router);
        yield action.payload.router.push(url.home);
      } else {
        yield put({
          type: userActions.logoutFailure,
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchLogout() {
  yield takeLatest(userActions.logout, logoutSaga);
}

// NOTE: verify code send saga
function* verifyCodeSendSaga(action) {
  const i18nMiddleKey = "verifyCodeSend";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const verifyCodeSendData = yield call(
        authApi.sendVerificationCodeApi,
        action.payload
      );

      const { resData, retCode } =
        commonUtils.getResponseData(verifyCodeSendData);

      if (retCode === 0) {
        yield put({
          type: userActions.verifyCodeSendSuccess,
          payload: { ...resData },
        });
        yield toastUtils.defaultToast(`📧 ${t(`${i18nMiddleKey}.sendEmail`)}`);
      } else {
        yield put({
          type: userActions.verifyCodeSendFailure,
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchVerifyCodeSend() {
  yield takeLatest(userActions.verifyCodeSend, verifyCodeSendSaga);
}

// NOTE: sign up saga
function* signUpSaga(action) {
  const i18nMiddleKey = "signUp";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const signUpData = yield call(authApi.signUpApi, action.payload);
      const { retCode } = yield commonUtils.getResponseData(signUpData);
      if (retCode === 0) {
        // NOTE: redux state reset
        yield put({
          type: userActions.logout,
        });

        // NOTE: 회원가입 성공 및 회원가입 체크 값 value 저장
        yield put({
          type: userActions.signUpSuccess,
        });
      }
      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchSignUp() {
  yield takeLatest(userActions.signUp, signUpSaga);
}

// NOTE: password reset saga
function* passwordResetSaga(action) {
  const i18nMiddleKey = "passwordReset";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const passwordResetData = yield call(
        authApi.passwordResetApi,
        action.payload
      );

      const { retCode } = yield commonUtils.getResponseData(passwordResetData);

      if (retCode === 0) {
        yield put({
          type: userActions.passwordResetSuccess,
        });
        yield put({
          type: userActions.setPasswordResetStep,
          payload: 2,
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchPasswordReset() {
  yield takeLatest(userActions.passwordReset, passwordResetSaga);
}

function* getMyInfoSaga(action) {
  const i18nMiddleKey = "getMyInfo";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getMyInfoData = yield call(authApi.getMyInfoApi, action.payload);

      const { resData, retCode } = yield commonUtils.getResponseData(
        getMyInfoData
      );

      if (retCode === 0) {
        yield put({
          type: userActions.signInSuccess,
          payload: { ...resData, email: action.payload.email },
        });
      }

      return { retCode, i18nMiddleKey, navigate: action.navigate };
    },
    errorMessage: "server error",
    notLoading: true,
  });
}

export function* watchGetMyInfo() {
  yield takeLatest(userActions.getInfoTrigger, getMyInfoSaga);
}

function* updateUserInfoSaga(action) {
  const i18nMiddleKey = "updateUserInfo";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const updateUserInfoData = yield call(
        authApi.updateUserInfoApi,
        action.payload
      );

      const { retCode } = yield commonUtils.getResponseData(updateUserInfoData);

      if (retCode === 0) {
        const userInfo = yield JSON.parse(action.payload.userInfo);

        yield put({
          type: userActions.updateUserInfoSuccess,
          payload: { ...userInfo },
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchUpdateUserInfo() {
  yield takeLatest(userActions.updateUserInfoTrigger, updateUserInfoSaga);
}

function* updateUserPwdSaga(action) {
  const i18nMiddleKey = "updateUserPwd";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const updateUserPwdData = yield call(
        authApi.updateUserPwdApi,
        action.payload
      );

      const { retCode } = yield commonUtils.getResponseData(updateUserPwdData);

      if (retCode === 0) {
        toastUtils.successToast(`${t(`${i18nMiddleKey}.updatePwdSuccess`)}`);
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchUpdateUserPwd() {
  yield takeLatest(userActions.updateUserPwdTrigger, updateUserPwdSaga);
}

function* requestAccountDeletionSaga(action) {
  const i18nMiddleKey = "requestAccountDeletion";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const requestAccountDeletionData = yield call(
        authApi.requestAccountDeletionApi,
        action.payload
      );

      const { retCode } = yield commonUtils.getResponseData(
        requestAccountDeletionData
      );

      if (retCode === 0) {
        yield toastUtils.successToast(
          `${t(`${i18nMiddleKey}.deletionSuccess`)}`
        );

        yield put({
          type: userActions.logoutSuccess,
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchRequestAccountDeletion() {
  yield takeLatest(
    userActions.requestAccountDeletionTrigger,
    requestAccountDeletionSaga
  );
}

function* myAccountAccessCheckSaga(action) {
  const i18nMiddleKey = "myAccountAccessCheck";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const userInfoResponseData = yield call(
        authApi.signInApi,
        action.payload
      );

      const { retCode } = commonUtils.getResponseData(userInfoResponseData);

      if (retCode === 0) {
        yield put({
          type: noPersistCommonActions.setMyAccountAccessCheck,
          payload: true,
        });
      } else {
        yield put({
          type: noPersistCommonActions.initMyAccountAccessCheck,
        });
        toastUtils.errorToast(`${t(`${i18nMiddleKey}.notMatch`)}`);
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchMyAccountAccessCheck() {
  yield takeLatest(
    userActions.myAccountAccessCheckTrigger,
    myAccountAccessCheckSaga
  );
}

export const sagaFnArray = [
  watchSignIn,
  watchLogout,
  watchVerifyCodeSend,
  watchSignUp,
  watchPasswordReset,
  watchGetMyInfo,
  watchUpdateUserInfo,
  watchUpdateUserPwd,
  watchRequestAccountDeletion,
  watchMyAccountAccessCheck,
];
