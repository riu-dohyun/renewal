import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import InputHelperText from "src/components/input/InputHelperText";
import EmailTimer from "src/components/timer/EmailTimer";
import AuthCommonTitle from "src/components/title/AuthCommonTitle";
import url from "src/config/url";
import { AccountTypeContainer } from "src/containers";
import * as userAction from "src/store/user.store";
import * as commonUtils from "src/utils/commonUtils";
import * as regexpUtils from "src/utils/regexpUtils";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";

const SignUpForm = () => {
  const { t } = useTranslation();
  // ANCHOR: FUNCTION
  const router = useRouter();
  const dispatch = useDispatch();
  const { uid, timeOver, verifyCodeHash, verifyCodeCheck, signUpUserLogin } =
    useSelector(state => state.user);

  const [userRole, setUserRole] = useState(null);
  const [isSendCode, setIsSendCode] = useState(false);
  const [email, setEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");

  // NOTE: error State
  const [errors, setErrors] = useState({
    email: true,
    verifyCode: false,
    password: false,
    passwordConfirm: true,
    fullName: false,
    country: false,
  });

  // NOTE: input change 이벤트
  const signUpOnChangeEvent = e => {
    const target = e.currentTarget;
    const value = target.value;
    const role = target.dataset.role;

    let onlyStringValue = regexpUtils.regexpStringNotOnlyReplace(value);
    let onlyNumberValue = regexpUtils.regexpNumberNotOnlyReplace(value);

    if (role === "email") {
      setEmail(value);
    }
    if (role === "verifyCode") {
      setVerifyCode(onlyNumberValue);
    }
    if (role === "password") {
      setPassword(value);
    }
    if (role === "passwordConfirm") {
      setPasswordConfirm(value);
    }
    if (role === "fullName") {
      setFullName(onlyStringValue);
    }
    if (role === "companyName") {
      setCompanyName(value);
    }
    if (role === "country") {
      setCountry(onlyStringValue);
    }
  };

  // NOTE: user Role type 버튼 클릭 event
  const userRoleTypeButtonClick = e => {
    const target = e.currentTarget;
    const type = target.dataset.type;
    setUserRole(type);
    dispatch(userAction.setUserType());
  };

  // NOTE: 이메일 전송 버튼
  const emailSendBtnClick = () => {
    if (regexpUtils.regexpRejectPortalEmailTest(email)) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast9"))}`
      );
      setIsSendCode(false);
      return false;
    }
    setIsSendCode(false);
    setTimeout(() => {
      if (regexpUtils.regexpEmailTest(email)) {
        dispatch(userAction.setEmailTimeOverInit());
        setIsSendCode(true);
        dispatch(userAction.verifyCodeSend({ email, uid: uid }));
        setErrors({ ...errors, email: false });
      } else {
        toastUtils.errorToast(
          `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast1"))}`
        );
        setIsSendCode(false);
        setErrors({ ...errors, email: true });
      }
      setVerifyCode("");
    }, 0);
  };

  // NOTE: 이메일로 전송된 code 확인 버튼
  const emailSendConfirmBtnClick = async () => {
    if (!isSendCode) {
      toastUtils.warningToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.warningToast1"))}`
      );
      return false;
    }

    const verifyCodeToHash = await commonUtils.verifyCodeHash(verifyCode);
    const verifyCodeChecks = verifyCodeToHash === verifyCodeHash;

    await dispatch(userAction.setVerifyCodeCheck(verifyCodeChecks));
    if (verifyCodeChecks) {
      setIsSendCode(false);
      toastUtils.successToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.successToast1"))}`
      );
    } else {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast2"))}`
      );
    }
  };

  // NOTE: 회원가입 버튼
  const signUpBtnClick = async () => {
    const value = {
      email: email.trim(),
      pwd: password.trim(),
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      country: country.trim(),
      role: userRole.trim(),
      verifyCode: verifyCode.trim(),
    };

    if (regexpUtils.regexpRejectPortalEmailTest(value.email)) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast9"))}`
      );
      return false;
    }

    if (!regexpUtils.regexpEmailTest(value.email)) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast3"))}`
      );
      return false;
    }

    if (!verifyCodeCheck || value.verifyCode.length !== 6) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast4"))}`
      );
      return false;
    }

    if (
      !regexpUtils.regexpPasswordTest(value.pwd) ||
      value.pwd !== passwordConfirm
    ) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast5"))}`
      );
      return false;
    }

    if (
      regexpUtils.regexpStringNotOnlyTest(value.fullName) ||
      value.fullName.length < 2
    ) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast6"))}`
      );
      return false;
    }

    if (
      regexpUtils.regexpStringNotOnlyTest(country) ||
      value.country.length < 2
    ) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast7"))}`
      );
      return false;
    }

    if (value.companyName.length < 2) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("signUp.toast.errorToast8"))}`
      );
      return false;
    }

    await dispatch(userAction.signUp(value));
  };

  // NOTE: 비밀번호 정규식이 맞는지 체크
  useEffect(() => {
    if (!regexpUtils.regexpPasswordTest(password)) {
      setErrors({ ...errors, password: true });
    } else {
      setErrors({ ...errors, password: false });
    }
  }, [password]);

  // NOTE: 비밀번호 확인값이 비밀번호랑 동일한 지 체크
  useEffect(() => {
    if (password !== passwordConfirm) {
      setErrors({ ...errors, passwordConfirm: true });
    } else {
      setErrors({ ...errors, passwordConfirm: false });
    }
  }, [passwordConfirm]);

  // NOTE: Email 전송 시간이 time over 됐는지 체크
  useEffect(() => {
    if (timeOver) {
      setIsSendCode(false);
      setVerifyCode("");
    }
  }, [timeOver]);

  // NOTE: sign up 성공시
  useEffect(() => {
    if (signUpUserLogin) {
      navigate(url.auth.signIn, { replace: true });
    }
  }, [signUpUserLogin]);

  // ANCHOR: text 분기
  let textObject = {
    title: null,
    desc: null,
  };

  if (userRole) {
    textObject.title = `${stringUtils.firstCharToUpperCase(
      t("signUp.signUpFormTitle")
    )} (${stringUtils.firstCharToUpperCase(t(`common.${userRole}`))})`;
    textObject.desc = stringUtils.firstCharToUpperCase(
      t("signUp.signUpFormDesc")
    );
  } else {
    textObject.title = stringUtils.firstCharToUpperCase(
      t("signUp.signUpTypeTitle")
    );
  }
  const backEventFunc = () => {
    if (userRole) {
      setUserRole(null);
      dispatch(userAction.initUserType());
    } else {
      router.back();
    }
  };

  // NOTE: overlap class 모음 START
  const labelClass =
    "mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']";
  const buttonClass =
    "ml-1 flex-none rounded-sm border border-gray-500 bg-white px-4 text-sm font-semibold text-gray-700";
  const liClass = "mb-4 flex flex-col";
  const inputClass = "form-input px-2 py-1.5 font-semibold transition";
  const errorTextClass = "mt-2 text-red-500";
  // NOTE: overlap class 모음 END

  return (
    <>
      <AuthCommonTitle
        title={textObject.title}
        desc={textObject.desc}
        backButtonOn={true}
        userRole={userRole}
        backEvent={backEventFunc}
      />

      {userRole ? (
        <div className="mb-4">
          {/* // NOTE: user role type 선택 후 상세 정보 입력 */}
          <ul className="mb-8 flex flex-col gap-2">
            <li className="mb-4">
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.email"))}
              </label>
              <div className="flex">
                <input
                  type="email"
                  className={inputClass}
                  placeholder={stringUtils.firstCharToUpperCase(
                    t("signUp.email")
                  )}
                  onChange={signUpOnChangeEvent}
                  value={email}
                  data-role="email"
                />
                <button onClick={emailSendBtnClick} className={buttonClass}>
                  {stringUtils.firstCharToUpperCase(t("signUp.send"))}
                </button>
              </div>
            </li>
            <li className="relative mb-4">
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.verificationCode"))}
              </label>
              <div className="flex">
                <input
                  type="text"
                  className={inputClass}
                  placeholder={`${stringUtils.firstCharToUpperCase(
                    t("signUp.verificationCode")
                  )} ${t("signUp.verificationDesc")}`}
                  onChange={signUpOnChangeEvent}
                  value={verifyCode}
                  disabled={!isSendCode}
                  data-role="verifyCode"
                  maxLength={6}
                />
                <button
                  onClick={emailSendConfirmBtnClick}
                  className={buttonClass}
                >
                  {stringUtils.firstCharToUpperCase(t("signUp.confirm"))}
                </button>
              </div>
              {!timeOver && isSendCode && (
                <EmailTimer className="email-verify-code-timer" />
              )}
            </li>
            <li className={liClass}>
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.password"))}
              </label>
              <input
                type="password"
                className={inputClass}
                placeholder={stringUtils.firstCharToUpperCase(
                  t("signUp.password")
                )}
                onChange={signUpOnChangeEvent}
                value={password}
                data-role="password"
              />
              {errors.password && (
                <InputHelperText
                  helperText={stringUtils.firstCharToUpperCase(
                    t("signUp.passwordError")
                  )}
                  id="password"
                  label="Password"
                  className={errorTextClass}
                />
              )}
            </li>
            <li className={liClass}>
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.confirmPassword"))}
              </label>
              <input
                type="password"
                className={inputClass}
                placeholder={stringUtils.firstCharToUpperCase(
                  t("signUp.confirmPassword")
                )}
                onChange={signUpOnChangeEvent}
                value={passwordConfirm}
                data-role="passwordConfirm"
              />
              {errors.passwordConfirm && (
                <InputHelperText
                  helperText={stringUtils.firstCharToUpperCase(
                    t("signUp.confirmPasswordError")
                  )}
                  id="passwordConfirm"
                  label="password"
                  className={errorTextClass}
                />
              )}
            </li>

            <li className={liClass}>
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.fullName"))}
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder={stringUtils.firstCharToUpperCase(
                  t("signUp.fullName")
                )}
                onChange={signUpOnChangeEvent}
                value={fullName}
                data-role="fullName"
              />
            </li>
            <li className={liClass}>
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.companyName"))}
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder={stringUtils.firstCharToUpperCase(
                  t("signUp.companyName")
                )}
                onChange={signUpOnChangeEvent}
                value={companyName}
                data-role="companyName"
              />
            </li>
            <li className={liClass}>
              <label className={labelClass}>
                {stringUtils.firstCharToUpperCase(t("signUp.country"))}
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder={stringUtils.firstCharToUpperCase(
                  t("signUp.country")
                )}
                onChange={signUpOnChangeEvent}
                value={country}
                data-role="country"
              />
            </li>

            <div>
              <button
                onClick={signUpBtnClick}
                className="flex w-full items-center justify-center rounded bg-primary-500 p-3 font-semibold text-white"
              >
                {stringUtils.firstCharToUpperCase(t("signUp.getStarted"))}
              </button>
            </div>
          </ul>
          <p className="text-sm text-gray-400">
            By creating an account on Packposs you acknowledge that you read and
            agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      ) : (
        // NOTE: user role type 선택
        <AccountTypeContainer
          userRoleTypeButtonClick={userRoleTypeButtonClick}
        />
      )}
    </>
  );
};

export default SignUpForm;
