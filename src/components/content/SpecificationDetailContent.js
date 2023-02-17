import _ from "lodash";
import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { eachSpecFormName } from "src/config/common";
import * as commonUtils from "src/utils/commonUtils";
import * as stringUtils from "src/utils/stringUtils";
import EditPackagingItem from "../item/EditPackagingItem";
import DocumentsListing from "../listing/DocumentsListing";

const SpecificationDetailContent = props => {
  const { t } = useTranslation();
  const { item } = props;

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

  return (
    <>
      {item.documents.length > 0 && (
        <div className="relative mb-6 rounded border p-4">
          <h6 className="absolute -top-[10px] mb-3 bg-white px-2 text-sm font-semibold">
            Attached
          </h6>
          <div className="flex flex-wrap gap-2">
            <DocumentsListing item={item.documents} />
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <div className="w-full basis-5/12 self-start overflow-hidden rounded border xl:basis-3/6">
          <Image src={item?.processData?.image} className="w-full" alt="" />
        </div>
        <div className="ml-4 w-full basis-7/12 xl:basis-3/6">
          <dl className="grid grid-cols-2 items-center gap-3">
            {/* item id */}
            <EditPackagingItem
              title={stringUtils.firstCharToUpperCase(
                t("specificationContent.itemID")
              )}
              info={item?.itemId || item?.rfqItemId}
            />
            {/* category */}
            {categoryName && (
              <EditPackagingItem
                title={stringUtils.firstCharToUpperCase(
                  t("specificationContent.category")
                )}
                info={categoryName}
              />
            )}
            {/* sub category */}
            {subCategoryName && (
              <EditPackagingItem
                title={stringUtils.firstCharToUpperCase(
                  t("specificationContent.subCategory")
                )}
                info={subCategoryName}
              />
            )}
            {/* style */}
            {styleName && (
              <EditPackagingItem
                title={stringUtils.firstCharToUpperCase(
                  t("specificationContent.style")
                )}
                info={styleName}
              />
            )}
            {/* size spec */}
            {item?.processData?.sizeSpec && (
              <EditPackagingItem
                title={stringUtils.firstCharToUpperCase(
                  t("specificationContent.sizeSpec")
                )}
                info={item?.processData?.sizeSpec}
              />
            )}
            {keyList.map((keyItem, idx) => {
              if (keyItem === "sizeSpec") return null;

              let info = item?.spec[`${keyItem}`];
              return (
                <Fragment key={idx}>
                  {item?.spec[`${keyItem}`] && (
                    <EditPackagingItem
                      title={stringUtils.firstCharToUpperCase(
                        t(`specificationContent.${keyItem}`)
                      )}
                      info={info ? info : ""}
                    />
                  )}
                </Fragment>
              );
            })}
            <EditPackagingItem
              title={stringUtils.firstCharToUpperCase(
                t("specificationContent.comments")
              )}
              info={item?.notes}
            />
            <EditPackagingItem
              title={stringUtils.firstCharToUpperCase(
                t("specificationContent.whatDoYouPack")
              )}
              info={item?.contents}
            />
            <EditPackagingItem
              title={stringUtils.firstCharToUpperCase(
                t("specificationContent.nickName")
              )}
              info={item?.itemName}
            />
          </dl>
        </div>
      </div>
    </>
  );
};

export default SpecificationDetailContent;
