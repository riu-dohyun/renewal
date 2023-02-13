import { useEffect, useState } from "react";
import QuotePricingItem from "../item/QuotePricingItem";

const QuotePricingListing = props => {
  const { detailInfo } = props;
  const [listCount, setListCount] = useState(false);
  const [pricingList, setPricingList] = useState([]);
  const addQuoteEvent = e => {
    e.preventDefault();
    setListCount(true);
  };
  const addQuoteDeleteEvent = e => {
    e.preventDefault();
    setListCount(false);
  };
  useEffect(() => {
    const findRfqItem = detailInfo.findRfqItem;
    if (findRfqItem !== null) {
      setPricingList(findRfqItem[0].pricing);
    } else {
      const newQtyList = detailInfo.qty.map(item => {
        return {
          qty: item,
        };
      });
      setPricingList(newQtyList);
    }
  }, []);
  return (
    <>
      {pricingList[0] && (
        <QuotePricingItem index={1} pricing={pricingList[0]} />
      )}

      {listCount || !!pricingList[1] ? (
        <QuotePricingItem
          addItem={true}
          addQuoteDeleteEvent={addQuoteDeleteEvent}
          index={2}
          pricing={pricingList[1] || null}
        />
      ) : (
        <div className="flex justify-center">
          <button
            onClick={addQuoteEvent}
            className="flex p-2 text-slate-400 hover:text-slate-500"
          >
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
      )}
    </>
  );
};

export default QuotePricingListing;
