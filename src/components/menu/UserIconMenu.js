import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import url from "src/config/url";
import * as userActions from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";

const UserIconMenu = () => {
  const { uid } = useSelector(state => state.user);
  const { t } = useTranslation();
  const navigate = useRouter();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const userIconClickEvent = () => {
    setActive(!active);
  };

  // Logout Event
  const logoutBtnClick = e => {
    e.preventDefault();
    if (uid === -1 || uid === "-1" || !uid) {
      localStorage.removeItem("persist:root");
      navigate(url.home);
    } else {
      dispatch(userActions.logout({ uid }));
    }
  };

  const dropDownItemClass =
    "items-center flex px-4 py-2 text-sm text-gray-700 active:bg-gray-100 active:text-gray-900";
  const iconSpanClass = "material-symbols-outlined mr-2 text-base";

  return (
    <div className="relative w-10 flex-none sm:ml-auto">
      <button
        className={`dropdown_filter ${active ? "active" : ""}`}
        onClick={userIconClickEvent}
      >
        <span className="material-symbols-outlined">account_circle</span>
      </button>

      <div
        className={`dropdown_container ${active ? "is-on-page active" : ""}`}
      >
        <div className="py-1" role="none">
          <Link href={`${url.auth.myAccount}`} className={dropDownItemClass}>
            <span className={iconSpanClass}>settings_account_box</span>My
            account
          </Link>
          <Link href="#" className={dropDownItemClass} onClick={logoutBtnClick}>
            <span className={iconSpanClass}>logout</span>
            {stringUtils.firstCharToUpperCase(t("common.logout"))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserIconMenu;
