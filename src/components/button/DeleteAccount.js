import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import * as userActions from "src/store/user.store";
import * as stringUtils from "src/utils/stringUtils";
import ChoiceModal from "../modal/ChoiceModal";

const DeleteAccount = props => {
  const { t } = useTranslation();
  const { uid } = props;
  const [modalOpened, setModalOpened] = useState();
  const dispatch = useDispatch();

  const modalOpen = e => {
    e.preventDefault();
    setModalOpened(true);
  };

  const modalClose = e => {
    e.preventDefault();
    setModalOpened(false);
  };
  const deleteButtonClick = () => {
    dispatch(
      userActions.requestAccountDeletionTrigger({
        uid,
        targetUid: uid,
        reasonCode: -1,
        reasonText: "",
      })
    );
  };

  return (
    <>
      <ChoiceModal
        title={stringUtils.firstCharToUpperCase(
          t("myAccount.deleteAccountChoiceModalTitle")
        )}
        isOpen={modalOpened}
        okFn={deleteButtonClick}
        okText={stringUtils.firstCharToUpperCase(
          t("myAccount.deleteAccountChoiceModalOkText")
        )}
        cancelFn={modalClose}
        cancelText={stringUtils.firstCharToUpperCase(
          t("myAccount.deleteAccountChoiceModalCancelText")
        )}
        closeTimeoutMS={0}
      >
        <>
          <div>
            <p className="mb-3 font-bold text-red-500">
              {stringUtils.firstCharToUpperCase(
                t("myAccount.deleteAccountChoiceModalDesc1")
              )}
            </p>
            <p className="font-bold text-red-500">
              {stringUtils.firstCharToUpperCase(
                t("myAccount.deleteAccountChoiceModalDesc2")
              )}
            </p>
          </div>
        </>
      </ChoiceModal>
      <div className="rounded-md bg-white p-3 shadow md:p-6">
        <div className="flex items-center pb-4 text-red-500">
          <span className="material-symbols-outlined mr-2"> warning </span>
          <h3 className="font-bold">
            {stringUtils.firstCharToUpperCase(t("myAccount.dangerZone"))}
          </h3>
        </div>
        <div className="">
          <h5 className="text-sm font-bold">
            {stringUtils.firstCharToUpperCase(t("myAccount.deleteAccount"))}
          </h5>
          <p className="mb-4 text-sm">
            {stringUtils.firstCharToUpperCase(t("myAccount.deleteAccountDesc"))}
          </p>
        </div>

        {/* <div className="mb-4">
          <label htmlFor="" className="mb-1 flex text-sm text-slate-500">
            Reasons for withdrawal
          </label>
          <div className="mt-3">
            <textarea
              name="reasonText"
              id=""
              defaultValue=""
              className="form-textarea h-28 resize-none transition"
              placeholder="Reasons for withdrawal"
            ></textarea>
          </div>
        </div> */}

        <button
          className="rounded-sm border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-red-500 hover:border-slate-400 hover:bg-slate-100"
          onClick={modalOpen}
        >
          {stringUtils.firstCharToUpperCase(t("myAccount.deleteYourAccount"))}
        </button>
      </div>
    </>
  );
};

export default DeleteAccount;
