import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as regexpUtils from "src/utils/regexpUtils";
import * as stringUtils from "src/utils/stringUtils";

const PackagingQuotesItem = props => {
  const { t } = useTranslation();
  const { item } = props;
  const [twoQuotesShow, setTwoQuotesShow] = useState(false);
  const [quotesArray, setQuotesArray] = useState([]);
  const [oneValue, setOneValue] = useState("");
  const [twoValue, setTwoValue] = useState("");

  const addAndRemoveButtonOnClickEvent = e => {
    e.preventDefault();
    setTwoQuotesShow(!twoQuotesShow);
  };

  const quotesInputChangeEvent = e => {
    const target = e.target;
    const value = target.value;
    const index = Number(target.dataset.index);
    const newArray = [...quotesArray];
    let onlyNumberValue = regexpUtils.regexpNumberNotOnlyReplace(value);
    if (index === 0) {
      setOneValue(onlyNumberValue);
    } else if (index === 1) {
      setTwoValue(onlyNumberValue);
    }
    newArray[index] = onlyNumberValue;
    setQuotesArray(newArray);
  };

  // NOTE: Class Start

  // NOTE: Class End

  return (
    <>
      <input type="hidden" value={quotesArray} name={`quotes_${item.itemId}`} />
      <ul className="flex flex-col justify-center gap-2 sm:ml-6">
        <li className="w-full">
          <label className="mb-1 block text-xs text-slate-400 after:ml-0.5">
            {stringUtils.firstCharToUpperCase(t("packagingRequest.estimate"))} 1
          </label>
          <input
            onChange={quotesInputChangeEvent}
            data-index="0"
            value={oneValue}
            type="number"
            className="form-input px-2 py-1.5 font-semibold transition"
          />
        </li>
        {twoQuotesShow && (
          <li className="w-full">
            <label className="mb-1 block text-xs text-slate-400 after:ml-0.5">
              {stringUtils.firstCharToUpperCase(t("packagingRequest.estimate"))}{" "}
              2
            </label>
            <input
              onChange={quotesInputChangeEvent}
              data-index="1"
              value={twoValue}
              type="number"
              className="form-input px-2 py-1.5 font-semibold transition"
            />
          </li>
        )}
        <li className="flex w-full justify-center self-end">
          <button
            onClick={addAndRemoveButtonOnClickEvent}
            type="button"
            className="flex items-center text-slate-400 hover:text-slate-500"
          >
            <span className="material-symbols-outlined leading-[34px]">
              {twoQuotesShow ? "do_not_disturb_on" : "add_circle"}
            </span>
          </button>
        </li>
      </ul>
    </>
  );
};

export default PackagingQuotesItem;
