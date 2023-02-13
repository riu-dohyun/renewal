import SpecCommonSelectListing from "src/components/listing/SpecCommonSelectListing";

const PrintColorSelectListing = props => {
  const { list, defaultValue = "", name } = props;
  return (
    <SpecCommonSelectListing
      selectedList={list}
      selectedListDefaultValue={defaultValue}
      label={name}
    />
  );
};

export default PrintColorSelectListing;
