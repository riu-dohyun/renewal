import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import NoItem from "src/components/item/NoItem";
import PackagingItemListing from "src/components/listing/PackagingItemListing";
import Pagination from "src/components/pagination/Pagination";
import SearchFilter from "src/components/search/SearchFilter";
import url from "src/config/url";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const PackagingListContainer = () => {
  const { t } = useTranslation();
  const { uid } = useSelector(state => state.user);
  const router = useRouter();
  console.log("router >>", router);
  const searchParamsObject = commonUtils.getSearchPageParams(router.query);
  const {
    packagingItemsTotalCount,
    packagingItems,
    deleteItem,
    packagingRequestItemsIndex,
  } = useSelector(state => state.packaging);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getList = () => {
    dispatch(
      packagingActions.getPackagingItemListTrigger({
        uid,
        buyerUid: uid,
        ...searchParamsObject,
      })
    );
    window.scrollTo(0, 0);
  };

  const formSubmit = e => {
    e.preventDefault();
    const target = e.currentTarget;
    const form = target.form;

    const items = form.items.length ? [...form.items] : [form.items];

    const getSelectedIdList = items
      .filter(item => item.checked)
      .map(item => item.value);

    const selectedList = [...packagingItems].filter(
      item => getSelectedIdList.indexOf(item.itemId) !== -1
    );
    dispatch(packagingActions.setPackagingRequestSelectedItem(selectedList));

    router(url.buyer.packagingRequest);
  };

  useEffect(() => {
    getList();
  }, [router.search]);

  useEffect(() => {
    if (deleteItem) {
      getList();
    }
  }, [deleteItem]);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      <form>
        <div className="mb-3 flex flex-col bg-white shadow-sm lg:mb-8 lg:shadow-none">
          <div className="relative flex items-center bg-white p-3 lg:mb-0 lg:border-b lg:p-0 lg:pb-6">
            <div className="item-center flex">
              <h2 className="text-xl xl:text-2xl">
                {stringUtils.firstCharToUpperCase(t("packagingList.items"))}
              </h2>
            </div>
          </div>
          <SearchFilter />
          {packagingItems && packagingItems.length > 0 && (
            <PackagingItemListing list={packagingItems} />
          )}

          {packagingItemsTotalCount === 0 && <NoItem />}
        </div>
        {packagingItemsTotalCount > 0 && (
          <div className="sticky bottom-0 mt-auto w-full items-center border-t bg-white text-center md:flex">
            <div className="w-full bg-white p-3 lg:p-6 lg:px-0">
              <div className="flex items-center justify-between">
                {packagingItemsTotalCount > 0 && !loading && (
                  <>
                    <Pagination
                      totalCount={packagingItemsTotalCount}
                      paramsObj={searchParamsObject}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex bg-white md:items-center md:p-3 lg:ml-10 lg:px-0 lg:py-6">
              <button
                className={`flex w-full items-center justify-center whitespace-nowrap ${
                  packagingRequestItemsIndex.length > 0
                    ? "bg-primary-500"
                    : "bg-slate-400"
                } md:px-6} p-4 font-bold text-white focus:bg-primary-600 md:ml-auto md:w-auto md:rounded-full md:py-2`}
                disabled={packagingRequestItemsIndex.length > 0 ? false : true}
                onClick={formSubmit}
              >
                {stringUtils.firstCharToUpperCase(
                  t("packagingList.request Quotes")
                )}
                <span className="material-symbols-outlined ml-2 text-sm">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default PackagingListContainer;
