import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as noPersistCommonActions from "src/store/noPersistCommon.store";
import * as userActions from "src/store/user.store";
import * as commonUtils from "src/utils/commonUtils";
import * as regexpUtils from "src/utils/regexpUtils";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";
import EmailTimer from "../timer/EmailTimer";

const EmailVerifyForm = props => {
  const { t } = useTranslation();
  const { type = null } = props;
  const dispatch = useDispatch();
  const { uid, timeOver, verifyCodeHash, email } = useSelector(
    state => state.user
  );

  const updateUserInfoType = "updateUserInfo";

  const [emails, setEmails] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [isSendCode, setIsSendCode] = useState(false);

  const onChangeInput = e => {
    const target = e.currentTarget;
    const value = target.value;
    const role = target.dataset.role;

    if (role === "email") {
      setEmails(value);
    } else if (role === "verifyCode") {
      setVerifyCode(regexpUtils.regexpNumberNotOnlyReplace(value));
    }
  };

  const emailSameCheck = () => {
    if (type === updateUserInfoType && email === emails) {
      toastUtils.infoToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.infoToast1")
        )}`
      );
      return false;
    }
    return true;
  };

  // NOTE: 이메일 전송 버튼
  const emailSendBtnClick = async () => {
    if (!emailSameCheck()) {
      return false;
    }
    setIsSendCode(false);
    setTimeout(() => {
      if (regexpUtils.regexpEmailTest(emails)) {
        dispatch(userActions.setEmailTimeOverInit());
        setIsSendCode(true);
        dispatch(userActions.verifyCodeSend({ email: emails, uid: uid }));
      } else {
        toastUtils.errorToast(
          `${stringUtils.firstCharToUpperCase(
            t("passwordReset.toast.errorToast1")
          )}`
        );
        setIsSendCode(false);
      }
      setVerifyCode("");
    }, 0);
  };

  // NOTE: 이메일로 전송된 code 확인 버튼
  const emailSendConfirmBtnClick = async () => {
    if (!isSendCode) {
      toastUtils.warningToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.warningToast1")
        )}`
      );
      return false;
    }

    const verifyCodeToHash = await commonUtils.verifyCodeHash(verifyCode);
    const verifyCodeChecks = verifyCodeToHash === verifyCodeHash;

    await dispatch(userActions.setVerifyCodeCheck(verifyCodeChecks));
    if (verifyCodeChecks) {
      setIsSendCode(false);

      if (type === "updateUserInfo") {
        dispatch(noPersistCommonActions.setChangeEmail(emails));
      } else {
        await dispatch(userActions.setPasswordResetEmail(emails));
      }
      toastUtils.successToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.successToast1")
        )}`
      );
      await dispatch(userActions.setVerifyCode(verifyCode));
    } else {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(
          t("passwordReset.toast.errorToast2")
        )}`
      );
    }
  };
  return (
    <>
      <div className="mb-4">
        <label className="block">
          <div className="relative flex pb-6">
            <input
              type="email"
              placeholder={stringUtils.firstCharToUpperCase(
                t("passwordReset.email")
              )}
              className="peer form-input grow basis-4/5 invalid:border-pink-500 invalid:text-pink-600"
              onChange={onChangeInput}
              value={emails}
              data-role="email"
            />
            <button
              onClick={emailSendBtnClick}
              type="button"
              className="ml-1 flex-none rounded-sm border border-gray-500 bg-white px-4 text-sm font-semibold text-gray-700"
            >
              {stringUtils.firstCharToUpperCase(t("passwordReset.verifyEmail"))}
            </button>
            <div className="invisible absolute bottom-1 block text-xs text-pink-600 peer-invalid:visible">
              {stringUtils.firstCharToUpperCase(
                t("passwordReset.passwordErrorText")
              )}
            </div>
            {isSendCode && !timeOver && (
              <div className="invisible absolute bottom-1 block text-xs text-blue-600 peer-valid:visible">
                {stringUtils.firstCharToUpperCase(
                  t("passwordReset.verificationCodeSendText")
                )}
              </div>
            )}
          </div>
        </label>
      </div>

      <div className="border-t py-4">
        <label className="block">
          <span className="mb-1 flex text-sm text-slate-500 after:ml-0.5">
            {stringUtils.firstCharToUpperCase(
              t("passwordReset.verificationCodeLabelText")
            )}
          </span>
          <div className="mb-2 flex">
            <input
              type="text"
              className={`${
                !isSendCode && "disabled"
              } peer form-input grow basis-4/5 invalid:border-pink-500 invalid:text-pink-600`}
              placeholder={stringUtils.firstCharToUpperCase(
                t("passwordReset.verificationCode")
              )}
              value={verifyCode}
              disabled={!isSendCode}
              onChange={onChangeInput}
              data-role="verifyCode"
              maxLength={6}
            />
            <button
              onClick={emailSendConfirmBtnClick}
              type="button"
              className={`${
                !isSendCode && "pointer-events-none"
              } ml-1 flex-none rounded-sm border border-gray-${
                !isSendCode ? "200" : "500"
              } bg-white px-4 text-sm font-semibold text-gray-${
                !isSendCode ? "300" : "700"
              }`}
            >
              {stringUtils.firstCharToUpperCase(t("passwordReset.verify"))}
            </button>
          </div>
          {isSendCode && (
            <div className="flex text-sm">
              {!timeOver && (
                <span
                  className={`${
                    !isSendCode ? "text-slate-300" : "text-red-500"
                  }`}
                >
                  <EmailTimer />
                </span>
              )}
              <button
                onClick={emailSendBtnClick}
                className={`${
                  !isSendCode
                    ? "pointer-events-none ml-3 text-slate-300"
                    : "ml-3 text-primary-500"
                } underline`}
              >
                Resend Verification Email
              </button>
            </div>
          )}
        </label>
      </div>
    </>
  );
};

export default EmailVerifyForm;
