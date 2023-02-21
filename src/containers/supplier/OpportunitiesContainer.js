import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import NoItem from "src/components/item/NoItem";
import OpportunitiesListing from "src/components/listing/OpportunitiesListing";
import Pagination from "src/components/pagination/Pagination";
import url from "src/config/url";
import * as estimateActions from "src/store/estimate.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const OpportunitiesContainer = () => {
  const { t } = useTranslation();
  const location = useRouter();
  const pathName = location.pathname;
  const searchParamsObject = commonUtils.getSearchPageParams(location.search);

  const { uid } = useSelector(state => state.user);
  const { opportunityList, opportunityTotalCount } = useSelector(
    state => state.estimate
  );
  const dispatch = useDispatch();

  const newPath = pathName === url.supplier.newOpportunities;
  const openPath = pathName === url.supplier.openOpportunities;

  const bNew = newPath ? 1 : openPath ? 0 : 1;

  const getList = async () => {
    await dispatch(
      estimateActions.getOpportunitiesListTrigger({
        uid,
        bNew: bNew,
        ...searchParamsObject,
      })
    );
  };

  useEffect(() => {
    getList();
  }, [location.search]);
  // }, [pageNo, sort, search, numPageItem]);
  return (
    <>
      <div className="mb-3 flex flex-col bg-white shadow-sm lg:mb-8 lg:shadow-none">
        <div className="relative flex items-center bg-white p-3 lg:mb-0 lg:border-b lg:p-0 lg:pb-6">
          <div className="item-center flex">
            <h2 className="text-xl xl:text-2xl">
              {stringUtils.firstCharToUpperCase(
                t("opportunities.opportunities")
              )}
            </h2>
          </div>
        </div>
      </div>
      {opportunityList?.length > 0 ? (
        <>
          <OpportunitiesListing opportunityList={opportunityList} />
          <div className="sticky bottom-0 mt-auto text-center">
            <div className="border-t bg-white p-3 lg:p-6 lg:px-0">
              <div className="flex items-center justify-between">
                <Pagination
                  totalCount={opportunityTotalCount}
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
    </>
  );
};

export default OpportunitiesContainer;
