import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";

const AccountAccessPasswordForm = () => {
  const { t } = useTranslation();
  const { email } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  const passwordCheckOnChange = e => {
    const target = e.currentTarget;
    const value = target.value;

    setPassword(value);
  };

  const checkPasswordEvent = e => {
    e.preventDefault();
    dispatch(
      userActions.myAccountAccessCheckTrigger({
        email: email,
        pwd: password,
      })
    );
  };

  return (
    <>
      <form className="rounded-md bg-white p-3 shadow md:p-6">
        <div className="flex items-center justify-between pb-4">
          <h3 className="font-bold">
            {stringUtils.firstCharToUpperCase(t("myAccount.confirmPassword"))}
          </h3>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <label className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']">
              {stringUtils.firstCharToUpperCase(t("myAccount.password"))}
            </label>
            <input
              type="password"
              className="form-input"
              placeholder={stringUtils.firstCharToUpperCase(
                t("myAccount.password")
              )}
              value={password}
              onChange={passwordCheckOnChange}
            />
          </li>
        </ul>
        <div className="flex justify-center py-4 md:pt-6">
          <button
            onClick={checkPasswordEvent}
            className="flex items-center rounded-full bg-primary-500 p-2 px-4 text-sm text-white transition hover:bg-primary-600"
          >
            {stringUtils.firstCharToUpperCase(t("myAccount.submit"))}
          </button>
        </div>
      </form>
    </>
  );
};

export default AccountAccessPasswordForm;
