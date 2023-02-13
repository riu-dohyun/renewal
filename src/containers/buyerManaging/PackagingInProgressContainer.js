import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import NoItem from "src/components/item/NoItem";
import InProgressItemListing from "src/components/listing/InProgressItemListing";
import Pagination from "src/components/pagination/Pagination";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const PackagingInProgressContainer = () => {
  const { t } = useTranslation();
  const location = useRouter();
  const searchParamsObject = commonUtils.getSearchPageParams(location.search);

  const { uid, role } = useSelector(state => state.user);
  const { inProgressItems, inProgressTotalNum } = useSelector(
    state => state.packaging
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      packagingActions.getPackagingItemRequestListTrigger({
        uid,
        buyerUid: uid,
        ...searchParamsObject,
      })
    );

    return () => {};
  }, [location.search]);

  return (
    <>
      {/* title */}
      <div className="mb-3 flex flex-col bg-white shadow-sm lg:mb-8 lg:shadow-none">
        <div className="relative flex items-center bg-white p-3 lg:mb-0 lg:border-b lg:p-0 lg:pb-6">
          <div className="item-center flex">
            <h2 className="text-xl xl:text-2xl">
              {stringUtils.firstCharToUpperCase(t("inProgress.inProgress"))}
            </h2>
          </div>
        </div>
      </div>
      <InProgressItemListing items={inProgressItems} role={role} />
      {inProgressTotalNum > 0 ? (
        <>
          <div className="sticky bottom-0 mt-auto text-center">
            <div className="border-t bg-white p-3 lg:p-6 lg:px-0">
              <div className="flex items-center justify-between">
                <Pagination
                  totalCount={inProgressTotalNum}
                  paramsObj={searchParamsObject}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <NoItem />
      )}
    </>
  );
};

export default PackagingInProgressContainer;
