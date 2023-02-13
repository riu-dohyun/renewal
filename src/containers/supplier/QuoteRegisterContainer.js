import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import QuoteRegisterForm from "src/components/forms/QuoteRegisterForm";
import QuoteRegisterMobileForm from "src/components/forms/QuoteRegisterMobileForm";
import RequestDetailListing from "src/components/listing/RequestDetailListing";
import ChoiceModal from "src/components/modal/ChoiceModal";
import SubMiddleTitle from "src/components/title/SubMiddleTitle";
import * as commonConfig from "src/config/common";
import url from "src/config/url";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";

const QuoteRegisterContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { rfqId } = router.query;
  const quoteForm = useRef();
  const { uid } = useSelector(state => state.user);
  const { requestDetailInfo, quoteList } = useSelector(state => state.estimate);
  const [detailInfo, setDetailInfo] = useState(null);
  const [detailInfoList, setDetailInfoList] = useState([]);
  const [detailInfoLoading, setDetailInfoLoading] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [checkUpdate, setCheckUpdate] = useState(false);
  const [nullCount, setNullCount] = useState(0);
  const [modalOpened, setModalOpened] = useState();
  const [mobileDetailTab, setMobileDetailTab] = useState(false);

  // NOTE: 좌측 item 클릭 시 데이터 연동
  const itemOnClick = e => {
    const target = e.currentTarget;
    const itemNo = Number(target.dataset.itemNo) - 1;

    const processingItem = commonUtils.getPackagingItemProcessList({
      list: [{ ...detailInfoList[itemNo] }],
    });
    setDetailInfo(processingItem[0]);
    setActiveNav(0);
    setMobileDetailTab(true);
  };

  const mobileTabCloseClick = e => {
    e.preventDefault();
    setMobileDetailTab(!mobileDetailTab);
  };

  // NOTE: form submit on Click 시 체크 로직
  const formSubmitOnClick = e => {
    e.preventDefault();

    const form = quoteForm.current;
    const notes = form?.notes?.value;
    const costList = form[`cost[]`];
    const costTypeList = form[`costType[]`];

    let pricing = [];
    let tooling = [];
    let flag = false;
    let message = null;

    for (let i = 1; i < 3; i++) {
      const quantity = form[`quantity${i}`];
      const unitPrice = form[`unitPrice${i}`];

      const checkQuantity = commonUtils.checkNullAndUndefined(quantity);
      if (checkQuantity) {
        break;
      }
      if (!quantity.value) {
        message = `${i}번쨰 quantity의 값을 제대로 입력해주세요.`;
        flag = true;
        break;
      }
      if (!unitPrice.value) {
        message = `${i}번쨰 unitPrice의 값을 제대로 입력해주세요.`;
        flag = true;
        break;
      }

      pricing.push({
        qty: quantity.value,
        unitPrice: unitPrice.value,
      });
    }

    // NOTE: quantity && unit price 체크
    if (flag) {
      toastUtils.errorToast(message);
      return false;
    }

    const lengthCheck = commonUtils.checkNullAndUndefined(costList.length);
    if (!lengthCheck) {
      for (let i = 0; i < costList.length; i++) {
        const value = Number(costList[i].value);
        if (value === 0) continue;

        tooling.push({
          type: costTypeList[i].value,
          cost: value,
        });
      }
    } else {
      const cost = costList.value ? Number(costList.value) : 0;
      if (cost > 0) {
        tooling.push({
          type: costTypeList.value,
          cost: cost,
        });
      }
    }

    const params = {
      uid,
      supplierUid: uid,
      rfqId: requestDetailInfo.rfqId,
      quoteId: checkUpdate && quoteList[0] ? quoteList[0].quoteId : null,
      expiration: requestDetailInfo.deadline,
      rfqItemId: detailInfo.rfqItemId,
      pricing: JSON.stringify(pricing),
      tooling: JSON.stringify(tooling),
      notes: commonUtils.checkNullAndUndefined(notes) ? "" : notes,
      quoteList: quoteList,
    };

    if (checkUpdate) {
      dispatch(
        estimateActions.updateQuoteTrigger({
          ...params,
        })
      );
    } else {
      dispatch(
        estimateActions.createQuoteTrigger({
          ...params,
        })
      );
    }

    setMobileDetailTab(false);
  };

  // NOTE: Nav tab 클릭 시 이벤트
  const itemNavOnClick = e => {
    e.preventDefault();
    const target = e.currentTarget;
    const dataNum = Number(target.dataset.num);

    setActiveNav(dataNum);
  };

  // NOTE: submit request 버튼 클릭 시 이벤트
  const submitOnClick = e => {
    e.preventDefault();
    if (nullCount !== 0) {
      toastUtils.infoToast(
        `${nullCount}의 아이템의 Quote 정보를 작성해주세요.`
      );
      return false;
    }

    setModalOpened(true);
  };

  // NOTE: modal close 이벤트
  const modalClose = () => {
    setModalOpened(false);
  };

  // NOTE: 최종 submit request 버튼 클릭 시 이벤트
  const lastSubmitClickEvent = () => {
    const params = {
      uid,
      supplierUid: uid,
      rfqId: requestDetailInfo.rfqId,
      quoteId: quoteList[0].quoteId,
      navigate: router,
    };

    dispatch(estimateActions.submitQuoteTrigger({ ...params }));
  };

  // NOTE: 가장 최초 데이터 dispatch
  useEffect(() => {
    const rfqCheck = isNaN(Number(rfqId));
    if (rfqCheck) {
      router(url.supplier.newOpportunities);
    }

    dispatch(
      estimateActions.getRequestInfoTrigger({
        uid,
        rfqId,
      })
    );
  }, []);

  // NOTE: 변화 감지 시 데이터 가공
  useEffect(() => {
    if (requestDetailInfo?.itemList) {
      const quoteListMerge = commonUtils.quoteListMergeProcessing({
        requestDetailInfo,
        quoteList,
        setCheckUpdate,
      });

      const findRfqItemFilter = quoteListMerge.filter(
        item => item.findRfqItem !== null
      );

      if (findRfqItemFilter.length > 0) {
        setCheckUpdate(true);
      }

      const quoteNullCount = quoteListMerge.reduce((acc, cur) => {
        if (commonUtils.checkNullAndUndefined(cur.findRfqItem)) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);

      setNullCount(quoteNullCount);

      const newList = commonUtils.getPackagingItemProcessList({
        list: quoteListMerge,
      });
      setDetailInfoList(newList);
      setDetailInfo(
        !detailInfo
          ? newList[0]
          : newList.filter(item => detailInfo.rfqItemId === item.rfqItemId)[0]
      );
      setDetailInfoLoading(true);
    }
  }, [requestDetailInfo, quoteList]);

  if (!requestDetailInfo || !detailInfoLoading) {
    return null;
  }

  if (!detailInfo) {
    setDetailInfo(detailInfoList[0]);
  }

  return (
    <>
      <ChoiceModal
        title={stringUtils.firstCharToUpperCase(
          t("quoteRegister.quoteRegisterChoiceModalTitle")
        )}
        desc={stringUtils.firstCharToUpperCase(
          t("quoteRegister.quoteRegisterChoiceModalDesc")
        )}
        isOpen={modalOpened}
        okFn={lastSubmitClickEvent}
        okText={stringUtils.firstCharToUpperCase(
          t("quoteRegister.quoteRegisterChoiceModalOkText")
        )}
        cancelFn={modalClose}
        cancelText={t("quoteRegister.quoteRegisterChoiceModalCancelText")}
      />
      <form ref={quoteForm} className="flex h-full flex-col">
        <SubMiddleTitle
          backUrl={url.supplier.openOpportunities}
          title={stringUtils.firstCharToUpperCase(
            t(
              `status.rfq.${
                commonUtils.getStatusInfo({
                  type: commonConfig.statusType.QUOTE,
                  status: requestDetailInfo.status,
                }).desc
              }`
            )
          )}
        />

        <div className="mb-3 lg:mb-16 lg:flex lg:w-full lg:gap-10">
          <div className="flex flex-col lg:basis-2/5">
            <div className="mb-3 flex flex-col bg-white p-3 shadow-sm lg:mb-8 lg:rounded-lg lg:p-0 lg:shadow-none">
              <div className="mb-4 flex items-center border-b pb-4 lg:mb-6">
                <h3>{requestDetailInfo.companyName}</h3>
                <span className="ml-2 rounded-full bg-gray-700 px-2 text-sm text-white">
                  #{requestDetailInfo.rfqNo}
                </span>
              </div>
              <div className="flex flex-col">
                <dl className="mb-1 grid grid-cols-productInfo gap-y-1 text-sm">
                  <dt className="mr-2 text-slate-400">
                    {stringUtils.firstCharToUpperCase(
                      t(`quoteRegister.requestedOn`)
                    )}
                  </dt>
                  <dd className="font-semibold">
                    {commonUtils.getEnDate(requestDetailInfo?.createdDT)}
                  </dd>
                  <dt className="mr-2 text-slate-400">
                    {stringUtils.firstCharToUpperCase(
                      t(`quoteRegister.requestId`)
                    )}
                  </dt>
                  <dd className="font-semibold">#{requestDetailInfo?.rfqNo}</dd>
                </dl>
                <dl className="grid grid-cols-productInfo gap-y-1 text-sm">
                  <dt className="mr-2 text-slate-400">
                    {stringUtils.firstCharToUpperCase(
                      t(`quoteRegister.shipping`)
                    )}
                  </dt>
                  <dd className="font-semibold">
                    {requestDetailInfo?.shippingAddress}
                  </dd>
                  <dt className="mr-2 text-slate-400">
                    {stringUtils.firstCharToUpperCase(
                      t(`quoteRegister.expiration`)
                    )}
                  </dt>
                  <dt className="font-semibold">
                    {requestDetailInfo?.deadline}
                  </dt>
                </dl>
              </div>
            </div>

            {/* --------------------------- */}

            {requestDetailInfo && (
              <ul className="lg:divide-y lg:border-y">
                <RequestDetailListing
                  detailInfoList={detailInfoList}
                  itemOnClick={itemOnClick}
                />
              </ul>
            )}
          </div>
          <div className="relative hidden flex-col lg:flex lg:basis-3/5">
            <div className="top-20 rounded-md bg-white">
              <QuoteRegisterForm
                detailInfo={detailInfo}
                activeNav={activeNav}
                itemNavOnClick={itemNavOnClick}
                detailInfoLoading={detailInfoLoading}
                formSubmitOnClick={formSubmitOnClick}
              />
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 mt-auto text-center">
          <div className="flex border-t bg-white md:items-center md:py-3 xl:py-6">
            {nullCount > 0 && (
              <p className="hidden md:flex">
                There {nullCount > 1 ? "are" : "is"}
                <span className="px-1 font-bold text-secondary-500">
                  {nullCount}
                </span>{" "}
                item{nullCount > 1 ? "s" : ""} that have not been quoted.
              </p>
            )}
            <button
              onClick={submitOnClick}
              className={`flex w-full items-center justify-center ${
                nullCount > 0 ? "bg-primary-300" : "bg-primary-500"
              } p-4 font-bold text-white focus:bg-primary-600 md:ml-auto md:w-auto md:rounded-full md:py-2 md:px-10`}
              disabled={nullCount.length > 0}
            >
              {stringUtils.firstCharToUpperCase(
                t(`quoteRegister.submitRequest`)
              )}
            </button>
          </div>
        </div>
        {/*  */}
        <QuoteRegisterMobileForm
          requestDetailInfo={requestDetailInfo}
          detailInfo={detailInfo}
          activeNav={activeNav}
          itemNavOnClick={itemNavOnClick}
          detailInfoLoading={detailInfoLoading}
          formSubmitOnClick={formSubmitOnClick}
          mobileDetailTab={mobileDetailTab}
          mobileTabCloseClick={mobileTabCloseClick}
        />
        {/*  */}
      </form>
    </>
  );
};

export default QuoteRegisterContainer;
