import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import QuoteInfoListing from "src/components/listing/QuoteInfoListing";
import SubMiddleTitle from "src/components/title/SubMiddleTitle";
import * as commonConfig from "src/config/common";
import url from "src/config/url";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const QuoteViewContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { rfqId } = router.query;
  const { uid, role } = useSelector(state => state.user);
  const { requestDetailInfo, quoteList } = useSelector(state => state.estimate);
  const [requestItems, setRequestItems] = useState(null);
  useEffect(() => {
    dispatch(
      estimateActions.getRequestInfoTrigger({
        uid,
        rfqId,
      })
    );
  }, []);

  const getDate = dates => {
    const date = moment(dates);
    return date.format("MMM DD, YYYY [at] hh:mm a");
  };

  useEffect(() => {
    if (requestDetailInfo?.itemList) {
      const quoteListMerge = commonUtils.quoteListMergeProcessing({
        requestDetailInfo,
        quoteList,
      });

      const newList = commonUtils.getPackagingItemProcessList({
        list: quoteListMerge,
      });

      setRequestItems(newList);
    }
  }, [requestDetailInfo, quoteList]);

  if (!requestDetailInfo || !requestItems) {
    return null;
  }

  return (
    <>
      <SubMiddleTitle
        title={
          quoteList[0] &&
          stringUtils.firstCharToUpperCase(
            t(
              `status.quote.${
                commonUtils.getStatusInfo({
                  type: commonConfig.statusType.QUOTE,
                  status: quoteList[0].status,
                }).desc
              }`
            )
          )
        }
        backUrl={url.supplier.myTransaction}
      />

      <div className="mb-3 lg:mb-16 lg:flex lg:w-full lg:gap-10">
        <div className="mb-3 flex basis-2/6 flex-col bg-white p-3 shadow-sm lg:mb-8 lg:rounded-lg lg:p-0 lg:shadow-none">
          <div className="mb-4 flex items-center border-b pb-4 lg:mb-6">
            <h3>{requestDetailInfo.companyName}</h3>
            <span className="ml-2 rounded-full bg-gray-700 px-2 text-sm text-white">
              #{requestDetailInfo?.rfqNo}
            </span>
          </div>
          <div className="flex flex-col">
            <dl className="mb-1 grid grid-cols-productInfo gap-y-1 text-sm">
              <dt className="mr-2 text-slate-400">
                {stringUtils.firstCharToUpperCase(t("quoteView.requestedOn"))}
              </dt>
              <dd className="font-semibold">
                {commonUtils.getEnDate(requestDetailInfo?.createdDT)}
              </dd>
              <dt className="mr-2 text-slate-400">
                {stringUtils.firstCharToUpperCase(t("quoteView.requestId"))}
              </dt>
              <dd className="font-semibold">#{requestDetailInfo?.rfqNo}</dd>
            </dl>
            <dl className="grid grid-cols-productInfo gap-y-1 text-sm">
              <dt className="mr-2 text-slate-400">
                {stringUtils.firstCharToUpperCase(t("quoteView.shipping"))}
              </dt>
              <dd className="font-semibold">
                {requestDetailInfo?.shippingAddress}
              </dd>
              <dt className="mr-2 text-slate-400">
                {stringUtils.firstCharToUpperCase(t("quoteView.expiration"))}
              </dt>
              <dt className="font-semibold">{requestDetailInfo?.deadline}</dt>
            </dl>
          </div>
        </div>

        <div className="relative flex w-full basis-4/6 flex-col bg-white p-4 pb-16 shadow-sm lg:sticky lg:top-20 lg:self-start lg:p-0 lg:shadow-none">
          <div className="mb-4 justify-between md:flex md:items-center">
            <h4 className="mb-1 md:m-0">
              {stringUtils.firstCharToUpperCase(t("quoteView.quote"))}(
              {requestItems?.length})
            </h4>
            <p className="text-sm text-gray-500">
              {stringUtils.firstCharToUpperCase(t("quoteView.submitted"))}{" "}
              {quoteList[0] && getDate(quoteList[0].submittedDT)}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {/* <div className="flex flex-col gap-3 border-t md:basis-7/12 md:border-none"> */}
            <QuoteInfoListing requestItems={requestItems} role={role} />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteViewContainer;
