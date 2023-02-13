import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import SpecificationDetailContent from "src/components/content/SpecificationDetailContent";
import ChoiceModal from "src/components/modal/ChoiceModal";
import * as commonConfig from "src/config/common";
import { commonSpecFormName } from "src/config/common";
import * as commonActions from "src/store/common.store";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import EditSpecificationContainer from "./EditSpecificationContainer";

const DetailSpecificationContainer = () => {
  const { t } = useTranslation();
  const {
    detailSpecificationState,
    editSpecificationState,
    pageNo,
    numPageItem,
    sort,
    search,
  } = useSelector(state => state.common);
  const { uid, role } = useSelector(state => state.user);
  const { editSelectedItem } = useSelector(state => state.packaging);
  const [modalOpened, setModalOpened] = useState(false);
  // const detailSpecificationContainer = useRef(null);
  const dispatch = useDispatch();
  const viewDetailRef = useRef(null);

  const detailModalCloseEvent = async () => {
    await dispatch(commonActions.setDetailSpecification(false));
    commonUtils.unlockScroll();

    await dispatch(
      packagingActions.setSpecification({
        specification: null,
        defaultSpecification: null,
      })
    );
    await dispatch(packagingActions.setDocumentList([]));
    await dispatch(packagingActions.setItemId(null));
  };

  useEffect(() => {
    return () => {
      dispatch(packagingActions.setInitSpecificationAndCategory());
    };
  }, []);

  useEffect(() => {
    if (detailSpecificationState === false && modalOpened) {
      setModalOpened(false);
      setTimeout(() => {
        dispatch(
          packagingActions.getPackagingItemListTrigger({
            uid,
            buyerUid: uid,
            sort: sort,
            search: search,
            pageNo: pageNo,
            numPageItem: numPageItem,
          })
        );
        window.scrollTo(0, 0);
      }, 300);
    }
  }, [detailSpecificationState]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        viewDetailRef.current &&
        !viewDetailRef.current.contains(e.target) &&
        !editSpecificationState &&
        detailSpecificationState
      ) {
        detailModalCloseEvent();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [viewDetailRef, editSpecificationState, detailSpecificationState]);

  if (!editSelectedItem) {
    return null;
  }

  // NOTE: 수정 버튼 클릭 이벤트
  const editButtonEvent = async () => {
    const spec = editSelectedItem.spec;
    const newObject = {};
    for (const key in spec) {
      newObject[`${key}`] = {
        content: spec[key],
      };
    }

    for (const key in commonSpecFormName) {
      newObject[`${key}`] = {
        content: editSelectedItem[key],
      };
    }

    await dispatch(
      packagingActions.setSpecification({
        specification: editSelectedItem.processData.specification,
        defaultSpecification: newObject,
      })
    );
    await dispatch(packagingActions.setItemId(editSelectedItem.itemId));
    await dispatch(packagingActions.setCategory(editSelectedItem.category));
    await dispatch(
      packagingActions.setSubCategory(editSelectedItem.subCategory)
    );
    await dispatch(packagingActions.setStyle(editSelectedItem.style));
    await dispatch(
      packagingActions.setDocumentList(editSelectedItem.documents)
    );
    await dispatch(commonActions.setEditSpecification(true));
  };

  // NOTE: 삭제 버튼 클릭 이벤트
  const deleteButtonEvent = () => {
    setModalOpened(true);
  };

  // NOTE: 모달창 닫기 이벤트
  const modalClose = () => {
    setModalOpened(false);
  };

  const modalOkFn = () => {
    dispatch(
      packagingActions.itemDeleteTrigger({
        uid,
        itemId: editSelectedItem.itemId,
      })
    );
  };

  return (
    <div>
      <ChoiceModal
        title="Item Delete"
        desc="Are you sure you want to delete the item?"
        isOpen={modalOpened}
        okFn={modalOkFn}
        okText="DELETE"
        cancelFn={modalClose}
        cancelText="CANCEL"
      />
      <div
        className={`fixed top-0 right-0 ${
          detailSpecificationState ? "z-40" : "-z-10 hidden"
        } flex h-full w-full justify-end overflow-y-auto bg-gray-900 bg-opacity-90`}
      >
        {!editSpecificationState && (
          <button
            onClick={detailModalCloseEvent}
            className="mt-1 flex self-start p-2 text-white"
          >
            <span className="material-symbols-outlined"> close </span>
          </button>
        )}
        <div
          className="flex w-11/12 overflow-y-auto bg-white md:max-w-[70%] lg:max-w-screen-md"
          ref={viewDetailRef}
        >
          <div className="w-full bg-white p-3">
            {!editSpecificationState ? (
              <>
                <div className="pb-5">
                  <div className="mb-6 flex items-center border-b pb-3">
                    <h3>
                      {stringUtils.firstCharToUpperCase(
                        t("detailSpecification.specification")
                      )}
                    </h3>
                    {role === commonConfig.userType.buyer && (
                      <div className="ml-auto">
                        <button
                          onClick={editButtonEvent}
                          className="ml-auto mr-2 rounded border bg-slate-50 p-2 py-1 text-xs font-semibold"
                        >
                          {stringUtils.firstCharToUpperCase(
                            t("detailSpecification.edit")
                          )}
                        </button>
                        <button
                          onClick={deleteButtonEvent}
                          className="ml-auto rounded border bg-slate-50 p-2 py-1 text-xs font-semibold"
                        >
                          {stringUtils.firstCharToUpperCase(
                            t("detailSpecification.delete")
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  <SpecificationDetailContent item={editSelectedItem} />
                </div>
              </>
            ) : (
              <EditSpecificationContainer />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSpecificationContainer;
