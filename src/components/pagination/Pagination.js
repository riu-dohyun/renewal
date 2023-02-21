import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as stringUtils from "src/utils/stringUtils";

const Pagination = props => {
  const { t } = useTranslation();
  const { totalCount, paramsObj, changeEvent = null } = props;
  const router = useRouter();
  const { numPageItem, pageNo } = paramsObj;

  const [pageCount, setPageCount] = useState(0);
  const [pageArray, setPageArray] = useState([]);

  const changeEventFunc = async params => {
    if (changeEvent) {
      await changeEvent(params);
    }
  };

  const getStartAndEndPage = (pageNo, pageCounts) => {
    const num = Number(pageNo) + 1;
    const divide = Math.ceil(num / 10);
    const multiply = divide * 10;
    return {
      min: multiply - 9,
      max: multiply > pageCounts ? pageCounts : multiply,
    };
  };

  useEffect(() => {
    const pageCounts = Math.ceil(totalCount / Number(numPageItem));
    setPageCount(pageCounts);
    const pageInfo = getStartAndEndPage(pageNo, pageCounts);
    setPageArray(
      Array(pageInfo.max - pageInfo.min + 1)
        .fill(pageInfo.min)
        .map((item, idx) => item + idx)
        .slice(0, 10)
    );
  }, [paramsObj, totalCount]);

  const pageNoMove = async e => {
    e.preventDefault();
    const target = e.currentTarget;
    const value = Number(target.dataset.page);
    router.query = { ...router.query, pageNo: value };
    router.push({
      pathname: router.pathname,
      query: { ...router.query },
    });
    await changeEventFunc();
  };

  const arrowPageNoMove = async e => {
    e.preventDefault();
    const target = e.currentTarget;
    const type = target.dataset.type;
    let value = null;
    if (type === "prev") {
      value = Number(pageNo);
    } else if (type === "next") {
      value = Number(pageNo) + 2;
    }
    value = value < 1 ? 1 : value;
    if (value !== null) {
      router.query = { ...router.query, pageNo: value };
      router.push({
        pathname: router.pathname,
        query: { ...router.query },
      });
      await changeEventFunc();
    }
  };

  if (pageArray.length === 0) {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-1 items-center justify-between sm:hidden">
        <button
          onClick={arrowPageNoMove}
          data-type="prev"
          disabled={pageNo === 0}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
        >
          Previous
        </button>
        <button
          onClick={arrowPageNoMove}
          data-type="next"
          disabled={Number(pageNo) + 1 === pageCount}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            {stringUtils.firstCharToUpperCase(t("pagination.showing"))}{" "}
            <span className="font-medium">{pageNo + 1}</span> to{" "}
            <span className="font-medium">
              {Math.ceil(totalCount / Number(numPageItem))}
            </span>{" "}
            of <span className="font-medium">{totalCount}</span>{" "}
            {t("pagination.results")}
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={arrowPageNoMove}
              data-type="prev"
              disabled={pageNo < 1}
              className={`relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20`}
            >
              <span className="sr-only">Previous</span>
              {/* <!-- Heroicon name: mini/chevron-left --> */}
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" --> */}
            {pageArray.map((item, idx) => (
              <Fragment key={idx}>
                <button
                  data-page={item}
                  onClick={pageNoMove}
                  aria-current="page"
                  className={`${
                    Number(pageNo) === Number(item) - 1
                      ? "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                      : "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  } `}
                >
                  {item}
                </button>
              </Fragment>
            ))}

            <button
              onClick={arrowPageNoMove}
              data-type="next"
              disabled={Number(pageNo) + 1 === pageCount}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              {/* <!-- Heroicon name: mini/chevron-right --> */}
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
