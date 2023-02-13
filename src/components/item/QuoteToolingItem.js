import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as commonConfig from "src/config/common";
import * as commonUtils from "src/utils/commonUtils";
import * as regexpUtils from "src/utils/regexpUtils";
import * as stringUtils from "src/utils/stringUtils";

const QuoteToolingItem = props => {
  const { t } = useTranslation();
  const { tooling } = props;
  const [costValue, setCostValue] = useState("");

  const costOnChange = e => {
    const target = e.currentTarget;
    const value = target.value;
    const onlyNumberValue = regexpUtils.regexpNumberAndDotNotOnlyReplace(value);
    setCostValue(onlyNumberValue);
  };
  useEffect(() => {
    if (tooling) {
      setCostValue(tooling.cost);
    } else {
      setCostValue("");
    }
  }, []);
  return (
    <>
      <ul className="mb-2 flex gap-2">
        <li className="basis-1/2">
          <label
            htmlFor=""
            className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['']"
          >
            {stringUtils.firstCharToUpperCase(t("quoteRegister.type"))}
          </label>
          <select
            name="costType[]"
            defaultValue={tooling && Number(tooling.type)}
            className="form-input block w-full border border-l-2 border-gray-300 bg-gray-50 p-2.5 px-2 py-1.5 text-sm font-semibold text-gray-900 transition focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            {commonConfig.quoteCostType.map(item => (
              <Fragment key={item.index}>
                <option value={item.index}>{item.value}</option>
              </Fragment>
            ))}
          </select>
        </li>
        <li className="basis-1/2">
          <label
            htmlFor=""
            className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['']"
          >
            {stringUtils.firstCharToUpperCase(t("quoteRegister.cost"))} ($)
          </label>
          <input
            className="form-input px-2 py-1.5 font-semibold transition"
            type="text"
            name="cost[]"
            value={
              !commonUtils.checkNullAndUndefined(costValue) ? costValue : ""
            }
            onChange={costOnChange}
            placeholder={stringUtils.firstCharToUpperCase(
              t("quoteRegister.cost")
            )}
          />
        </li>
      </ul>
    </>
  );
};

export default QuoteToolingItem;
