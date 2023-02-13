import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as regexpUtils from "src/utils/regexpUtils";
import * as stringUtils from "src/utils/stringUtils";

const QuotePricingItem = props => {
  const { t } = useTranslation();
  const { addQuoteDeleteEvent, index, pricing } = props;
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [priceTotalValue, setPriceTotalValue] = useState(null);
  const type = {
    quantity: "quantity",
    unitPrice: "unitPrice",
  };

  const inputOnChangeEvent = e => {
    e.preventDefault();
    const target = e.currentTarget;
    const targetType = target.dataset.type;
    const value = target.value;

    const onlyNumberValue = regexpUtils.regexpNumberNotOnlyReplace(value);
    const onlyNumberAndDotValue =
      regexpUtils.regexpNumberAndDotNotOnlyReplace(value);

    if (type.quantity === targetType) {
      setQuantity(onlyNumberValue);
    } else if (type.unitPrice === targetType) {
      setUnitPrice(onlyNumberAndDotValue);
    }
  };

  // const initEvent = e => {
  //   e.preventDefault();
  //   setQuantity("");
  //   setUnitPrice("");
  // };

  useEffect(() => {
    if (pricing?.qty) {
      setQuantity(pricing.qty);
    }
    if (pricing?.unitPrice) {
      setUnitPrice(pricing.unitPrice);
    } else {
      setUnitPrice("");
    }
  }, []);

  useEffect(() => {
    const quantityValue = Number(quantity);
    const unitPriceValue = Number(unitPrice);
    const numberCheck = !isNaN(quantityValue) && !isNaN(unitPriceValue);
    if (numberCheck) {
      setPriceTotalValue(quantity * unitPrice);
    } else {
      setPriceTotalValue(0);
    }
  }, [quantity, unitPrice]);

  return (
    <div className={`p-3 ${index === 1 && "first:border-b"}`}>
      <div className="item-center mb-2 flex">
        <h6 className="text-xs font-semibold">
          {index === 1
            ? stringUtils.firstCharToUpperCase(t("quoteRegister.default"))
            : stringUtils.firstCharToUpperCase(t("quoteRegister.secondary"))}
        </h6>
        {index !== 1 && !pricing?.qty && (
          <button
            onClick={addQuoteDeleteEvent}
            className="ml-auto inline-flex rounded-sm text-xs text-red-500 hover:text-red-700"
          >
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          </button>
        )}

        {/* <div className="item-center mb-2 flex">
          <h6 className="text-xs font-semibold">
            {index === 1
              ? stringUtils.firstCharToUpperCase(t("quoteRegister.default"))
              : stringUtils.firstCharToUpperCase(t("quoteRegister.secondary"))}
          </h6>
        </div> */}
      </div>
      <ul className="flex gap-2">
        <li className="basis-1/3">
          <label
            htmlFor={`${type.quantity}${index}`}
            className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            {stringUtils.firstCharToUpperCase(t("quoteRegister.quantity"))}
          </label>
          <input
            id={`${type.quantity}${index}`}
            type="text"
            className="form-input px-2 py-1.5 font-semibold transition"
            placeholder={stringUtils.firstCharToUpperCase(
              t("quoteRegister.quantity")
            )}
            name={`${type.quantity}${index}`}
            value={quantity || ""}
            data-type={type.quantity}
            onChange={inputOnChangeEvent}
          />
        </li>
        <li className="basis-1/3">
          <label
            htmlFor={`${type.unitPrice}${index}`}
            className="mb-1 block text-sm text-slate-400 after:ml-0.5 after:text-red-500 after:content-['*']"
          >
            {stringUtils.firstCharToUpperCase(t("quoteRegister.unitPrice"))} ($)
          </label>
          <input
            id={`${type.unitPrice}${index}`}
            type="text"
            className="form-input px-2 py-1.5 font-semibold transition"
            placeholder={stringUtils.firstCharToUpperCase(
              t("quoteRegister.unitPrice")
            )}
            name={`${type.unitPrice}${index}`}
            value={unitPrice || ""}
            data-type={type.unitPrice}
            onChange={inputOnChangeEvent}
          />
        </li>
        <li className="basis-1/3">
          <label htmlFor="" className="mb-1 block text-sm text-slate-400">
            {stringUtils.firstCharToUpperCase(t("quoteRegister.total"))} ($)
          </label>
          <input
            type="text"
            className="form-input px-2 py-1.5 font-semibold transition disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            placeholder={stringUtils.firstCharToUpperCase(
              t("quoteRegister.total")
            )}
            disabled
            name={`totalPrice${index}`}
            value={priceTotalValue || 0}
          />
        </li>
      </ul>
    </div>
  );
};

export default QuotePricingItem;
