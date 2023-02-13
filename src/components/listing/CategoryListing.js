import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as packagingActions from "src/store/packaging.store";
import CategoryItem from "../item/CategoryItem";

const CategoryList = props => {
  const { list, onClick } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    // NOTE: 아이템 생성 중 수정 방지를 위한 처리
    dispatch(packagingActions.setItemId(null));
  });

  return (
    <div className="mx-auto grid grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:max-w-[1200px]">
      {list.map(item => (
        <CategoryItem item={item} key={item.code} onClick={onClick} />
      ))}
    </div>
  );
};

export default CategoryList;
