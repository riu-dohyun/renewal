import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import QtyItem from "./QtyItem";

const RequestDetailInfoItem = props => {
  const { t } = useTranslation();
  const { item, itemOnClick } = props;
  const [sumPrice, setSumPrice] = useState(0);
  const categoryInfo = commonUtils.getCategoryInfo({
    categoryCode: item.category,
  });
  const subCategoryInfo = commonUtils.getSubCategoryInfo({
    categoryCode: item.category,
    subCategoryCode: item.subCategory,
  });

  useEffect(() => {
    const findRfqItem = item?.findRfqItem;
    const sumToolingValue = findRfqItem
      ? findRfqItem[0]?.tooling?.reduce((acc, cur) => {
          return acc + Number(cur.cost);
        }, 0)
      : "";
    setSumPrice(sumToolingValue);
  }, [item, sumPrice]);

  return (
    <>
      <div
        className="mb-3 cursor-pointer shadow-sm lg:mb-0 lg:shadow-none"
        onClick={itemOnClick}
        data-id={item.rfqItemId}
        data-item-no={item.itemNo}
      >
        <div className="flex flex-row bg-white p-3 hover:bg-gray-50 lg:px-3 lg:py-6">
          <div
            className={`relative flex basis-2/6 self-start overflow-hidden rounded border ${
              item.findRfqItem && "border-primary-500"
            } bg-white sm:basis-1/4 lg:basis-2/6`}
          >
            <Image
              src={subCategoryInfo.image}
              className="w-full object-cover"
              alt=""
            />
            <div
              className={`absolute top-2 left-2 flex rounded-full ${
                item.findRfqItem ? "bg-primary-500" : "bg-gray-200"
              } p-0.5 text-white`}
            >
              <span className="material-symbols-outlined text-[14px]">
                check
              </span>
            </div>
          </div>

          <div className="ml-3 flex w-full basis-4/6 flex-col sm:basis-3/4 lg:basis-4/6">
            <div className="mb-2">
              <div className="mb-2 flex items-center">
                <h5 className="text-sm font-bold">#{item.itemNo}</h5>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <dl className="text-sm">
                  <dt className="text-xs text-slate-400">
                    {stringUtils.firstCharToUpperCase(
                      t("quoteRegister.submitRequest")
                    )}
                  </dt>
                  <dd className="text-[13px] font-semibold">{item.itemName}</dd>
                </dl>
                <dl className="text-sm">
                  <dt className="text-xs text-slate-400">
                    {stringUtils.firstCharToUpperCase(
                      t("quoteRegister.category")
                    )}
                    (
                    {stringUtils.firstCharToUpperCase(t("quoteRegister.style"))}
                    )
                  </dt>
                  <dd className="text-[13px] font-semibold">
                    {categoryInfo.name}
                  </dd>
                </dl>
              </div>
            </div>
            <table className="w-full border-collapse border-t text-center text-sm">
              <colgroup>
                <col width="*" />
                <col width="*" />
              </colgroup>
              <thead>
                <tr className="border-b bg-gray-100 text-xs text-gray-400">
                  <th className="px-1 py-1.5 font-normal xl:px-3">
                    {stringUtils.firstCharToUpperCase(
                      t("quoteRegister.quantities")
                    )}
                  </th>
                  <th className="px-1 py-1.5 font-normal xl:px-3">
                    {stringUtils.firstCharToUpperCase(t("quoteRegister.price"))}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {item.findRfqItem !== null
                  ? item?.findRfqItem[0]?.pricing?.map((fItem, idx) => (
                      <QtyItem
                        key={idx}
                        flag={true}
                        item={fItem}
                        sumPrice={sumPrice}
                      />
                    ))
                  : item.qty.map((fItem, idx) => (
                      <QtyItem
                        key={idx}
                        flag={false}
                        item={fItem}
                        sumPrice={sumPrice}
                      />
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetailInfoItem;
