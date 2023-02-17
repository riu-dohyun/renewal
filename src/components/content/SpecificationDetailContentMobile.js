import _ from "lodash";
import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { eachSpecFormName } from "src/config/common";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";

const SpecificationDetailContentMobile = props => {
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

  const dtClass = "text-sm text-slate-500";
  const ddClass = "break-words rounded border py-2 px-4 text-sm font-semibold";

  return (
    <>
      <div className="mb-3 w-full">
        <Image
          src={item?.processData?.image}
          className="m-auto w-full max-w-xs"
          alt=""
        />
      </div>
      <div className="w-full pb-4">
        <dl className="grid grid-cols-2 items-center justify-between gap-3">
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(t("specificationContent.itemID"))}
          </dt>
          <dd className={ddClass}>#{item?.itemId || item?.rfqItemId}</dd>
          {categoryName && (
            <>
              <dt className={dtClass}>
                {stringUtils.firstCharToUpperCase(
                  t("specificationContent.category")
                )}
              </dt>
              <dd className={ddClass}>
                {categoryName}({subCategoryName})
              </dd>
            </>
          )}
          {styleName && (
            <>
              <dt className={dtClass}>
                {stringUtils.firstCharToUpperCase(
                  t("specificationContent.style")
                )}
              </dt>
              <dd className={ddClass}>{styleName}</dd>
            </>
          )}
          {item?.processData?.sizeSpec && (
            <>
              <dt className={dtClass}>
                {" "}
                {stringUtils.firstCharToUpperCase(
                  t("specificationContent.sizeSpec")
                )}
              </dt>
              <dd className={ddClass}>{item?.processData?.sizeSpec}</dd>
            </>
          )}
          {keyList.map((keyItem, idx) => {
            if (keyItem === "sizeSpec") return null;
            return (
              <Fragment key={idx}>
                {item?.spec[`${keyItem}`] && (
                  <>
                    <dt className={dtClass}>
                      {stringUtils.firstCharToUpperCase(
                        t(`specificationContent.${keyItem}`)
                      )}
                    </dt>
                    <dd className={ddClass}>{item?.spec[`${keyItem}`]}</dd>
                  </>
                )}
              </Fragment>
            );
          })}
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(
              t("specificationContent.comments")
            )}
          </dt>
          <dd className={ddClass}>{item?.notes}</dd>
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(
              t("specificationContent.whatDoYouPack")
            )}
          </dt>
          <dd className={ddClass}>{item?.contents}</dd>
          <dt className={dtClass}>
            {stringUtils.firstCharToUpperCase(
              t("specificationContent.nickName")
            )}
          </dt>
          <dd className={ddClass}>{item?.itemName}</dd>
        </dl>
      </div>
    </>
  );
};

export default SpecificationDetailContentMobile;
