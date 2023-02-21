import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookIcon, CreditScoreIcon } from "src/assets/common";
import {
  CreateIcon,
  InProgressIcon,
  ItemsIcon,
} from "src/assets/managingOrder";
import LnbLinkItem from "src/components/item/LnbLinkItem";
import * as commonConfig from "src/config/common";
import { media } from "src/config/common";
import url from "src/config/url";
import * as commonUtils from "src/utils/commonUtils";

const LnbContainer = () => {
  const router = useRouter();
  const pathName = router.asPath;
  const { role } = useSelector(state => state.user);
  const { windowWidth } = useSelector(state => state.layout);
  const { mobileLnbActive } = useSelector(state => state.layout);
  const buyerType = commonUtils.checkBuyerType(role);
  const supplierType = commonUtils.checkSupplierType(role);
  const [menuList, setMenuList] = useState([]);
  const { lang } = useSelector(state => state.common);

  const isCreateActive = pathName === url.buyer.packagingCreate ? "active" : "";
  const isItemsActive =
    pathName === url.buyer.packagingList ||
    pathName === url.buyer.packagingRequest
      ? "active"
      : "";
  const isInProgressActive = pathName.includes(url.buyer.packagingInProgress)
    ? "active"
    : "";

  // NOTE: supplier Opportunities
  const isNewOpportunitiesActive = pathName.includes(
    url.supplier.newOpportunities
  )
    ? "active"
    : "";
  const isOpenOpportunitiesActive = pathName.includes(
    url.supplier.openOpportunities
  )
    ? "active"
    : "";

  // NOTE: supplier My transaction
  const isSupplierMyTransactionActive = pathName.includes(
    url.supplier.myTransaction
  )
    ? "active"
    : "";
  const isSupplierInProgressActive = pathName.includes(url.supplier.inProgress)
    ? "active"
    : "";
  const isSupplierSubmittedActive = pathName.includes(url.supplier.submitted)
    ? "active"
    : "";
  const isSupplierOrderedActive = pathName.includes(url.supplier.ordered)
    ? "active"
    : "";
  const isSupplierDeclinedActive = pathName.includes(url.supplier.declined)
    ? "active"
    : "";
  const isSupplierUnSubmittedActive = pathName.includes(
    url.supplier.unSubmitted
  )
    ? "active"
    : "";

  let type = null;
  if (
    isSupplierMyTransactionActive ||
    isSupplierInProgressActive ||
    isSupplierSubmittedActive ||
    isSupplierOrderedActive ||
    isSupplierDeclinedActive ||
    isSupplierUnSubmittedActive
  ) {
    type = "my-transaction";
  } else {
    type = "opportunities";
  }

  useEffect(() => {
    const buyerLinkList = [
      {
        url: url.buyer.packagingCreate,
        Icon: <CreateIcon />,
        text: "create",
        active: isCreateActive,
      },
      {
        url: url.buyer.packagingList,
        Icon: <ItemsIcon />,
        text: "items",
        active: isItemsActive,
      },
      {
        url: url.buyer.packagingInProgress,
        Icon: <InProgressIcon />,
        text: "inProgress",
        active: isInProgressActive,
      },
    ];

    const supplierOpportunitiesLinkList = [
      {
        url: url.supplier.newOpportunities,
        Icon: <BookIcon />,
        text: "new",
        active: isNewOpportunitiesActive,
      },
      {
        url: url.supplier.openOpportunities,
        Icon: <CreditScoreIcon />,
        text: "open",
        active: isOpenOpportunitiesActive,
      },
    ];

    const supplierMyTransactionLinkList = [
      {
        url: url.supplier.myTransaction,
        Icon: null,
        text: "all",
        active: isSupplierMyTransactionActive,
      },
      {
        url: url.supplier.inProgress,
        Icon: null,
        text: "inProgress",
        active: isSupplierInProgressActive,
      },
      {
        url: url.supplier.submitted,
        Icon: null,
        text: "submitted",
        active: isSupplierSubmittedActive,
      },
      {
        url: url.supplier.ordered,
        Icon: null,
        text: "ordered",
        active: isSupplierOrderedActive,
      },
      {
        url: url.supplier.declined,
        Icon: null,
        text: "declined",
        active: isSupplierDeclinedActive,
      },
      {
        url: url.supplier.unSubmitted,
        Icon: null,
        text: "unSubmitted",
        active: isSupplierUnSubmittedActive,
      },
    ];

    let listObj = {};
    let pcListObj = [];
    let mobileListObj = [
      {
        type: commonConfig.userType.buyer,
        list: [
          {
            linkList: buyerLinkList,
            titleName: "managingOrders",
            titleUrl: url.buyer.managingOrder,
          },
        ],
      },
      {
        type: commonConfig.userType.supplier,
        list: [
          {
            linkList: supplierOpportunitiesLinkList,
            titleName: "opportunities",
            titleUrl: url.supplier.newOpportunities,
          },
          {
            linkList: supplierMyTransactionLinkList,
            titleName: "myTransaction",
            titleUrl: url.supplier.myTransaction,
          },
        ],
      },
    ];

    const width1200Check = media.breakPoint1200 < windowWidth;
    if (buyerType) {
      listObj = {
        linkList: buyerLinkList,
        titleName: "managingOrders",
        titleUrl: url.buyer.managingOrder,
      };
    } else if (supplierType) {
      if (type === "my-transaction") {
        listObj = {
          linkList: supplierMyTransactionLinkList,
          titleName: "myTransaction",
          titleUrl: url.supplier.myTransaction,
        };
      } else if (type === "opportunities") {
        listObj = {
          linkList: supplierOpportunitiesLinkList,
          titleName: "opportunities",
          titleUrl: url.supplier.newOpportunities,
        };
      }
    }
    pcListObj.push(listObj);

    setMenuList(
      width1200Check
        ? pcListObj
        : mobileListObj.filter(item => item.type === role)[0] &&
            mobileListObj.filter(item => item.type === role)[0].list
    );
  }, [windowWidth, pathName, lang]);

  return (
    <>
      <aside
        className={`fixed top-14 left-0 z-10 md:top-16 ${
          mobileLnbActive ? "" : "hidden"
        } h-full w-64 border-r bg-white p-6 xl:block`}
      >
        {menuList &&
          menuList.map((item, idx) => <LnbLinkItem info={item} key={idx} />)}
      </aside>
    </>
  );
};

export default LnbContainer;
