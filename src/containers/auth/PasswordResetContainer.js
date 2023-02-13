import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import EmailVerifyForm from "src/components/forms/EmailVerifyForm";
import PasswordResetForm from "src/components/forms/PasswordResetForm";
import AuthCommonTitle from "src/components/title/AuthCommonTitle";
import url from "src/config/url";
import * as userAction from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";

const PasswordResetContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { passwordResetStep } = useSelector(state => state.user);
  const objInitValue = {
    title: null,
    desc: null,
  };
  let obj = { ...objInitValue };

  if (passwordResetStep === 0) {
    obj = {
      ...objInitValue,
      title: stringUtils.firstCharToUpperCase(t("passwordReset.step1Title")),
      desc: stringUtils.firstCharToUpperCase(t("passwordReset.step1Desc")),
    };
  } else {
    obj = {
      ...objInitValue,
      title: stringUtils.firstCharToUpperCase(t("passwordReset.step2Title")),
    };
  }

  // 페이지 다른곳으로 이동 시
  useEffect(() => {
    return () => {
      dispatch(userAction.setPasswordResetStep(0));
    };
  }, []);

  return (
    <div className="PasswordReset">
      <div className="PasswordReset__inner-wrap">
        <AuthCommonTitle
          title={obj.title}
          desc={obj.desc}
          backButtonOn={true}
        />
        {passwordResetStep === 0 && <EmailVerifyForm />}
        {passwordResetStep === 1 && <PasswordResetForm />}

        <Link
          href={url.auth.signIn}
          className="text-sm text-gray-400 underline hover:text-gray-700 hover:no-underline"
        >
          {stringUtils.firstCharToUpperCase(t("passwordReset.signInMoveText1"))}
        </Link>
      </div>
    </div>
  );
};

export default PasswordResetContainer;
