import { useTranslation } from "react-i18next";
import SignInForm from "src/components/forms/SignInForm";
import AuthCommonTitle from "src/components/title/AuthCommonTitle";
import * as stringUtils from "src/utils/stringUtils";

const SignInContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <AuthCommonTitle
        title={stringUtils.firstCharToUpperCase(t("signIn.signInTitle"))}
        desc={stringUtils.firstCharToUpperCase(t("signIn.signInDesc"))}
      />
      <SignInForm />
    </>
  );
};

export default SignInContainer;
