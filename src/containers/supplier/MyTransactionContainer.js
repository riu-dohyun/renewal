import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import NoItem from "src/components/item/NoItem";
import InProgressItemListing from "src/components/listing/InProgressItemListing";
import Pagination from "src/components/pagination/Pagination";
import url, { prefix } from "src/config/url";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const MyTransactionContainer = () => {
  const { t } = useTranslation();
  const { uid, role } = useSelector(state => state.user);
  const { nextLoading } = useSelector(state => state.common);
  const router = useRouter();
  const pathName = router.query.path;
  let searchParamsObject = commonUtils.getSearchPageParams(router.query);
  let title = "";
  let filter = {};
  const { submitQuoteList, submitQuoteListTotalNum } = useSelector(
    state => state.estimate
  );

  const dispatch = useDispatch();

  const getList = async params => {
    if (nextLoading) {
      searchParamsObject = await commonUtils.getSearchPageParams(router.query);
      const paramsObject = params ? params : searchParamsObject;
      await dispatch(
        estimateActions.getQuoteListTrigger({
          uid,
          supplierUid: uid,
          ...paramsObject,
        })
      );
    }
  };

  if (
    url.supplier.myTransaction.replace(prefix.myTransaction, "") ===
    `/${pathName}`
  ) {
    title = "sideMenu.all";
    filter = {};
  } else if (
    url.supplier.inProgress.replace(prefix.myTransaction, "") === `/${pathName}`
  ) {
    title = "sideMenu.inProgress";
    filter = {
      status: ["1000"],
    };
  } else if (
    url.supplier.submitted.replace(prefix.myTransaction, "") === `/${pathName}`
  ) {
    title = "sideMenu.submitted";
    filter = {
      status: ["2000"],
    };
  } else if (
    url.supplier.ordered.replace(prefix.myTransaction, "") === `/${pathName}`
  ) {
    title = "sideMenu.ordered";
    filter = {
      status: ["9000"],
    };
  } else if (
    url.supplier.declined.replace(prefix.myTransaction, "") === `/${pathName}`
  ) {
    title = "sideMenu.declined";
    filter = {
      status: ["9100"],
    };
  } else if (
    url.supplier.unSubmitted.replace(prefix.myTransaction, "") ===
    `/${pathName}`
  ) {
    title = "sideMenu.unSubmitted";
    filter = {
      status: ["9200"],
    };
  }

  useEffect(() => {
    if (nextLoading) {
      router.query = {
        ...router.query,
        ...filter,
      };
      getList();
    }
  }, [pathName, nextLoading]);

  return (
    <>
      <div className="mb-3 flex flex-col bg-white shadow-sm lg:mb-8 lg:shadow-none">
        <div className="relative flex items-center bg-white p-3 lg:mb-0 lg:border-b lg:p-0 lg:pb-6">
          <div className="item-center flex">
            <h2 className="text-xl xl:text-2xl">
              {stringUtils.firstCharToUpperCase(t(title))}
            </h2>
          </div>
        </div>
      </div>
      {submitQuoteList?.length > 0 ? (
        <>
          <InProgressItemListing items={submitQuoteList} role={role} />
          <div className="sticky bottom-0 mt-auto text-center">
            <div className="border-t bg-white p-3 lg:p-6 lg:px-0">
              <div className="flex items-center justify-between">
                <Pagination
                  totalCount={submitQuoteListTotalNum}
                  paramsObj={searchParamsObject}
                  changeEvent={getList}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <NoItem />
      )}
      {/* <InProgressItemListing items={submitQuoteList} role={role} /> */}
      {/* <BasicPagination
        totalCount={submitQuoteListTotalNum}
        showItemPage={numPageItem}
        pageNo={pageNo}
        pageChange={pageOnChange}
      /> */}
    </>
  );
};

export default MyTransactionContainer;
