import PackagingRequestItem from "../item/PackagingRequestItem";

const PackagingRequestListing = props => {
  const { list } = props;
  return (
    <ul className="mb-6 grid grid-cols-1 gap-4 lg:gap-0 lg:divide-y">
      {list.map(item => {
        return (
          <li
            key={item.itemId}
            className="bg-white p-3 shadow-sm transition sm:flex lg:p-6 lg:shadow-none"
          >
            <PackagingRequestItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default PackagingRequestListing;
