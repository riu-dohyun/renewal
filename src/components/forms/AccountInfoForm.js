import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as noPersistCommonActions from "src/store/noPersistCommon.store";
import * as userActions from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";
import ChoiceModal from "../modal/ChoiceModal";
import EmailVerifyForm from "./EmailVerifyForm";

const AccountInfoForm = props => {
  const { t } = useTranslation();
  const accountInfoForm = useRef();
  const dispatch = useDispatch();
  const { changeEmail, confirmCheckEmailVerifyCode } = useSelector(
    state => state.noPersistCommon
  );
  const [editState, setEditState] = useState(false);
  const [changeEmails, setChangeEmails] = useState("");
  const [changeFullName, setChangeFullName] = useState("");
  const [changeCompanyName, setChangeCompanyName] = useState("");
  const [changeCountry, setChangeCountry] = useState("");
  const [modalOpened, setModalOpened] = useState();
  const { uid, email, fullName, companyName, country } = props;

  const emailTypeText = "email";
  const fullNameTypeText = "fullName";
  const companyNameTypeText = "companyName";
  const countryTypeText = "country";

  const setInitData = () => {
    setChangeEmails(email);
    setChangeFullName(fullName);
    setChangeCompanyName(companyName);
    setChangeCountry(country);
  };

  const editEvent = () => {
    setEditState(!editState);

    if (editState) {
      setInitData();
    }
  };

  const inputChangeEvent = e => {
    const target = e.currentTarget;
    const type = target.dataset.type;
    const value = target.value;

    if (type === fullNameTypeText) {
      setChangeFullName(value);
    } else if (type === companyNameTypeText) {
      setChangeCompanyName(value);
    } else if (type === countryTypeText) {
      setChangeCountry(value);
    }
  };

  const updateUserInfoTriggers = props => {
    const { userInfo } = props;

    dispatch(
      userActions.updateUserInfoTrigger({
        uid: uid,
        targetUid: uid,
        userInfo: userInfo,
      })
    );
  };

  const updateUserInfoEvent = e => {
    e.preventDefault();

    const form = accountInfoForm.current;

    const emailValue = form[emailTypeText].value.trim();
    const fullNameValue = form[fullNameTypeText].value.trim();
    const companyNameValue = form[companyNameTypeText].value.trim();
    const countryValue = form[countryTypeText].value.trim();

    if (!emailValue || !fullNameValue || !companyNameValue || !countryValue) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("myAccount.toast.errorToast1"))}`
      );
      return false;
    }

    const userInfo = JSON.stringify({
      email: emailValue,
      fullName: fullNameValue,
      companyName: companyNameValue,
      country: countryValue,
    });

    updateUserInfoTriggers({ userInfo });
  };

  const modalOpen = e => {
    e.preventDefault();
    setModalOpened(true);
  };

  const modalClose = e => {
    e.preventDefault();
    setModalOpened(false);
  };

  const modalOkFn = e => {
    e.preventDefault();
    if (confirmCheckEmailVerifyCode) {
      const userInfo = JSON.stringify({
        email: changeEmail,
        fullName: fullName,
        companyName: companyName,
        country: country,
      });

      updateUserInfoTriggers({ userInfo });
      setModalOpened(false);
      toastUtils.successToast(
        `${stringUtils.firstCharToUpperCase(
          t("myAccount.toast.successToast1")
        )}`
      );
      dispatch(noPersistCommonActions.initChangeEmail());
    } else {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(
          t("myAccount.toast.successToast1")
        )}`
      );
    }
  };

  useEffect(() => {
    setInitData();
    setEditState(false);
  }, [email, fullName, companyName, country, changeEmail]);

  return (
    <>
      <ChoiceModal
        title={stringUtils.firstCharToUpperCase(
          t("myAccount.emailChangeChoiceModalTitle")
        )}
        isOpen={modalOpened}
        okFn={modalOkFn}
        okText={stringUtils.firstCharToUpperCase(
          t("myAccount.emailChangeChoiceModalOkText")
        )}
        cancelFn={modalClose}
        cancelText={stringUtils.firstCharToUpperCase(
          t("myAccount.emailChangeChoiceModalCancelText")
        )}
        closeTimeoutMS={0}
      >
        <EmailVerifyForm type="updateUserInfo" />
      </ChoiceModal>
      <div className="rounded-md bg-white p-3 shadow md:p-6">
        <div className="flex items-center justify-between pb-4">
          <h3 className="font-bold">
            {stringUtils.firstCharToUpperCase(t("myAccount.accountInfo"))}
          </h3>
          <button
            className="flex rounded-full border border-slate-200 bg-slate-100 p-1.5 text-slate-400"
            onClick={editEvent}
          >
            <span className="material-symbols-outlined text-[20px]">
              {editState ? "close" : "edit"}
            </span>
          </button>
        </div>
        <form ref={accountInfoForm}>
          <ul className="flex flex-col">
            <li>
              <label className="block">
                <span className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']">
                  {stringUtils.firstCharToUpperCase(t("myAccount.email"))}
                </span>
                <div className="relative flex pb-6">
                  <input
                    disabled
                    required
                    defaultValue={changeEmails}
                    name={emailTypeText}
                    type="email"
                    className="disabled peer form-input grow basis-4/5 invalid:border-pink-500 invalid:text-pink-600"
                    placeholder={stringUtils.firstCharToUpperCase(
                      t("myAccount.email")
                    )}
                  />
                  {editState && (
                    <button
                      onClick={modalOpen}
                      className="ml-1 flex-none rounded-sm border border-gray-500 bg-white px-4 text-sm font-semibold text-gray-700"
                    >
                      {stringUtils.firstCharToUpperCase(t("myAccount.edit"))}
                    </button>
                  )}
                </div>
              </label>
            </li>
            <li>
              <label className="block">
                <span className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']">
                  {stringUtils.firstCharToUpperCase(t("myAccount.name"))}
                </span>
                <div className="relative flex pb-6">
                  <input
                    value={changeFullName ? changeFullName : ""}
                    onChange={inputChangeEvent}
                    data-type={fullNameTypeText}
                    disabled={!editState}
                    name={fullNameTypeText}
                    type="text"
                    required
                    className={`peer form-input invalid:border-pink-500 invalid:text-pink-600 ${
                      !editState ? "disabled" : ""
                    }`}
                    placeholder={stringUtils.firstCharToUpperCase(
                      t("myAccount.name")
                    )}
                  />
                </div>
              </label>
            </li>
            <li>
              <label className="block">
                <span className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']">
                  {stringUtils.firstCharToUpperCase(t("myAccount.companyName"))}
                </span>
                <div className="relative flex pb-6">
                  <input
                    value={changeCompanyName ? changeCompanyName : ""}
                    onChange={inputChangeEvent}
                    data-type={companyNameTypeText}
                    disabled={!editState}
                    type="text"
                    required
                    name={companyNameTypeText}
                    className={`peer form-input invalid:border-pink-500 invalid:text-pink-600 ${
                      !editState ? "disabled" : ""
                    }`}
                    placeholder={stringUtils.firstCharToUpperCase(
                      t("myAccount.companyName")
                    )}
                  />
                </div>
              </label>
            </li>
            <li>
              <label className="block">
                <span className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']">
                  {stringUtils.firstCharToUpperCase(t("myAccount.country"))}
                </span>
                <div className="relative flex pb-6">
                  <input
                    value={changeCountry ? changeCountry : ""}
                    onChange={inputChangeEvent}
                    data-type={countryTypeText}
                    disabled={!editState}
                    type="text"
                    className={`peer form-input invalid:border-pink-500 invalid:text-pink-600 ${
                      !editState ? "disabled" : ""
                    }`}
                    name={countryTypeText}
                    placeholder={stringUtils.firstCharToUpperCase(
                      t("myAccount.country")
                    )}
                  />
                </div>
              </label>
            </li>
          </ul>
          {editState && (
            <div className="flex justify-center py-4">
              <button
                onClick={updateUserInfoEvent}
                className="rounded-full border border-slate-300 bg-slate-50 px-4 py-1 font-semibold hover:border-slate-400 hover:bg-slate-100"
              >
                {stringUtils.firstCharToUpperCase(t("myAccount.save"))}
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default AccountInfoForm;
