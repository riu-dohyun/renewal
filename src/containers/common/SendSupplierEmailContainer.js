import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import SendSupplierListing from "src/components/listing/SendSupplierListing";
import * as commonActions from "src/store/common.store";
import * as packagingActions from "src/store/packaging.store";

const SendSupplierEmailContainer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { sendSupplierEmailState } = useSelector(state => state.common);
  const { uid, companyName } = useSelector(state => state.user);
  const { supplierRecommendedList } = useSelector(state => state.packaging);
  const sendSupplierEmailForm = useRef(null);

  const closeEvent = () => {
    dispatch(commonActions.setSendSupplierEmail(false));
    dispatch(packagingActions.initSupplierRecommendedList());
  };

  const closeEventHandler = e => {
    e.preventDefault();
    closeEvent();
  };

  const submitEvent = e => {
    e.preventDefault();
    const form = sendSupplierEmailForm.current;
    const supplierList = Array.from(form.supplierList);
    const checkedList = supplierList.filter(item => item.checked);
    const indexList = checkedList.map(item => Number(item.value));
    const emailList = indexList.map(
      item => supplierRecommendedList[item].email
    );

    dispatch(
      packagingActions.sendRfqEmailTrigger({
        uid: uid,
        buyerName: companyName,
        emailList: JSON.stringify(emailList),
        closeEvent: closeEvent,
      })
    );
  };

  useEffect(() => {
    if (sendSupplierEmailState) {
      dispatch(
        packagingActions.getSupplierRecommendedListTrigger({ uid: uid })
      );
    }
  }, [sendSupplierEmailState]);

  if (!sendSupplierEmailState && supplierRecommendedList.length === 0) {
    return <></>;
  }

  return (
    <form ref={sendSupplierEmailForm}>
      <div className="fixed top-0 right-0 z-30 flex h-full w-full justify-end overflow-y-auto bg-gray-900 bg-opacity-90">
        <button
          onClick={closeEventHandler}
          className="mt-1 flex self-start p-2 text-white"
        >
          <span className="material-symbols-outlined"> close </span>
        </button>
        <div className="flex w-11/12 overflow-y-auto bg-white md:max-w-[70%] lg:max-w-screen-md">
          <div className="flex w-full flex-col bg-white p-3">
            <div className="mb-6 flex items-center border-b pb-3">
              <h3>{t("sendSupplierEmailTab.title")}</h3>
            </div>
            <div className="mb-24 flex flex-col">
              <p className="mb-4">{t("sendSupplierEmailTab.desc")}</p>
              <ul className="flex flex-col gap-4">
                <SendSupplierListing list={supplierRecommendedList} />
              </ul>
            </div>
            <div className="sticky bottom-0 z-10 mt-auto flex justify-between border-t bg-white py-3">
              <button
                onClick={closeEventHandler}
                className="rounded-full border bg-white py-1.5 px-3 text-sm font-semibold text-gray-500"
              >
                {t("sendSupplierEmailTab.cancel")}
              </button>
              <button
                onClick={submitEvent}
                className="flex items-center rounded-full bg-primary-500 py-1.5 px-3 text-sm font-semibold text-white"
              >
                <span className="material-symbols-outlined mr-2 text-[20px]">
                  send
                </span>
                {t("sendSupplierEmailTab.sendNotification")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SendSupplierEmailContainer;
