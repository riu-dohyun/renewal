import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import NoItem from "src/components/item/NoItem";
import InProgressItemListing from "src/components/listing/InProgressItemListing";
import Pagination from "src/components/pagination/Pagination";
import url from "src/config/url";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const MyTransactionContainer = () => {
  const { t } = useTranslation();
  const { uid, role } = useSelector(state => state.user);
  const location = useRouter();
  const pathName = location.pathname;
  const searchParamsObject = commonUtils.getSearchPageParams(location.search);
  const [title, setTitle] = useState(null);
  const { submitQuoteList, submitQuoteListTotalNum } = useSelector(
    state => state.estimate
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let filter = {};
    if (url.supplier.myTransaction === pathName) {
      setTitle("sideMenu.all");
      filter = {};
    } else if (url.supplier.inProgress === pathName) {
      setTitle("sideMenu.inProgress");
      filter = {
        status: ["1000"],
      };
    } else if (url.supplier.submitted === pathName) {
      setTitle("sideMenu.submitted");
      filter = {
        status: ["2000"],
      };
    } else if (url.supplier.ordered === pathName) {
      setTitle("sideMenu.ordered");
      filter = {
        status: ["9000"],
      };
    } else if (url.supplier.declined === pathName) {
      setTitle("sideMenu.declined");
      filter = {
        status: ["9100"],
      };
    } else if (url.supplier.unSubmitted === pathName) {
      setTitle("sideMenu.unSubmitted");
      filter = {
        status: ["9200"],
      };
    }
    searchParamsObject.search = JSON.stringify({
      ...JSON.parse(searchParamsObject.search),
      ...filter,
    });
    dispatch(
      estimateActions.getQuoteListTrigger({
        uid,
        supplierUid: uid,
        ...searchParamsObject,
      })
    );
  }, [location.search, pathName]);

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
