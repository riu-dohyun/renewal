import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import logo from "src/assets/logo.png";
import NotLoginMenu from "src/components/menu/NotLoginMenu";
import UserIconMenu from "src/components/menu/UserIconMenu";
import url from "src/config/url";
import * as layoutActions from "src/store/layout.store";
import * as commonUtils from "src/utils/commonUtils";

const HeaderContainer = () => {
  const { uid, role } = useSelector(state => state.user);
  const { mobileLnbActive } = useSelector(state => state.layout);
  // const { lang } = useSelector(state => state.common);
  const dispatch = useDispatch();
  const location = useRouter();
  const { t } = useTranslation();
  const pathName = location.pathname;
  const appAndUserIconRef = useRef(null);
  const [active, setActive] = useState(false);

  const isLogin = commonUtils.isLogin(uid);

  let isBuyer = commonUtils.checkBuyerType(role);
  let isSupplier = commonUtils.checkSupplierType(role);

  // if (role === commonConfig.userType.buyer) {
  //   logoUrl = url.buyer.managingOrder;
  // } else if (role === commonConfig.userType.supplier) {
  //   logoUrl = url.home;
  // }

  const mobileMenuShowIconClick = () => {
    dispatch(layoutActions.setMobileLnbActive(true));
  };
  const mobileMenuHideIconClick = () => {
    dispatch(layoutActions.setMobileLnbActive(false));
  };

  const opportunitiesActive =
    commonUtils.getFirstUrl(pathName) ===
      commonUtils.getFirstUrl(url.supplier.quoteRegister) ||
    commonUtils.getFirstUrl(pathName) ===
      commonUtils.getFirstUrl(url.supplier.newOpportunities) ||
    commonUtils.getFirstUrl(pathName) ===
      commonUtils.getFirstUrl(url.supplier.openOpportunities);

  const myTransactionActive =
    commonUtils.getFirstUrl(pathName) ===
      commonUtils.getFirstUrl(url.supplier.quoteView) ||
    pathName === url.supplier.myTransaction ||
    pathName === url.supplier.inProgress ||
    pathName === url.supplier.submitted ||
    pathName === url.supplier.ordered ||
    pathName === url.supplier.declined ||
    pathName === url.supplier.unSubmitted;

  const managingOrdersActive = pathName === url.buyer.managingOrder;

  const supplierNavTabActive = check => {
    return `rounded-full ${
      check ? "bg-secondary-500" : "bg-white"
    } px-3 py-1 text-sm font-medium ${
      check ? "text-white" : "text-gray-700"
    } transition hover:${
      check ? "bg-secondary-600" : "text-secondary-600"
    } focus:ring focus:ring-secondary-300 md:text-base`;
  };

  const appAndUserIconClickEvent = () => {
    setActive(!active);
  };

  useEffect(() => {
    function iconClickOutside(e) {
      if (
        appAndUserIconRef.current &&
        !appAndUserIconRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", iconClickOutside);
    return () => {
      document.removeEventListener("mousedown", iconClickOutside);
    };
  }, [active]);

  return (
    <>
      {isLogin && (
        <div className="flex-none basis-2/6 sm:basis-auto xl:hidden">
          {!mobileLnbActive ? (
            <button
              className="flex w-10 items-center p-2"
              onClick={mobileMenuShowIconClick}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          ) : (
            <button
              className="flex w-10 items-center p-2"
              onClick={mobileMenuHideIconClick}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>
      )}

      <div
        className={`flex grow ${
          isLogin && "justify-center"
        } sm:ml-4 sm:grow-0 xl:ml-0`}
      >
        <Link href={url.home} className="flex w-28 p-2 md:w-32">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      {isSupplier && (
        <div className="ml-6 hidden gap-3 sm:flex sm:items-center">
          <Link
            href={url.supplier.newOpportunities}
            className={supplierNavTabActive(opportunitiesActive)}
          >
            {t("header.opportunities")}
          </Link>
          <Link
            href={url.supplier.myTransaction}
            className={supplierNavTabActive(myTransactionActive)}
          >
            {t("header.myTransaction")}
          </Link>
        </div>
      )}
      {isBuyer && (
        <div className="ml-6 hidden gap-3 sm:flex sm:items-center">
          <Link
            href={url.buyer.managingOrder}
            className={supplierNavTabActive(managingOrdersActive)}
          >
            {t("header.managingOrders")}
          </Link>
        </div>
      )}

      <div className="ml-auto flex basis-2/6 justify-end sm:basis-auto">
        <ul className="flex">
          <li className="relative flex items-center">
            {/* <LangSelect lang={lang} /> */}
          </li>
          <li ref={appAndUserIconRef}>
            {isLogin ? (
              <UserIconMenu
                isBuyer={isBuyer}
                isSupplier={isSupplier}
                showClick={appAndUserIconClickEvent}
                active={active}
              />
            ) : (
              <NotLoginMenu
                showClick={appAndUserIconClickEvent}
                active={active}
              />
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderContainer;
