import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import iconBuyer from "src/assets/common/icon_buyer.png";
import iconSupplier from "src/assets/common/icon_supplier.png";
import { userType } from "src/config/common";
import * as stringUtils from "src/utils/stringUtils";

const AccountTypeContainer = props => {
  const { t } = useTranslation();
  const { userRoleTypeButtonClick } = props;

  const accountTypeList = [
    {
      type: userType.buyer,
      image: iconBuyer,
      imgAlt: stringUtils.firstCharToUpperCase(t("signUp.buyerType")),
      title: stringUtils.firstCharToUpperCase(t("common.buyer")),
      desc: stringUtils.firstCharToUpperCase(t("signUp.signUpTypeBuyerDesc")),
      userType: userType.buyer,
    },
    {
      type: userType.supplier,
      image: iconSupplier,
      imgAlt: stringUtils.firstCharToUpperCase(
        t("signUp.signUpTypeSupplierType")
      ),
      title: stringUtils.firstCharToUpperCase(t("common.supplier")),
      desc: stringUtils.firstCharToUpperCase(
        t("signUp.signUpTypeSupplierDesc")
      ),
      userType: userType.supplier,
    },
  ];

  return (
    <>
      <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {accountTypeList.map((item, idx) => (
          <Fragment key={idx}>
            <button
              onClick={userRoleTypeButtonClick}
              data-type={item.userType}
              className="flex flex-col justify-center rounded-lg bg-slate-200 p-4 text-center transition hover:shadow-lg hover:shadow-slate-300/50"
            >
              <div className="mx-auto mb-3 flex">
                <Image src={item.image} className="w-full" alt={item.imgAlt} />
              </div>
              <h3 className="w-full text-center text-xl text-primary-500">
                {item.title}
              </h3>
              <p className="w-full text-center text-gray-700">{item.desc}</p>
            </button>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default AccountTypeContainer;
