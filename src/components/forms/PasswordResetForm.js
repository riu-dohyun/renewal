import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import InputHelperText from "src/components/input/InputHelperText";
import url from "src/config/url";
import * as userAction from "src/store/user.store";
import * as regexpUtils from "src/utils/regexpUtils";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";

const PasswordResetForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useRouter();

  const { passwordResetEmail, passwordResetStep, verifyCode } = useSelector(
    state => state.user
  );
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // NOTE: input change 이벤트
  const signUpOnChangeEvent = e => {
    const target = e.currentTarget;
    const value = target.value;
    const role = target.dataset.role;

    if (role === "password") {
      setPassword(value);
    }
    if (role === "passwordConfirm") {
      setPasswordConfirm(value);
    }
  };

  // NOTE: error State
  const [errors, setErrors] = useState({
    password: false,
    passwordConfirm: true,
  });

  const passwordResetBtnEvent = async () => {
    if (passwordResetEmail === null || passwordResetStep !== 1) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.errorToast3")
        )}`
      );
      await dispatch(userAction.setPasswordResetStep());
      return false;
    }
    if (!regexpUtils.regexpPasswordTest(password)) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.errorToast4")
        )}`
      );
      return false;
    }
    if (password !== passwordConfirm) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.errorToast5")
        )}`
      );
      return false;
    }

    await dispatch(
      userAction.passwordReset({
        email: passwordResetEmail,
        pwd: password,
        verificationCode: verifyCode,
      })
    );

    await navigate(url.auth.signIn, { replace: true });
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

  return (
    <div className="mb-4">
      <ul className="mb-8 flex flex-col gap-2">
        <li className="mb-4 flex flex-col">
          <label className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
            {stringUtils.firstCharToUpperCase(t("passwordReset.password"))}
          </label>
          <input
            type="password"
            className="form-input px-2 py-1.5 font-semibold transition"
            placeholder={stringUtils.firstCharToUpperCase(
              t("passwordReset.password")
            )}
            onChange={signUpOnChangeEvent}
            value={password}
            data-role="password"
          />
          {errors.password && (
            <InputHelperText
              helperText={stringUtils.firstCharToUpperCase(
                t("passwordReset.toast.errorToast4")
              )}
              id="password"
              label="Password"
              className="mt-2 text-red-500"
            />
          )}
        </li>
        <li className="mb-4 flex flex-col">
          <label className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']">
            {stringUtils.firstCharToUpperCase(
              t("passwordReset.confirmPassword")
            )}
          </label>
          <input
            type="password"
            className="form-input px-2 py-1.5 font-semibold transition"
            placeholder={stringUtils.firstCharToUpperCase(
              t("passwordReset.confirmPassword")
            )}
            onChange={signUpOnChangeEvent}
            value={passwordConfirm}
            data-role="passwordConfirm"
          />
          {errors.passwordConfirm && (
            <InputHelperText
              helperText={stringUtils.firstCharToUpperCase(
                t("passwordReset.toast.errorToast5")
              )}
              id="passwordConfirm"
              label="password"
              className="mt-2 text-red-500"
            />
          )}
        </li>
      </ul>
      <div>
        <button
          onClick={passwordResetBtnEvent}
          className="flex w-full items-center justify-center rounded bg-primary-500 p-3 font-semibold text-white"
        >
          {stringUtils.firstCharToUpperCase(
            t("passwordReset.toast.RegisterPassword")
          )}
        </button>
      </div>
    </div>
    // <Styled.Wrapper>
    //   <InputWrap
    //     className="sign-up-form__input-wrap__btn-wrap full"
    //     error={errors.password}
    //   >
    //     <BasicInput
    //       type="password"
    //       placeholder="Password"
    //       onChange={signUpOnChangeEvent}
    //       className="sign-up-form__input-wrap__btn-wrap__input"
    //       value={password}
    //       datasetRole="password"
    //     />
    //     {errors.password && (
    //       <InputHelperText
    //         helperText="At least 1 number, at least 1 special character, at least 6-16 lengths"
    //         id="password"
    //         label="Password"
    //         className="sign-up-form__input-wrap__btn-wrap__helper-text"
    //       />
    //     )}
    //   </InputWrap>
    //   <InputWrap
    //     className="sign-up-form__input-wrap__btn-wrap full"
    //     error={errors.passwordConfirm}
    //   >
    //     <BasicInput
    //       type="password"
    //       placeholder="Confirm password"
    //       onChange={signUpOnChangeEvent}
    //       className="sign-up-form__input-wrap__btn-wrap__input"
    //       value={passwordConfirm}
    //       datasetRole="passwordConfirm"
    //     />
    //     {errors.passwordConfirm && (
    //       <InputHelperText
    //         helperText="Passwords do not match."
    //         id="passwordConfirm"
    //         label="Confirm password"
    //         className="sign-up-form__input-wrap__btn-wrap__helper-text"
    //       />
    //     )}
    //   </InputWrap>

    //   <BasicButton
    //     content="Register a new password"
    //     onClick={passwordResetBtnEvent}
    //     styles={styledConfig.ButtonType.bgMainColorRound}
    //   />
    // </Styled.Wrapper>
  );
};

export default PasswordResetForm;
