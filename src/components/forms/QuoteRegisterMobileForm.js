import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "src/hooks";
import * as stringUtils from "src/utils/stringUtils";
import SpecificationDetailContentMobile from "../content/SpecificationDetailContentMobile";
import QuotePricingListing from "../listing/QuotePricingListing";
import QuoteToolingListing from "../listing/QuoteToolingListing";

const QuoteRegisterMobileForm = props => {
  const { t } = useTranslation();
  const {
    detailInfoList,
    detailInfo,
    activeNav,
    itemNavOnClick,
    detailInfoLoading,
    formSubmitOnClick,
    mobileDetailTab,
    mobileTabCloseClick,
  } = props;

  const minWidth = width => {
    return useMediaQuery(`(min-width: ${width}px)`);
  };

  useEffect(() => {}, [detailInfoList]);

  return (
    <>
      {!minWidth(1024) && (
        <div
          className={`fixed top-0 right-0 z-20 flex ${
            mobileDetailTab ? "" : "hidden"
          }  h-full w-full justify-end overflow-y-auto bg-gray-900 bg-opacity-90`}
        >
          <div className="flex w-11/12 overflow-y-auto bg-white md:max-w-lg">
            <div className="w-full bg-white p-3">
              <div className="flex items-center border-b pb-3">
                <h3>#{detailInfo.itemNo}</h3>
                <button className="ml-auto flex" onClick={mobileTabCloseClick}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <ul className="mb-4 flex flex-row border-b">
                <li
                  className={`tab_item ${
                    activeNav === 0 ? "active" : ""
                  } basis-1/2`}
                >
                  <Link
                    href="#"
                    className="relative flex justify-center p-3 text-sm font-semibold"
                    onClick={itemNavOnClick}
                    data-num="0"
                  >
                    {stringUtils.firstCharToUpperCase(
                      t("quoteRegister.specifications")
                    )}
                  </Link>
                </li>
                <li
                  className={`tab_item ${
                    activeNav === 1 ? "active" : ""
                  } basis-1/2`}
                >
                  <Link
                    href="#"
                    className="relative flex justify-center p-3 text-sm font-semibold"
                    onClick={itemNavOnClick}
                    data-num="1"
                  >
                    {stringUtils.firstCharToUpperCase(t("quoteRegister.quote"))}
                  </Link>
                </li>
              </ul>
              {detailInfoLoading && detailInfo && activeNav === 0 && (
                <div className={`tab_inner ${activeNav === 0 ? "active" : ""}`}>
                  <SpecificationDetailContentMobile item={detailInfo} />
                </div>
              )}
              {activeNav === 1 && (
                <div className={`tab_inner ${activeNav === 1 ? "active" : ""}`}>
                  <div className="mb-4">
                    <h5 className="border-b border-gray-900 pb-2 text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("quoteRegister.pricing")
                      )}
                    </h5>
                    <div className="flex flex-col">
                      <QuotePricingListing detailInfo={detailInfo} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="border-b border-gray-900 pb-2 text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("quoteRegister.tooling")
                      )}
                    </h5>
                    <div className="flex flex-col">
                      <div className="p-3 first:border-b">
                        <div className="item-center mb-2 flex">
                          <h6 className="text-xs font-semibold">
                            {stringUtils.firstCharToUpperCase(
                              t("quoteRegister.default")
                            )}
                          </h6>
                        </div>
                        <QuoteToolingListing detailInfo={detailInfo} />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h5 className="border-b border-gray-900 pb-2 text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("quoteRegister.notes")
                      )}
                    </h5>
                    <div className="mt-3">
                      <textarea
                        name="notes"
                        id=""
                        defaultValue={
                          detailInfo.findRfqItem &&
                          detailInfo.findRfqItem[0].notes
                        }
                        className="form-textarea h-28 resize-none transition"
                        placeholder={stringUtils.firstCharToUpperCase(
                          t("quoteRegister.notes")
                        )}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-3 flex justify-center">
                    <button
                      onClick={formSubmitOnClick}
                      className="rounded-full border border-slate-300 bg-slate-50 px-4 py-1 font-semibold hover:border-slate-400 hover:bg-slate-100"
                    >
                      {stringUtils.firstCharToUpperCase(
                        t("quoteRegister.save")
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteRegisterMobileForm;
