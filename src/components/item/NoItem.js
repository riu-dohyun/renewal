import { useTranslation } from "react-i18next";
import * as stringUtils from "src/utils/stringUtils";

const NoItem = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-3 bg-white py-16 text-center shadow-sm lg:shadow-none">
      <span className="material-symbols-outlined text-5xl text-gray-300">
        error
      </span>
      <p className="text-gray-400">
        {stringUtils.firstCharToUpperCase(t("noItem.noItem"))}
      </p>
    </div>
  );
};

export default NoItem;
