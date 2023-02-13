import { Fragment } from "react";
import QuoteInfoItem from "../item/QuoteInfoItem";

const QuoteInfoListing = props => {
  const {
    requestItems,
    role = null,
    status = null,
    itemClickTotalValueEvent,
  } = props;

  return (
    <>
      {requestItems &&
        requestItems.map(item => (
          <Fragment key={item.rfqItemId}>
            <QuoteInfoItem
              info={item}
              role={role}
              status={status}
              itemClickTotalValueEvent={itemClickTotalValueEvent}
            />
          </Fragment>
        ))}
    </>
  );
};

export default QuoteInfoListing;
