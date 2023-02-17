import _ from "lodash";
import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { eachSpecFormName } from "src/config/common";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import DocumentsListing from "../listing/DocumentsListing";

const SpecificationDetailContentPc = props => {
  const { t } = useTranslation();
  const { item } = props;

  if (!item) {
    return null;
  }

  const categoryCheck = item?.category !== "";
  const subCategoryCheck = item?.subCategory !== "";
  const styleCheck = item?.style !== "";
  const categoryName = categoryCheck
    ? commonUtils.getCategoryInfo({ categoryCode: item?.category })?.name
    : null;
  const subCategoryName =
    categoryCheck && subCategoryCheck
      ? commonUtils.getSubCategoryInfo({
          categoryCode: item?.category,
          subCategoryCode: item?.subCategory,
        })?.name
      : null;
  const styleName =
    categoryCheck && subCategoryCheck && styleCheck
      ? commonUtils.getStyleInfo({
          categoryCode: item?.category,
          subCategoryCode: item?.subCategory,
          styleCode: item?.style,
        })?.name
      : null;

  const keyList = _.values(eachSpecFormName);

  const dtClass = "text-xs text-slate-400";
  const ddClass = "break-words text-sm font-semibold";

  return (
    <div className="flex">
      <div className="mb-3 w-56 flex-none">
        <Image src={item?.processData?.image} className="w-full" alt="" />
      </div>
      <div className="ml-6 grid grow grid-cols-2 gap-2 2xl:grid-cols-3">
        <dl>
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(t("specificationContent.itemID"))}
          </dt>
          <dd className={ddClass}>#{item?.itemId || item?.rfqItemId}</dd>
        </dl>
        {categoryName && (
          <dl>
            <dt className={dtClass}>
              {stringUtils.firstCharToUpperCase(
                t("specificationContent.category")
              )}
            </dt>
            <dd className={ddClass}>
              {categoryName}({subCategoryName})
            </dd>
          </dl>
        )}
        {styleName && (
          <dl>
            <dt className={dtClass}>
              {stringUtils.firstCharToUpperCase(
                t("specificationContent.style")
              )}
            </dt>
            <dd className={ddClass}>{styleName}</dd>
          </dl>
        )}
        {item?.processData?.sizeSpec && (
          <dl>
            <dt className={dtClass}>
              {stringUtils.firstCharToUpperCase(
                t("specificationContent.sizeSpec")
              )}
            </dt>
            <dd className={ddClass}>{item?.processData?.sizeSpec}</dd>
          </dl>
        )}
        {keyList.map((keyItem, idx) => {
          if (keyItem === "sizeSpec") return null;
          return (
            <Fragment key={idx}>
              {item?.spec[`${keyItem}`] && (
                <dl>
                  <dt className={dtClass}>
                    {stringUtils.firstCharToUpperCase(
                      t(`specificationContent.${keyItem}`)
                    )}
                  </dt>
                  <dd className={ddClass}>{item?.spec[`${keyItem}`]}</dd>
                </dl>
              )}
            </Fragment>
          );
        })}
        <dl>
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(
              t("specificationContent.comments")
            )}
          </dt>
          <dd className={ddClass}>{item?.notes}</dd>
        </dl>
        <dl>
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(
              t("specificationContent.whatDoYouPack")
            )}
          </dt>
          <dd className={ddClass}>{item?.contents}</dd>
        </dl>
        <dl>
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(
              t("specificationContent.nickName")
            )}
          </dt>
          <dd className={ddClass}>{item?.itemName}</dd>
        </dl>
      </div>
      <DocumentsListing item={item.documents} />
    </div>
  );
};

export default SpecificationDetailContentPc;
