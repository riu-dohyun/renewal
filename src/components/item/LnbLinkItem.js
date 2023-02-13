import Link from "next/link";
import { useTranslation } from "react-i18next";
import * as stringUtils from "src/utils/stringUtils";

const LnbLinkItem = props => {
  const { t } = useTranslation();
  const { info } = props;
  if (!info.linkList) {
    return <></>;
  }
  return (
    <>
      <h3 className="font-bold">
        <Link href={`${info.titleUrl}`}>
          {stringUtils.firstCharToUpperCase(t(`header.${info.titleName}`))}
        </Link>
      </h3>
      <ul className="py-4">
        {info?.linkList?.map((item, idx) => (
          <li key={idx}>
            <Link
              href={`${item.url}`}
              className={`flex items-center rounded-md p-2 transition  ${
                item.active
                  ? "bg-gray-100 text-secondary-500"
                  : "text-gray-600 hover:text-secondary-500 focus:bg-gray-100 focus:text-secondary-500"
              }`}
            >
              {item.Icon && item.Icon}
              <p className="ml-1.5">
                {stringUtils.firstCharToUpperCase(t(`sideMenu.${item.text}`))}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LnbLinkItem;
