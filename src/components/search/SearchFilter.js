import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as stringUtils from "src/utils/stringUtils";

const SearchFilter = props => {
  const { changeEvent } = props;
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [showListNum, setShowListNum] = useState("");
  const router = useRouter();

  const changeEventFunc = async params => {
    if (changeEvent) {
      await changeEvent(params);
    }
  };

  const showItemPageOnChange = async e => {
    const target = e.currentTarget;
    const value = Number(target.value);
    router.query = { ...router.query, numPageItem: value };
    router.push({
      pathname: router.pathname,
      query: { ...router.query, numPageItem: value },
    });

    await changeEventFunc();
  };

  const searchOnChange = e => {
    const target = e.currentTarget;
    const value = target.value;
    setSearchValue(value);
  };

  const itemNameSearchBtnClick = async e => {
    e.preventDefault();
    router.query = { ...router.query, itemName: searchValue };
    router.push({
      pathname: router.pathname,
      query: { ...router.query, itemName: searchValue },
    });
    await changeEventFunc();
  };

  useEffect(() => {
    setSearchValue(router.query.itemName ? router.query.itemName : "");
    setShowListNum(
      router.query.numPageItem ? router.query.numPageItem : "show list"
    );
  }, []);
  return (
    <>
      <div className="flex justify-between gap-3 border-t p-2 py-2 lg:border-b lg:border-t-0 lg:px-0">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {stringUtils.firstCharToUpperCase(t("searchFilter.search"))}
        </label>
        <div className="gap relative flex w-full max-w-lg">
          <input
            type="search"
            id="default-search"
            className="w-full rounded border-transparent py-1.5 px-2 text-sm font-semibold text-gray-900 placeholder:font-normal placeholder:italic placeholder:text-slate-300"
            placeholder="Search..."
            value={searchValue}
            onChange={searchOnChange}
            required
          />
          <button
            type="submit"
            className="ml-2 rounded border px-2 py-1 text-sm font-semibold text-gray-400 hover:bg-gray-50 active:border-gray-400 active:text-gray-500"
            onClick={itemNameSearchBtnClick}
          >
            <span className="material-symbols-outlined flex text-[20px]">
              search
            </span>
          </button>
        </div>
        <select
          name=""
          id=""
          onChange={showItemPageOnChange}
          className="form-select rounded border-transparent text-sm font-semibold"
          defaultValue={showListNum}
        >
          <option value="show list" disabled>
            Show List
          </option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
      </div>
    </>
  );
};

export default SearchFilter;
