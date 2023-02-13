import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import * as userActions from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";

const AccountPasswordChangeForm = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { uid } = props;
  const [editState, setEditState] = useState(false);
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmNewPwd, setConfirmNewPwd] = useState("");

  const currentPwdName = "currentPassword";
  const newPwdName = "newPassword";
  const confirmNewPwdName = "confirmNewPassword";

  const initValue = () => {
    setCurrentPwd("");
    setNewPwd("");
    setConfirmNewPwd("");
  };

  const editEvent = () => {
    setEditState(!editState);
    initValue();
  };

  const inputOnChange = e => {
    const target = e.currentTarget;
    const type = target.dataset.type;
    const value = target.value;

    if (type === currentPwdName) {
      setCurrentPwd(value);
    } else if (type === newPwdName) {
      setNewPwd(value);
    } else if (type === confirmNewPwdName) {
      setConfirmNewPwd(value);
    }
  };

  const changePasswordEvent = e => {
    e.preventDefault();

    if (newPwd !== confirmNewPwd) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("myAccount.toast.errorToast3"))}`
      );
      return false;
    }

    dispatch(
      userActions.updateUserPwdTrigger({
        uid,
        targetUid: uid,
        oldPwd: currentPwd,
        newPwd: newPwd,
      })
    );

    setEditState(!editState);
    initValue();
  };

  const inputClass = `form-input ${!editState ? "disabled" : ""}`;
  return (
    <>
      <div className="rounded-md bg-white p-3 shadow md:p-6">
        <div className="flex items-center justify-between pb-4">
          <h3 className="font-bold">
            {stringUtils.firstCharToUpperCase(
              t("myAccount.changeYourPassword")
            )}
          </h3>
          <button
            onClick={editEvent}
            className="flex rounded-full border border-slate-200 bg-slate-100 p-1.5 text-slate-400"
          >
            <span className="material-symbols-outlined text-[20px]">
              {editState ? "close" : "edit"}
            </span>
          </button>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <label
              htmlFor=""
              className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              {stringUtils.firstCharToUpperCase(t("myAccount.currentPassword"))}
            </label>
            <input
              type="password"
              name={currentPwdName}
              data-type={currentPwdName}
              className={inputClass}
              disabled={!editState}
              placeholder={stringUtils.firstCharToUpperCase(
                t("myAccount.currentPassword")
              )}
              value={currentPwd}
              onChange={inputOnChange}
            />
          </li>
          <li>
            <label
              htmlFor=""
              className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              {stringUtils.firstCharToUpperCase(t("myAccount.newPassword"))}
            </label>
            <input
              type="password"
              name={newPwdName}
              data-type={newPwdName}
              className={inputClass}
              disabled={!editState}
              placeholder={stringUtils.firstCharToUpperCase(
                t("myAccount.newPassword")
              )}
              value={newPwd}
              onChange={inputOnChange}
            />
          </li>
          <li>
            <label
              htmlFor=""
              className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']"
            >
              {stringUtils.firstCharToUpperCase(
                t("myAccount.confirmNewPassword")
              )}
            </label>
            <input
              type="password"
              name={confirmNewPwdName}
              data-type={confirmNewPwdName}
              className={inputClass}
              disabled={!editState}
              placeholder={stringUtils.firstCharToUpperCase(
                t("myAccount.confirmNewPassword")
              )}
              value={confirmNewPwd}
              onChange={inputOnChange}
            />
          </li>
        </ul>
        {editState && (
          <div className="flex justify-center py-4 md:pt-6">
            <button
              onClick={changePasswordEvent}
              className="rounded-full border border-slate-300 bg-slate-50 px-4 py-1 font-semibold hover:border-slate-400 hover:bg-slate-100"
            >
              {stringUtils.firstCharToUpperCase(t("myAccount.save"))}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AccountPasswordChangeForm;
