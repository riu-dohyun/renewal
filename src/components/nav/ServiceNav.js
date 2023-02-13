import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import url from "src/config/url";

const ServiceNav = () => {
  const location = useRouter();
  const { t } = useTranslation();
  const pathName = location.pathname;

  return (
    <div className="mb-4 overflow-hidden overflow-x-auto border-t border-b border-t-black lg:mb-8">
      <ul className="flex flex-row">
        <li
          className={`tab_item ${
            url.service.termsOfUse.includes(pathName) && "active"
          } flex`}
        >
          <Link
            href={url.service.termsOfUse}
            className="relative whitespace-nowrap p-3 text-center font-semibold"
          >
            {t("footer.termsOfService")}
          </Link>
        </li>
        <li
          className={`tab_item ${
            url.service.privacyPolicy.includes(pathName) && "active"
          } flex`}
        >
          <Link
            href={url.service.privacyPolicy}
            className="relative whitespace-nowrap p-3 text-center font-semibold"
          >
            {t("footer.privacyPolicy")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceNav;
