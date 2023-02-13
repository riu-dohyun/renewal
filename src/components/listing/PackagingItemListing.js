import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import * as commonActions from "src/store/common.store";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as toastUtils from "src/utils/toastUtils";
import PackagingItem from "../item/PackagingItem";

const PackagingItemListing = props => {
  const { list } = props;
  const dispatch = useDispatch();
  const { editSelectedItem, packagingItems, packagingRequestItemsIndex } =
    useSelector(state => state.packaging);

  const newList = commonUtils.getPackagingItemProcessList({
    list,
    packagingRequestItemsIndex,
  });

  const itemCheckedEvent = e => {
    const target = e.currentTarget;
    const checked = target.checked;
    const value = target.value;
    const updateList = [...packagingRequestItemsIndex];

    // const filter = newList.filter
    // NOTE: for문 돌아서 category 같은거 없으면 알람 띄우기

    if (checked) {
      const checkItemInfo = newList.filter(item => item.itemId === value);

      const getUpdateListInfo = newList
        .map(item => {
          if (updateList.includes(item.itemId)) {
            return item.category;
          }
        })
        .filter(item => item);

      const check = getUpdateListInfo.filter(
        item => item === checkItemInfo[0].category
      );

      if (updateList.length === 0 || check.length > 0) {
        updateList.push(value);
      } else if (check.length === 0) {
        toastUtils.infoToast("같은 카테고리만 선택할 수 있습니다.");
        target.checked = false;
      }
    } else {
      const index = updateList.findIndex(item => item === value);
      if (index !== -1) {
        updateList.splice(index, 1);
      }
    }

    dispatch(packagingActions.setPackagingRequestSelectedItemIndex(updateList));
  };

  const itemEditButton = e => {
    e.preventDefault();
    const target = e.currentTarget;
    const id = target.dataset.id;

    const editItem = [...newList].filter(item => item.itemId === id)[0];

    dispatch(commonActions.setDetailSpecification(true));
    dispatch(packagingActions.setEditSelectedItem(editItem));

    commonUtils.lockScroll();
  };

  // NOTE: 수정 시 list 업데이트 된다면 데이터 재 저장
  useEffect(() => {
    const itemId = editSelectedItem?.itemId;
    const newDetailInfo = newList.filter(item => item.itemId === itemId)[0];
    dispatch(packagingActions.setEditSelectedItem(newDetailInfo));
  }, [packagingItems]);

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 lg:gap-0 lg:divide-y">
      {newList.map(item => {
        return (
          <Fragment key={item.itemId}>
            <PackagingItem
              item={item}
              itemCheckedEvent={itemCheckedEvent}
              itemEditButton={itemEditButton}
              type={commonConfig.componentType.packagingItem.itemList}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default PackagingItemListing;
