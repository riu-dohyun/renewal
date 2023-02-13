import { Fragment, useState } from "react";
import InprogressItem from "../item/InprogressItem";

const InProgressItemListing = props => {
  const { items, role } = props;
  const [active, setActive] = useState(null);

  const openClickEvent = e => {
    const target = e.currentTarget;
    const id = target.dataset.id;
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  const newItems = items.map(rfqItem => {
    const newItemList = rfqItem.itemList.reduce((acc, cur) => {
      acc.rfqItemNo = acc.rfqItemNo ? acc.rfqItemNo : [];
      acc.nickName = acc.nickName ? acc.nickName : [];
      acc.category = acc.category ? acc.category : [];

      acc.rfqItemNo.push(cur.rfqItemNo);
      acc.nickName.push(cur.itemName);
      acc.category.push(cur.category);

      return acc;
    }, {});
    return {
      ...rfqItem,
      newItemList,
    };
  });

  return (
    <div className="accordions_wrapper mb-10 flex flex-col gap-3 lg:gap-4">
      {newItems.map(item => {
        return (
          <Fragment key={item.rfqId}>
            <InprogressItem
              item={item}
              role={role}
              openClickEvent={openClickEvent}
              active={active === item.rfqId ? true : ""}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default InProgressItemListing;
