import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as commonConfig from "src/config/common";
import * as stringUtils from "src/utils/stringUtils";

const StatusItem = props => {
  const { type, status } = props;
  const [info, setInfo] = useState(null);
  const { t } = useTranslation();

  const statusItemClass = (bg, text) =>
    `ml-3 rounded-full ${bg} py-0.5 px-2 text-sm font-semibold ${text}`;
  const itemType = [
    {
      type: commonConfig.statusType.QUOTE,
      list: [
        {
          status: 1000,
          desc: stringUtils.firstCharToUpperCase(t("status.quote.quoting")),
          class: statusItemClass("bg-gray-500", "text-gray-100"),
        },
        {
          status: 2000,
          desc: stringUtils.firstCharToUpperCase(t("status.quote.submitted")),
          class: statusItemClass("bg-lime-500", "text-lime-100"),
        },
        {
          status: 9000,
          desc: stringUtils.firstCharToUpperCase(t("status.quote.ordered")),
          class: statusItemClass("bg-cyan-500", "text-cyan-100"),
        },
        {
          status: 9100,
          desc: stringUtils.firstCharToUpperCase(t("status.quote.declined")),
          class: statusItemClass("bg-rose-500", "text-rose-100"),
        },
        {
          status: 9200,
          desc: stringUtils.firstCharToUpperCase(t("status.quote.unSubmitted")),
          class: statusItemClass("bg-rose-500", "text-rose-100"),
        },
      ],
    },
    {
      type: commonConfig.statusType.RFQ,
      list: [
        {
          status: 1000,
          desc: stringUtils.firstCharToUpperCase(t("status.rfq.quoting")),
          class: statusItemClass("bg-gray-500", "text-gray-100"),
        },
        {
          status: 2000,
          desc: stringUtils.firstCharToUpperCase(t("status.rfq.readyToOrder")),
          class: statusItemClass("bg-blue-500", "text-blue-100"),
        },
        {
          status: 9000,
          desc: stringUtils.firstCharToUpperCase(t("status.rfq.ordered")),
          class: statusItemClass("bg-cyan-500", "text-cyan-100"),
        },
        {
          status: 9100,
          desc: stringUtils.firstCharToUpperCase(t("status.rfq.declined")),
          class: statusItemClass("bg-rose-500", "text-rose-100"),
        },
      ],
    },
  ];

  useEffect(() => {
    const findType = itemType.filter(item => item.type == type);
    const findItem =
      findType.length > 0
        ? findType[0].list.filter(item => item.status === Number(status))
        : null;
    setInfo(findItem.length > 0 ? findItem[0] : null);
  }, []);
  if (info === null) {
    return null;
  }

  return <span className={info.class}>{info.desc}</span>;
};

export default StatusItem;
