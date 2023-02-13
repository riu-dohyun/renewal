import { Pagination, PaginationItem } from "@mui/material";

const BasicPagination = props => {
  const {
    totalCount,
    showItemPage,
    defaultPage = 1,
    pageNo,
    pageChange,
  } = props;
  return (
    <Pagination
      count={Math.ceil(totalCount / showItemPage)}
      defaultPage={defaultPage}
      page={pageNo + 1}
      onChange={pageChange}
      renderItem={item => <PaginationItem {...item} />}
    />
  );
};

export default BasicPagination;
