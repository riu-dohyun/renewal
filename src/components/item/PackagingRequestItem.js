import Image from "next/image";
import { useTranslation } from "react-i18next";
import * as stringUtils from "src/utils/stringUtils";
import PackagingQuotesItem from "./PackagingQuotesItem";

const PackagingItem = props => {
  const { t } = useTranslation();
  const { item } = props;

  return (
    <>
      <div className="relative mb-3 self-start overflow-hidden rounded border sm:mb-0 sm:w-44">
        <Image
          src={item.processData.image}
          className="w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex grow flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-3 flex flex-col sm:ml-6 sm:p-0 md:mb-0 lg:ml-10">
          <div className="mb-2">
            <h4 className="font-bold sm:text-lg">{item.itemName}</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-x-6 sm:gap-y-1">
            <dl>
              <dt className="text-xs text-slate-400">
                {stringUtils.firstCharToUpperCase(t("packagingList.nickname"))}
              </dt>
              <dd className="text-sm font-semibold">{item.itemName}</dd>
            </dl>
            <dl>
              <dt className="text-xs text-slate-400">
                {stringUtils.firstCharToUpperCase(t("packagingList.size"))}
              </dt>
              <dd className="text-sm font-semibold">
                {item.processData.sizeSpec}
              </dd>
            </dl>
            <dl>
              <dt className="text-xs text-slate-400">
                {stringUtils.firstCharToUpperCase(t("packagingList.category"))}(
                {stringUtils.firstCharToUpperCase(
                  t(`packagingList.${item.processData.categoryType}`)
                )}
                )
              </dt>
              <dd className="text-sm font-semibold">{item.processData.name}</dd>
            </dl>
          </div>
        </div>
        <PackagingQuotesItem item={item} />
      </div>
    </>
  );
};

export default PackagingItem;
