import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import url from "src/config/url";
import * as userAction from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";

const SignInForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { signUpUserLogin, passwordResetStep } = useSelector(
    state => state.user
  );
  const [forms, setForms] = useState({
    email: "",
    pwd: "",
  });

  const signInOnChangeEvent = e => {
    const target = e.currentTarget;
    const value = target.value;
    const role = target.dataset.role;

    setForms({ ...forms, [`${role}`]: value });
  };

  const signInBtnClick = e => {
    e.preventDefault();
    dispatch(userAction.signIn(forms));
  };

  // NOTE: 회원가입 성공 후 successToast 알림
  useEffect(() => {
    if (signUpUserLogin) {
      toastUtils.successToast(
        `${stringUtils.firstCharToUpperCase(t("signIn.successToast1"))}`
      );
      dispatch(userAction.setSignUpUserLogin(false));
    }
  }, [signUpUserLogin]);

  // NOTE: 비밀번호 reset 성공 후 successToast 알림
  useEffect(() => {
    if (passwordResetStep === 2) {
      toastUtils.successToast(
        `${stringUtils.firstCharToUpperCase(t("signIn.successToast2"))}`
      );
      dispatch(userAction.setPasswordResetStep(0));
    }
  }, [passwordResetStep]);
  return (
    <>
      <form className="mb-4">
        <ul className="mb-8 flex flex-col gap-2">
          <li className="mb-4">
            <label className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
              {stringUtils.firstCharToUpperCase(t("signIn.email"))}
            </label>
            <input
              type="email"
              placeholder={stringUtils.firstCharToUpperCase(t("signIn.email"))}
              className="form-input px-2 py-1.5 font-semibold transition"
              onChange={signInOnChangeEvent}
              value={forms.email}
              data-role="email"
            />
          </li>
          <li>
            <label className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
              {stringUtils.firstCharToUpperCase(t("signIn.password"))}
            </label>
            <input
              type="password"
              className="form-input px-2 py-1.5 font-semibold transition"
              placeholder={stringUtils.firstCharToUpperCase(
                t("signIn.password")
              )}
              onChange={signInOnChangeEvent}
              value={forms.pwd}
              data-role="pwd"
            />
          </li>
        </ul>
        <button
          onClick={signInBtnClick}
          className="flex w-full items-center justify-center rounded bg-primary-500 p-3 font-semibold text-white"
        >
          {stringUtils.firstCharToUpperCase(t("signIn.signIn"))}
        </button>
      </form>
      <ul className="flex flex-col gap-1">
        <li>
          <Link
            href={`${url.auth.signUp}`}
            className="text-sm text-gray-400 underline hover:text-gray-700 hover:no-underline"
          >
            {stringUtils.firstCharToUpperCase(t("signIn.signUpDesc"))}
          </Link>
        </li>
        <li>
          <Link
            href={`${url.auth.passwordReset}`}
            className="text-sm text-gray-400 underline hover:text-gray-700 hover:no-underline"
          >
            {stringUtils.firstCharToUpperCase(t("signIn.forgetPasswordDesc"))}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SignInForm;
