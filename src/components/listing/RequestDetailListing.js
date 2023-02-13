import RequestDetailInfoItem from "src/components/item/RequestDetailInfoItem";

const RequestDetailListing = props => {
  const { detailInfoList, itemOnClick } = props;
  return (
    <>
      {detailInfoList.map(item => (
        <RequestDetailInfoItem
          item={item}
          itemOnClick={itemOnClick}
          key={item.rfqItemId}
        />
      ))}
    </>
  );
};

export default RequestDetailListing;
