import Image from "next/image";
import { useTranslation } from "react-i18next";
import * as stringUtils from "src/utils/stringUtils";

const PackagingItem = props => {
  const { t } = useTranslation();
  const {
    item,
    itemCheckedEvent = () => {},
    itemEditButton = () => {},
  } = props;

  const activeCheck = item.processData.activeClass;
  const activeItemWrapClass = `relative mb-3 ${
    activeCheck && "self-start "
  } overflow-hidden rounded border ${
    activeCheck && "border-primary-500"
  } sm:mb-0 sm:w-44`;

  return (
    <>
      <label
        className="cursor-pointer bg-white p-3 shadow transition hover:bg-gray-50 sm:flex lg:p-6 lg:shadow-none"
        htmlFor={`item-id_${item.itemId}`}
      >
        <>
          <input
            type="checkbox"
            name="items"
            value={item.itemId}
            id={`item-id_${item.itemId}`}
            onChange={itemCheckedEvent}
            className="hidden"
            // checked={checked}
          />
        </>
        <div className={activeItemWrapClass}>
          <Image
            src={item.processData.image}
            className="w-full object-cover"
            alt=""
          />
          <div
            className={`absolute top-2 left-2 flex rounded-full ${
              item.processData.activeClass ? "bg-primary-500" : "bg-gray-200"
            } p-0.5 text-white`}
          >
            <span className="material-symbols-outlined text-[18px]">check</span>
          </div>
        </div>
        <div className="flex grow flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col sm:ml-6 sm:p-0 lg:ml-10">
            <div className="mb-2">
              <h4 className="font-bold sm:text-lg">{item.itemName}</h4>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-x-6 sm:gap-y-1">
              <dl>
                <dt className="text-xs text-slate-400">
                  {stringUtils.firstCharToUpperCase(
                    t("packagingList.nickname")
                  )}
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
                  {stringUtils.firstCharToUpperCase(
                    t("packagingList.category")
                  )}
                  (
                  {stringUtils.firstCharToUpperCase(
                    t(`packagingList.${item.processData.categoryType}`)
                  )}
                  )
                </dt>
                <dd className="text-sm font-semibold">
                  {item.processData.name}
                </dd>
              </dl>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <button
              onClick={itemEditButton}
              data-id={item.itemId}
              className="flex items-center rounded-full border border-slate-300 bg-slate-50 p-1.5 px-3.5 text-sm font-semibold transition hover:border-slate-400 hover:bg-slate-100"
            >
              {stringUtils.firstCharToUpperCase(
                t("packagingList.view details")
              )}
              <span className="material-symbols-outlined ml-2 text-sm">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </label>
    </>
  );
};

export default PackagingItem;
