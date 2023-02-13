import Link from "next/link";
import { useTranslation } from "react-i18next";
import url from "src/config/url";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const OpportunitiesListing = props => {
  const { t } = useTranslation();
  const { opportunityList } = props;
  const getMaxQty = itemList => {
    return itemList.reduce((acc, cur) => {
      const qtyMax = Math.max(...cur.qty);
      const max = acc > qtyMax ? acc : qtyMax;

      return max;
    }, 0);
  };

  return (
    <ul className="mb-6 grid grid-cols-1 gap-4 lg:gap-0 lg:divide-y">
      {opportunityList.map(item => {
        const categoryInfo = commonUtils.getCategoryInfo({
          categoryCode: item.itemList[0].category,
        });
        return (
          <li
            key={item.rfqId}
            className="bg-white p-3 shadow transition sm:flex lg:p-6 lg:shadow-none"
          >
            <div className="mb-3 overflow-hidden rounded border sm:mb-0 sm:w-44">
              <img src={categoryInfo.image} className="w-full object-cover" />
            </div>
            <div className="flex grow flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col p-4 xl:ml-10 xl:p-0">
                <div className="mb-2">
                  <p className="text-sm text-slate-600">{categoryInfo.name}</p>
                  <h4 className="text-lg font-bold">{item.companyName}</h4>
                </div>
                <div className="grid grid-cols-2 gap-2 xl:gap-x-6 xl:gap-y-1">
                  <dl className="xl:flex xl:items-center xl:gap-2">
                    <dt className="text-xs text-slate-400 xl:text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("opportunities.requestedOn")
                      )}
                    </dt>
                    <dd className="xl:text-sm">
                      {commonUtils.getEnDate(item.createdDT)}
                    </dd>
                  </dl>
                  <dl className="xl:flex xl:items-center xl:gap-2">
                    <dt className="text-xs text-slate-400 xl:text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("opportunities.requestId")
                      )}
                    </dt>
                    <dd className="xl:text-sm">#{item.rfqNo}</dd>
                  </dl>
                  <dl className="xl:flex xl:items-center xl:gap-2">
                    <dt className="text-xs text-slate-400 xl:text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("opportunities.nickname")
                      )}
                    </dt>
                    <dd className="xl:text-sm">{item.itemList[0].itemName}</dd>
                  </dl>
                  <dl className="xl:flex xl:items-center xl:gap-2">
                    <dt className="text-xs text-slate-400 xl:text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("opportunities.maxQuantityUnits")
                      )}
                    </dt>
                    <dd className="font-semibold xl:text-sm">
                      {getMaxQty(item.itemList)}
                    </dd>
                  </dl>
                  <dl className="xl:flex xl:items-center xl:gap-2">
                    <dt className="text-xs text-slate-400 xl:text-sm">
                      {stringUtils.firstCharToUpperCase(
                        t("opportunities.item")
                      )}
                    </dt>
                    <dd className="font-semibold xl:text-sm">
                      {item.itemList.length}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="flex justify-center py-3 sm:justify-end sm:p-0 md:ml-auto">
                <Link
                  href={`${url.supplier.quoteRegister}/${item.rfqId}`}
                  className="flex items-center rounded-full border border-slate-300 bg-slate-50 p-1.5 px-3.5 text-sm font-semibold transition hover:border-slate-400 hover:bg-slate-100"
                >
                  {stringUtils.firstCharToUpperCase(
                    t("opportunities.viewDetails")
                  )}
                  <span className="material-symbols-outlined ml-2 text-sm">
                    arrow_forward_ios
                  </span>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default OpportunitiesListing;
