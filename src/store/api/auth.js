import * as commonConfig from "src/config/common";
import endPoint from "src/config/endPoint";
import { requestPost } from "src/utils/axiosUtils";

// NOTE: 로그인 API
export const signInApi = async props => {
  const { email, pwd } = props;
  const responseData = await requestPost(endPoint.signIn, {
    email: email,
    pwd: pwd,
  });

  return responseData;
};

// NOTE: 로그아웃 API
export const logoutApi = async props => {
  const { uid } = props;
  const responseData = await requestPost(endPoint.logout, {
    uid: uid,
  });

  return responseData;
};

// NOTE: 이메일 인증코드 API
export const sendVerificationCodeApi = async props => {
  const { email, uid } = props;
  const responseData = await requestPost(endPoint.sendVerificationCode, {
    uid: uid,
    email: email,
  });

  return responseData;
};

// NOTE: 회원가입 API
export const signUpApi = async props => {
  const { email, pwd, fullName, companyName, country, role } = props;
  const responseData = await requestPost(endPoint.signUp, {
    email: email,
    pwd: pwd,
    fullName: fullName,
    companyName: companyName,
    country: country,
    role: role,
  });

  return responseData;
};

// NOTE: 비밀번호 초기화 API
export const passwordResetApi = async props => {
  const { email, pwd, verificationCode } = props;
  const responseData = await requestPost(endPoint.resetUserPwd, {
    email: email,
    pwd: pwd,
    verificationCode: verificationCode,
  });

  return responseData;
};

// NOTE: 내 정보 조회 API
export const getMyInfoApi = async props => {
  const { uid, email } = props;
  const params = commonConfig.developMode
    ? {
        devUid: uid,
        devId: email,
      }
    : {};
  const responseData = await requestPost(endPoint.getMyInfo, { ...params });
  return responseData;
};

// NOTE: 회원정보 변경 API
export const updateUserInfoApi = async props => {
  const { uid, targetUid, userInfo } = props;
  const responseData = await requestPost(endPoint.updateUserInfo, {
    uid: uid,
    targetUid: targetUid,
    userInfo: userInfo,
  });
  return responseData;
};

// NOTE: 회원 비밀변호 변경 API
export const updateUserPwdApi = async props => {
  const { uid, targetUid, oldPwd, newPwd } = props;
  const responseData = await requestPost(endPoint.updateUserPwd, {
    uid,
    targetUid,
    oldPwd,
    newPwd,
  });
  return responseData;
};

// NOTE: 회원 탈퇴 API
export const requestAccountDeletionApi = async props => {
  const { uid, targetUid, reasonCode, reasonText } = props;
  const responseData = await requestPost(endPoint.requestAccountDeletion, {
    uid,
    targetUid,
    reasonCode,
    reasonText,
  });
  return responseData;
};
