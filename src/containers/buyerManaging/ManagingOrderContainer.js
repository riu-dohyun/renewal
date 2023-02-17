import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import create_step01 from "src/assets/managingOrder/create_step01.png";
import create_step02 from "src/assets/managingOrder/create_step02.png";
import create_step04 from "src/assets/managingOrder/create_step04.png";
import url from "src/config/url";
import * as stringUtils from "src/utils/stringUtils";

export const ManagingOrderItem = props => {
  const { step, image, desc } = props;
  const { t } = useTranslation();
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-4 shadow-lg lg:max-w-[300px]">
      <div className="mb-8">
        <span className="border-b border-b-slate-300 pb-1 text-sm font-semibold text-slate-400">
          {stringUtils.firstCharToUpperCase(t(`${step}`))}
        </span>
      </div>
      <div className="mx-auto mb-4 w-full max-w-[90px] lg:mb-8 xl:max-w-[120px]">
        <Image src={image} className="w-full" alt="" />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <h4 className="text-center lg:text-xl">
          {stringUtils.firstCharToUpperCase(t(`${desc}`))}
        </h4>
      </div>
    </div>
  );
};

const ManagingOrderContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="lg: justify-center p-4 lg:flex lg:h-full lg:items-center lg:p-6 xl:p-8">
      <div className="lg:py-12">
        {/* <!-- 페이지 타이틀 --> */}
        <div className="mb-6 flex items-center justify-center lg:mb-10 xl:mb-12">
          <h2 className="text-xl lg:text-3xl xl:text-4xl">
            {stringUtils.firstCharToUpperCase(
              t("managingOrder.manageYourOrder")
            )}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 pb-12 sm:grid-cols-2 lg:mx-auto lg:max-w-[1200px] lg:grid-cols-3 lg:gap-4">
          <ManagingOrderItem
            step="managingOrder.step1"
            image={create_step01}
            desc="managingOrder.step1Text"
          />
          <ManagingOrderItem
            step="managingOrder.step2"
            image={create_step02}
            desc="managingOrder.step2Text"
          />
          <ManagingOrderItem
            step="managingOrder.step3"
            image={create_step04}
            desc="managingOrder.step4Text"
          />
        </div>
        <div className="flex w-full justify-center">
          <Link
            href={`${url.buyer.packagingCreate}`}
            className="flex items-center rounded-full bg-primary-500 px-8 py-2 font-semibold text-white"
          >
            <span className="material-symbols-outlined mr-1 flex text-xl">
              add
            </span>
            {stringUtils.firstCharToUpperCase(t("managingOrder.create"))}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagingOrderContainer;
