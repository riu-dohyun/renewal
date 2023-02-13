import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import CountryImageItem from "../item/CountryImageItem";

const SendSupplierListing = props => {
  const { t } = useTranslation();
  const { list } = props;
  return (
    <Fragment>
      {list &&
        list.map((item, idx) => (
          <Fragment key={idx}>
            <li className="relative">
              <input
                type="checkbox"
                name="supplierList"
                id={`supplier_${idx}`}
                value={idx}
                className="peer absolute top-4 left-4 z-10 rounded-full border-gray-200 text-primary-500 focus:ring-0 focus:ring-primary-500 focus:ring-offset-0 sm:top-1/2 sm:translate-y-[-50%]"
                required=""
              />
              <label
                htmlFor={`supplier_${idx}`}
                className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-4 text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-500 peer-checked:text-gray-600 sm:px-6 sm:py-4"
              >
                <div className="flex w-full flex-wrap items-center sm:flex-nowrap sm:gap-6 sm:pl-6">
                  <div className="mb-4 flex w-full items-center justify-center border-b pb-2 sm:mb-0 sm:basis-6/12 sm:justify-start sm:border-none sm:pb-0">
                    <span className="flex w-16 items-center justify-center rounded border bg-gray-100 p-2">
                      <span className="material-symbols-outlined text-[20px] text-gray-400">
                        image_not_supported
                      </span>
                    </span>
                    <h5 className="ml-2 text-primary-500">
                      {item.companyName}
                    </h5>
                  </div>
                  <div className="flex basis-2/4 items-center sm:basis-3/12">
                    <CountryImageItem national={item.country} />
                    <p className="ml-2 text-sm">{item.country}</p>
                  </div>
                  <div className="flex basis-2/4 justify-end text-sm sm:basis-3/12">
                    {t("sendSupplierEmailTab.matched")} {item.numOrder}{" "}
                    {t("sendSupplierEmailTab.times")}
                  </div>
                </div>
              </label>
            </li>
          </Fragment>
        ))}
    </Fragment>
  );
};

export default SendSupplierListing;
