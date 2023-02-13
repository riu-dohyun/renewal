import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import * as commonConfig from "src/config/common";
import * as commonActions from "src/store/common.store";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const QuoteInfoItem = props => {
  const { t } = useTranslation();
  const { info, role, status, itemClickTotalValueEvent } = props;
  const dispatch = useDispatch();
  const [priceData, setPriceData] = useState(null);
  const [activeList, setActiveList] = useState([]);
  const [active, setActive] = useState(null);

  const itemEditButton = e => {
    e.preventDefault();

    dispatch(commonActions.setDetailSpecification(true));
    dispatch(packagingActions.setEditSelectedItem(info));

    commonUtils.lockScroll();
  };

  const itemClickEvent = e => {
    if (role === commonConfig.userType.supplier) {
      return false;
    }
    const target = e.currentTarget;
    const index = Number(target.dataset.index);
    setActiveList(
      activeList.map((item, idx) => {
        if (index === idx) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      })
    );

    setActive(activeList[index]);
  };

  useEffect(() => {
    const rfqInfo = info.findRfqItem;
    if (rfqInfo) {
      const item = rfqInfo[0];
      const pricing = item.pricing;
      const toolingPrice = item.tooling.reduce((acc, cur) => {
        return acc + Number(cur.cost);
      }, 0);
      const obj = {
        pricing: pricing,
        toolingSumPrice: toolingPrice,
        info: info,
      };

      setPriceData(obj);
      setActiveList(
        item?.pricing
          ? item.pricing.map((item, idx) => {
              return {
                ...item,
                quoteItemId:
                  info?.findRfqItem && info?.findRfqItem[0].quoteItemId,
                toolingPrice: toolingPrice,
                active: idx === 0 ? true : false,
              };
            })
          : []
      );
    } else {
      const pricing = info.qty.map(item => {
        return { qty: item };
      });
      setPriceData({ pricing });
    }
  }, [info]);

  useEffect(() => {
    if (Number(status) === commonConfig.status.RFQ.status2000.status) {
      setActive(activeList.filter(item => item.active)[0]);
    }
  }, [activeList]);

  useEffect(() => {
    if (itemClickTotalValueEvent) {
      itemClickTotalValueEvent();
    }
  }, [active]);

  return (
    <>
      <div className="mb-4 flex flex-col rounded border md:flex-row md:items-center md:gap-3 md:p-4">
        {role === commonConfig.userType.buyer && (
          <input
            type="hidden"
            name={`item_${info.rfqItemId}`}
            value={active ? JSON.stringify(active) : ""}
          />
        )}

        <div className="flex items-center p-3 md:basis-5/12 md:p-0">
          <div className="w-32 flex-none overflow-hidden rounded-sm border sm:w-36">
            <img src={info.processData.image} className="w-full" alt="" />
          </div>
          <div className="ml-4 grow">
            <dl className="mb-3 text-sm">
              <dt className="text-xs text-slate-400">
                {stringUtils.firstCharToUpperCase(
                  t("packagingInProgress.nickname")
                )}
              </dt>
              <dd className="mb-2 text-sm font-semibold">{info.itemName}</dd>
              <dt className="text-xs text-slate-400">
                {stringUtils.firstCharToUpperCase(
                  t("packagingInProgress.category")
                )}
              </dt>
              <dd className="text-sm font-semibold">{info.processData.name}</dd>
            </dl>
            <button
              onClick={itemEditButton}
              className="rounded bg-primary-500 px-2 py-0.5 text-xs text-primary-100"
            >
              {stringUtils.firstCharToUpperCase(
                t("packagingInProgress.viewDetail")
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t md:basis-7/12 md:border-none">
          <table className="w-full border-collapse text-center text-sm">
            <colgroup>
              {role === commonConfig.userType.buyer && <col width="10%" />}
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr className="border-b text-xs text-gray-400">
                {role === commonConfig.userType.buyer && (
                  <th className="px-1 py-1.5 font-normal xl:px-3"></th>
                )}

                <th className="px-1 py-1.5 font-normal xl:px-3">
                  {stringUtils.firstCharToUpperCase(
                    t("packagingInProgress.quantities")
                  )}
                </th>
                <th className="px-1 py-1.5 font-normal xl:px-3">
                  {stringUtils.firstCharToUpperCase(
                    t("packagingInProgress.unitPrice")
                  )}
                </th>
                <th className="px-1 py-1.5 font-normal xl:px-3">
                  {stringUtils.firstCharToUpperCase(
                    t("packagingInProgress.tooling")
                  )}
                </th>
                <th className="px-1 py-1.5 font-normal xl:px-3">
                  {stringUtils.firstCharToUpperCase(
                    t("packagingInProgress.total")
                  )}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {priceData?.pricing.map((item, idx) => (
                <Fragment key={idx}>
                  <tr
                    className={`${
                      activeList[idx]?.active && "bg-gray-50 font-semibold"
                    }`}
                  >
                    {role === commonConfig.userType.buyer && (
                      <td className="px-1 py-2.5 xl:px-3">
                        <input
                          type="radio"
                          className="form-radio"
                          name={`radio_${info.rfqItemId}`}
                          onClick={itemClickEvent}
                          data-index={idx}
                          defaultChecked={activeList[idx]?.active}
                        />
                      </td>
                    )}
                    <td className="px-1 py-2.5 xl:px-3">
                      {commonUtils.numberWithCommas(item.qty)}
                    </td>
                    <td className="px-1 py-2.5 xl:px-3">
                      {item?.unitPrice
                        ? `$${commonUtils.numberWithCommas(item.unitPrice)}`
                        : "-"}
                    </td>
                    <td className="px-1 py-2.5 xl:px-3">
                      {priceData?.toolingSumPrice
                        ? `$${commonUtils.numberWithCommas(
                            priceData.toolingSumPrice
                          )}`
                        : "-"}
                    </td>
                    <td className="px-1 py-2.5 xl:px-3">
                      {item?.unitPrice
                        ? `$${commonUtils.numberWithCommas(
                            item.qty * item.unitPrice +
                              priceData.toolingSumPrice
                          )}`
                        : "-"}
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default QuoteInfoItem;
