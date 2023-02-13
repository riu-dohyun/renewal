import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import QuoteInfoListing from "src/components/listing/QuoteInfoListing";
import SubMiddleTitle from "src/components/title/SubMiddleTitle";
import * as commonConfig from "src/config/common";
import url from "src/config/url";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

// NOTE: buyerInProgressDetailQuoteList 없을 시 quote 된게 없음

const PackagingInProgressDetailContainer = () => {
  const { t } = useTranslation();
  const { uid, role } = useSelector(state => state.user);
  const { buyerInProgressDetailRfq, buyerInProgressDetailQuoteList } =
    useSelector(state => state.estimate);
  const router = useRouter();
  const { rfqId } = router.query;
  const [itemInfoList, setItemInfoList] = useState(null);
  const [itemList, setItemList] = useState(null);
  const [supplierIndex, setSupplierIndex] = useState(0);
  const [totalValue, setTotalValue] = useState(null);
  const dispatch = useDispatch();
  const quoteOrderSelectForm = useRef();

  const supplierClick = e => {
    const target = e.currentTarget;
    const index = Number(target.dataset.index);
    if (supplierIndex !== index) {
      const newList = getNewList({
        rfq: buyerInProgressDetailRfq,
        quoteList: [buyerInProgressDetailQuoteList[index]],
      });
      setItemInfoList(newList);
      setItemList(newList[0]);
      setSupplierIndex(index);
    }
  };

  const submitOrderButtonClick = e => {
    e.preventDefault();

    const form = quoteOrderSelectForm.current;
    const itemList = buyerInProgressDetailRfq.itemList;

    const selected = itemList.reduce((acc, cur) => {
      const item = form[`item_${cur.rfqItemId}`];
      const value = JSON.parse(item.value);
      delete value.active;

      acc.push(value);
      return acc;
    }, []);

    const quoteId = itemInfoList[0] && itemInfoList[0].quoteId;

    const params = {
      uid,
      rfqId,
      quoteId,
      selected: JSON.stringify(selected),
    };

    dispatch(
      estimateActions.createOrderTrigger({
        ...params,
      })
    );
  };

  const getNewList = ({ rfq, quoteList }) => {
    const quoteListMerge = commonUtils.quoteListMergeProcessing({
      requestDetailInfo: rfq,
      quoteList: quoteList,
    });
    const newList = commonUtils.getPackagingItemProcessList({
      list: quoteListMerge,
    });

    return newList;
  };

  useEffect(() => {
    dispatch(
      estimateActions.getBuyerInProgressDetailTrigger({
        uid,
        rfqId,
      })
    );
  }, []);

  useEffect(() => {
    const checkQuoteList = commonUtils.checkNullAndUndefined(
      buyerInProgressDetailQuoteList
    );
    if (
      (!checkQuoteList && itemList === null) ||
      (!checkQuoteList && itemInfoList === null)
    ) {
      const newList = getNewList({
        rfq: buyerInProgressDetailRfq,
        quoteList: buyerInProgressDetailQuoteList,
      });
      setItemInfoList(newList);
      setItemList(newList[0]);
    } else {
      if (buyerInProgressDetailRfq?.itemList) {
        const newList = commonUtils.getPackagingItemProcessList({
          list: buyerInProgressDetailRfq.itemList,
        });
        setItemInfoList(newList);
        setItemList(newList[0]);
      }
    }
  }, [buyerInProgressDetailRfq, buyerInProgressDetailQuoteList]);

  const detectTotalValue = () => {
    setTimeout(() => {
      const form = quoteOrderSelectForm.current;
      if (buyerInProgressDetailRfq && form) {
        const itemList = buyerInProgressDetailRfq.itemList;
        const sumValue = itemList.reduce((acc, cur) => {
          const item = form[`item_${cur.rfqItemId}`];
          if (item) {
            const itemValue = item.value ? item.value : "{}";
            const value = JSON.parse(itemValue);

            const qty = Number(value.qty);
            const unitPrice = Number(value.unitPrice);
            const toolingPrice = Number(value.toolingPrice);
            const sum = qty * unitPrice + toolingPrice;

            return acc + sum;
          } else {
            return acc;
          }
        }, 0);

        setTotalValue(sumValue);
      }
    }, 0);
  };

  useEffect(() => {
    detectTotalValue();
  }, [rfqId, itemInfoList, itemList]);

  if (itemList === null || buyerInProgressDetailRfq === null) {
    return null;
  }

  return (
    <>
      <form ref={quoteOrderSelectForm}>
        <SubMiddleTitle
          title={stringUtils.firstCharToUpperCase(
            t(
              `status.rfq.${
                commonUtils.getStatusInfo({
                  type: commonConfig.statusType.RFQ,
                  status: buyerInProgressDetailRfq.status,
                }).desc
              }`
            )
          )}
          backUrl={url.buyer.packagingInProgress}
        />

        <div className="mb-3 lg:mb-16 lg:flex lg:w-full lg:gap-10">
          {/* supplier 시작 */}
          <div className="sticky top-14 z-10 mb-3 bg-white p-3 pr-0 shadow-sm md:top-16 lg:relative lg:top-0 lg:z-0 lg:basis-2/6 lg:p-0 lg:shadow-none">
            <h3 className="mb-3 lg:mb-4">
              {stringUtils.firstCharToUpperCase(t("common.supplier"))}
            </h3>
            <div className="flex overflow-x-auto pr-4 pb-2 lg:h-full lg:overflow-x-visible lg:p-0">
              <ul className="flex flex-nowrap gap-3 p-3 lg:w-full lg:flex-col lg:gap-0 lg:divide-y lg:p-0">
                {buyerInProgressDetailQuoteList ? (
                  buyerInProgressDetailQuoteList.map((item, idx) => (
                    <li
                      key={item.supplierId}
                      onClick={supplierClick}
                      data-supplier-id={item.supplierId}
                      data-index={idx}
                      className={`${
                        supplierIndex === idx && "md sticky top-20"
                      } flex cursor-pointer items-center rounded ${
                        supplierIndex === idx
                          ? "bg-white p-2 ring-1 ring-primary-500 hover:shadow-lg lg:p-3"
                          : "border p-2 hover:bg-gray-50 lg:rounded-none lg:border-x-0 lg:border-b-0 lg:p-3"
                      }`}
                    >
                      <div className="mr-4 w-16 lg:w-24">
                        <div className="flex h-14 w-full items-center justify-center rounded bg-gray-100">
                          <span className="material-symbols-outlined flex justify-center text-[24px] text-gray-400 lg:text-[28px]">
                            image_not_supported
                          </span>
                          {/* <img src="images/dist/supplier01.png" alt="" /> */}
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h5 className="text-xs lg:text-sm">{item.fullName}</h5>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>
                    {stringUtils.firstCharToUpperCase(
                      t("packagingInProgress.noSupplierText")
                    )}
                  </p>
                )}
              </ul>
            </div>
          </div>
          {/* supplier 끝 */}
          {/* Quote 정보 시작 */}
          <div className="relative flex w-full basis-4/6 flex-col bg-white p-4 pb-16 shadow-sm lg:sticky lg:top-20 lg:self-start lg:p-0 lg:shadow-none">
            <div className="mb-4 justify-between md:flex md:items-center">
              <h4 className="mb-1 md:m-0">
                {stringUtils.firstCharToUpperCase(
                  t("packagingInProgress.quote")
                )}
                ({buyerInProgressDetailRfq.itemList.length})
              </h4>
              <p className="text-sm text-gray-500">
                {stringUtils.firstCharToUpperCase(
                  t("packagingInProgress.submitted")
                )}{" "}
                Sep 13, 2022 at 00:00 AM
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <QuoteInfoListing
                requestItems={itemInfoList}
                role={role}
                status={buyerInProgressDetailRfq.status}
                itemClickTotalValueEvent={detectTotalValue}
              />
            </div>
          </div>
          {/* Quote 정보 끝 */}
        </div>
      </form>
      <div className="sticky bottom-0 mt-auto text-center">
        <div className="flex border-t bg-white md:items-center md:p-4 xl:px-6">
          {/* <div className="flex w-full flex-col items-center justify-center px-3 py-2 md:py-0">
            <p className="text-sm text-slate-400">
              {stringUtils.firstCharToUpperCase(
                t("packagingInProgress.subTotal")
              )}
            </p>
            <em className="font-bold not-italic text-primary-500 md:text-lg">
              ${totalValue ? commonUtils.numberWithCommas(totalValue) : 0}
            </em>
          </div> */}
          <div className="flex w-full flex-col items-center justify-center px-3 py-2 md:py-0">
            <p className="text-sm text-slate-400">
              {stringUtils.firstCharToUpperCase(
                t("packagingInProgress.subTotal")
              )}
            </p>
            <em className="font-bold not-italic text-primary-500 md:text-lg">
              ${totalValue ? commonUtils.numberWithCommas(totalValue) : 0}
            </em>
          </div>
          <button
            onClick={submitOrderButtonClick}
            className="flex w-full items-center justify-center bg-primary-500 px-3 py-2 text-white md:w-auto md:whitespace-nowrap md:rounded-full md:px-6"
          >
            {stringUtils.firstCharToUpperCase(
              t("packagingInProgress.submitOrder")
            )}
            <span className="material-symbols-outlined ml-3 text-base">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>

      {/* <div className="sticky bottom-0 mt-10 text-center">
        <div className="flex bg-white shadow-[0_-10px_15px_-10px_rgba(0,0,0,0.1)] md:items-center md:p-4 xl:px-6">
          <div className="flex w-full flex-col items-center justify-center px-3 py-2 md:py-0">
            <p className="text-sm text-slate-400">
              {stringUtils.firstCharToUpperCase(
                t("packagingInProgress.subTotal")
              )}
            </p>
            <em className="font-bold not-italic text-primary-500 md:text-lg">
              ${totalValue ? commonUtils.numberWithCommas(totalValue) : 0}
            </em>
          </div>
          <button
            onClick={submitOrderButtonClick}
            className="flex w-full items-center justify-center bg-primary-500 px-3 py-2 text-white md:w-auto md:whitespace-nowrap md:rounded-full md:px-6"
          >
            {stringUtils.firstCharToUpperCase(
              t("packagingInProgress.submitOrder")
            )}
            <span className="material-symbols-outlined ml-3 text-base">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div> */}
    </>
  );
};

export default PackagingInProgressDetailContainer;
