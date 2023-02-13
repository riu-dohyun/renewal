import Link from "next/link";
import { useTranslation } from "react-i18next";
import url from "src/config/url";
import * as stringUtils from "src/utils/stringUtils";

const NotLoginMenu = props => {
  const { showClick, active } = props;
  const { t } = useTranslation();

  const dropDownItemClass =
    "items-center flex px-4 py-2 text-sm text-gray-700 active:bg-gray-100 active:text-gray-900";
  const iconSpanClass = "material-symbols-outlined mr-2 text-base";

  return (
    <div className="relative w-10 flex-none sm:ml-auto">
      <button
        className={`dropdown_filter ${active ? "active" : ""}`}
        onClick={showClick}
      >
        <span className="material-symbols-outlined">apps</span>
      </button>

      <div
        className={`dropdown_container ${active ? "is-on-page active" : ""}`}
      >
        <div className="py-1" role="none">
          <Link href={`${url.auth.signIn}`} className={dropDownItemClass}>
            <span className={iconSpanClass}>login</span>
            {stringUtils.firstCharToUpperCase(t("common.signIn"))}
          </Link>

          <Link href={`${url.auth.signUp}`} className={dropDownItemClass}>
            <span className={iconSpanClass}>person_add</span>
            {stringUtils.firstCharToUpperCase(t("common.signUp"))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotLoginMenu;
