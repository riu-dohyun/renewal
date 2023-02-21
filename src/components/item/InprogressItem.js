import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as commonConfig from "src/config/common";
import url from "src/config/url";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import StatusItem from "./StatusItem";

const InprogressItem = props => {
  const { t } = useTranslation();
  const router = useRouter();
  const hideContent = useRef();
  const [height, setHeight] = useState(0);
  const { item, role, openClickEvent, active } = props;

  const showDetailClick = () => {
    if (role === commonConfig.userType.supplier) {
      const status = Number(item.status);
      if (status === 1000) {
        router.push(`${url.supplier.quoteRegister}/${item.rfqId}`);
      } else {
        router.push(`${url.supplier.quoteView}/${item.rfqId}`);
      }
    } else if (role === commonConfig.userType.buyer) {
      router.push(`${url.buyer.packagingInProgressDetail}/${item.rfqId}`);
    }
  };

  useEffect(() => {
    if (active) {
      setHeight(hideContent.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [active]);

  return (
    <>
      <div
        className={`accordion bg-white shadow-sm lg:rounded-lg lg:border lg:shadow-none ${
          active && "active"
        }`}
      >
        <div
          className="accordion_header flex cursor-pointer items-center px-6 py-4"
          onClick={openClickEvent}
          data-id={item.rfqId}
        >
          <h4>#{item.rfqNo}</h4>
          <StatusItem
            status={item.status}
            type={
              role === commonConfig.userType.buyer
                ? commonConfig.statusType.RFQ
                : commonConfig.statusType.QUOTE
            }
          />
          <div className="accordion-icon ml-auto flex transition-all">
            <button className="material-symbols-outlined text-2xl text-slate-500">
              expand_more
            </button>
          </div>
        </div>
        <div
          className={`accordion_body max-h-0 overflow-hidden transition-all`}
          ref={hideContent}
          style={{ maxHeight: `${height}px` }}
        >
          <div className="accordion_content border-t p-6">
            {item.itemList &&
              item.itemList.map((items, idx) => (
                <div
                  key={items.rfqItemId}
                  className={`mb-4 grid grid-cols-2 gap-3 border-b border-dashed pb-4 last-of-type:mb-0 
                  ${
                    item.itemList.length - 1 !== idx &&
                    " last-of-type:border-b-0 last-of-type:pb-0"
                  } md:grid-cols-3 lg:grid-cols-5`}
                >
                  <dl>
                    <dt className="text-xs text-slate-400">
                      {stringUtils.firstCharToUpperCase(t("inProgress.item"))}
                    </dt>
                    <dd className="break-words text-sm font-semibold">
                      #{items.rfqItemId}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-xs text-slate-400">
                      {stringUtils.firstCharToUpperCase(
                        t("inProgress.nickName")
                      )}
                    </dt>
                    <dd className="break-words text-sm font-semibold">
                      {items.itemName}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-xs text-slate-400">
                      {stringUtils.firstCharToUpperCase(
                        t("inProgress.category")
                      )}
                    </dt>
                    <dd className="break-words text-sm font-semibold">
                      {
                        commonUtils.getCategoryInfo({
                          categoryCode: items.category,
                        }).name
                      }
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-xs text-slate-400">
                      {stringUtils.firstCharToUpperCase(
                        t("inProgress.requested")
                      )}
                    </dt>
                    <dd className="break-words text-sm font-semibold">
                      {item.createdDT}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-xs text-slate-400">
                      {stringUtils.firstCharToUpperCase(t("inProgress.quotes"))}
                    </dt>
                    <dd className="break-words text-sm font-semibold">
                      {item.numQuotes > 0 ? item.numQuotes : "-"}
                    </dd>
                  </dl>
                </div>
              ))}
          </div>
          <div className="flex justify-center p-6 pt-0">
            <button
              className="flex items-center rounded-full border border-slate-300 bg-slate-50 p-1.5 px-3.5 text-sm font-semibold transition hover:border-slate-400 hover:bg-slate-100"
              onClick={showDetailClick}
            >
              {stringUtils.firstCharToUpperCase(t("inProgress.viewDetails"))}
              <span className="material-symbols-outlined ml-4 text-sm">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InprogressItem;
