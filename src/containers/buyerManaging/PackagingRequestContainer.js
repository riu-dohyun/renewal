import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import PackagingRequestListing from "src/components/listing/PackagingRequestListing";
import ChoiceModal from "src/components/modal/ChoiceModal";
import url from "src/config/url";
import * as commonActions from "src/store/common.store";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import * as toastUtils from "src/utils/toastUtils";

const PackagingRequestContainer = () => {
  let listPageMoveSetTimeout = null;
  const { t } = useTranslation();
  const navigate = useRouter();
  const dispatch = useDispatch();
  const requestForm = useRef();
  const { uid } = useSelector(state => state.user);
  const { packagingRequestItems } = useSelector(state => state.packaging);
  const [modalOpened, setModalOpened] = useState();
  const requestItemList = commonUtils.getPackagingItemProcessList({
    list: packagingRequestItems,
  });

  const backToListOnClickEvent = () => {
    navigate(url.buyer.packagingList);
  };

  const getDate = () => {
    const date = moment();
    date.minute(0);
    date.second(0);
    date.hour(0);
    date.add(7, "days");
    return date.format("YYYY-MM-DD hh:mm:ss");
  };

  const validationCheckAndReturnData = form => {
    let qtyCheck = false;

    const address = form.address.value.trim();
    const itemList = packagingRequestItems.reduce((acc, cur) => {
      const id = cur.itemId;
      const objects = {};
      const qty = form[`quotes_${id}`].value
        .split(",")
        .map(item => Number(item.trim().split(".")[0]))
        .filter(item => item > 0);

      if (qty.length === 0) {
        qtyCheck = true;
      }

      objects.itemId = id;
      objects.qty = qty;
      acc.push(objects);
      return acc;
    }, []);

    if (qtyCheck) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("packagingRequest.errorToast1"))}`
      );
      return false;
    }

    if (address.length < 4) {
      toastUtils.errorToast(
        `${stringUtils.firstCharToUpperCase(t("packagingRequest.errorToast2"))}`
      );
      return false;
    }

    return { address, itemList };
  };

  const requestClickEvent = e => {
    e.preventDefault();
    const form = requestForm.current;
    const validation = validationCheckAndReturnData(form);
    if (validation === false) {
      return false;
    }

    const { address, itemList } = validation;

    const params = {
      uid,
      buyerUid: uid,
      shippingAddress: address,
      itemList: JSON.stringify(itemList),
      deadline: getDate(),
      navigate,
    };

    dispatch(packagingActions.createPackagingItemRequestTrigger(params));
    dispatch(commonActions.setSendSupplierEmail(true));
  };

  // NOTE: Request 버튼 클릭 이벤트
  const requestButtonEvent = e => {
    e.preventDefault();
    const form = requestForm.current;
    const validation = validationCheckAndReturnData(form);
    if (validation !== false) {
      setModalOpened(true);
    }
  };

  // NOTE: 모달창 닫기 이벤트
  const modalClose = e => {
    e.preventDefault();
    setModalOpened(false);
  };

  useEffect(() => {
    return () => {
      if (listPageMoveSetTimeout) {
        clearTimeout(listPageMoveSetTimeout);
      }
    };
  }, []);

  // NOTE: request list가 존재하지 않을 시 toast 및 setTimeout으로 list페이지로 이동
  if (!requestItemList || requestItemList?.length === 0) {
    toastUtils.errorToast(
      `${stringUtils.firstCharToUpperCase(t("packagingRequest.errorToast3"))}`
    );
    listPageMoveSetTimeout = setTimeout(() => {
      navigate(url.buyer.packagingList);
    }, 2000);
    return null;
  }

  return (
    <>
      <form ref={requestForm}>
        <div className="mb-3 flex flex-col bg-white shadow-sm lg:mb-8 lg:shadow-none">
          <div className="relative flex items-center bg-white p-3 lg:mb-0 lg:border-b lg:p-0 lg:pb-6">
            <div className="item-center flex">
              <h2 className="text-xl xl:text-2xl">
                {stringUtils.firstCharToUpperCase(
                  t("packagingRequest.requestForQuotes")
                )}
              </h2>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-4 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6 2xl:grid-cols-5"> */}
        <ChoiceModal
          title={stringUtils.firstCharToUpperCase(
            t("packagingRequest.modalTitle")
          )}
          desc={stringUtils.firstCharToUpperCase(
            t("packagingRequest.modalDesc")
          )}
          isOpen={modalOpened}
          okFn={requestClickEvent}
          okText={stringUtils.firstCharToUpperCase(
            t("packagingRequest.modalOkText")
          )}
          cancelFn={modalClose}
          cancelText={stringUtils.firstCharToUpperCase(
            t("packagingRequest.modalCAncelText")
          )}
        />
        {/* </div> */}
        <PackagingRequestListing list={requestItemList} />
        <div className="mb-12 bg-white px-2 py-4 shadow-sm md:p-4 lg:rounded-md lg:border lg:shadow-none">
          <label className="block">
            <span className="mb-1 flex text-sm text-slate-500 after:ml-0.5 after:text-red-500 after:content-['*']">
              {stringUtils.firstCharToUpperCase(
                t("packagingRequest.addressText")
              )}
            </span>
            <div className="relative flex flex-col">
              <input
                type="text"
                name="address"
                id="address"
                className="peer form-input grow basis-4/5 invalid:border-pink-500 invalid:text-pink-600"
                placeholder={stringUtils.firstCharToUpperCase(
                  t("packagingRequest.address")
                )}
              />
            </div>
          </label>
        </div>
      </form>

      <div className="sticky bottom-0 mt-auto text-center">
        <div className="flex border-t bg-white md:items-center md:py-3 xl:py-6">
          <button
            onClick={backToListOnClickEvent}
            className="flex w-full items-center justify-center bg-gray-500 p-4 font-bold text-white focus:bg-gray-600 md:w-auto md:rounded-full md:py-2 md:px-10"
          >
            <span className="material-symbols-outlined mr-2 text-sm">
              arrow_back_ios_new
            </span>
            {stringUtils.firstCharToUpperCase(t("packagingRequest.backToList"))}
          </button>
          <button
            onClick={requestButtonEvent}
            className="flex w-full items-center justify-center bg-primary-600 p-4 font-bold text-white md:ml-auto md:w-auto md:rounded-full md:py-2 md:px-10"
          >
            {stringUtils.firstCharToUpperCase(
              t("packagingRequest.submitRequest")
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default PackagingRequestContainer;
