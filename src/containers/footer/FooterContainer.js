import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import logo from "src/assets/common/logo_white.svg";
import url from "src/config/url";

const FooterContainer = () => {
  const { t } = useTranslation();
  const scrollTopEvent = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-900 pb-12 lg:pb-24">
        <div className="w-full overflow-hidden overflow-x-auto border-b border-gray-800 text-center">
          <ul className="mx-auto flex max-w-[1400px] py-4 text-sm text-gray-300 lg:justify-center">
            <li>
              <Link
                href={url.service.termsOfUse}
                className="whitespace-nowrap px-4 font-semibold hover:text-white"
              >
                {t("footer.companyIntroduction")}
              </Link>
            </li>

            <li>
              <Link
                href={url.service.termsOfUse}
                className="whitespace-nowrap px-4 font-semibold hover:text-white"
              >
                {t("footer.termsOfService")}
              </Link>
            </li>
            <li>
              <Link
                href={url.service.privacyPolicy}
                className="whitespace-nowrap px-4 font-semibold hover:text-white"
              >
                {t("footer.privacyPolicy")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto max-w-[1400px] py-8 px-4">
          <div className="mb-6 flex w-full flex-col lg:mb-0 lg:flex-row">
            <div className="mb-6 flex flex-col lg:mb-0">
              <Image src={logo} className="mb-3 w-28" alt="" />
              <ul className="mb-2 flex divide-x divide-gray-700 text-sm text-gray-300">
                <li className="pr-2 leading-4">RIU CO. LTD.</li>
                <li className="pl-2 leading-4">CEO: Daegyoun Kim</li>
              </ul>
              <ul className="mb-2 text-xs text-gray-400">
                <li>
                  Kolon Digital Tower I (#712), 30, Digital-ro, 32-gil, Guro-gu,
                  Seoul, Republic of Korea
                </li>
                <li>
                  Sales Office: 2F, 184, Pyeongdongsandan-ro, Gwangsan-gu,
                  Gwangju-si
                </li>
                <li>
                  Logistics Center: 1666, Yeongsan-ro , Dorim-ri ,
                  Cheonggyemyeon, Muangun, Jeonnam
                </li>
                <li>
                  Logistics Center: 309, Wolsandaeheung-gil, Seongnae-myeon,
                  Gochang-gun, Jeonbuk
                </li>
              </ul>
              <ul className="mb-2 text-xs text-gray-400">
                <li>
                  Business registration No.: 257-81-01545 | Fax: (+82)
                  504-269-3179
                </li>
                <li>
                  Telemarketing business registration No.: No. 2017-Jeonnam
                  Mokpo-0089 | Personal Information
                </li>
                <li>Protection Officer: Ko Young-jae</li>
              </ul>
            </div>
            <div className="flex flex-col lg:ml-auto">
              <p className="text-xs text-gray-400 lg:py-2 lg:text-right lg:text-sm">
                Customer center & Partnership inquiry
              </p>
              <a
                href="mailto:pojangposs-help@riupack.com"
                className="text-gray-100 lg:text-xl"
              >
                pojangposs-help@riupack.com
              </a>
              <ul className="flex flex-col">
                <li>
                  <a href="#n"></a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Copyright © 2022 RIU. All Rights Reserved.
          </p>
        </div>
      </div>
      {/* <!-- scroll top button --> */}
      <button
        onClick={scrollTopEvent}
        id="topBtn"
        title="Go to top"
        className="fixed bottom-[16px] right-[16px] z-10 cursor-pointer rounded-lg border bg-white p-2 shadow-lg transition-all hover:border-slate-900 hover:bg-slate-800 hover:text-white lg:bottom-[40px] lg:right-[40px] lg:p-3"
      >
        <span className="material-symbols-outlined flex">arrow_upward</span>
      </button>
    </>
  );
};

export default FooterContainer;
