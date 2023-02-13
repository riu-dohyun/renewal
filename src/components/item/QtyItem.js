import { useEffect, useState } from "react";
import * as commonUtils from "src/utils/commonUtils";

const QtyItem = props => {
  const { flag, item, sumPrice } = props;
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (flag) {
      setQty(item.qty);
      setPrice(Number(item.unitPrice) * Number(item.qty) + sumPrice);
    } else {
      setQty(item);
      setPrice(0);
    }
  }, [item, price, qty, sumPrice]);

  return (
    <>
      <tr className="font-semibold">
        <td className="px-1 py-2 xl:px-3">
          {commonUtils.numberWithCommas(qty)}
        </td>
        <td className="px-1 py-2 xl:px-3">
          ${commonUtils.numberWithCommas(price)}
        </td>
      </tr>
    </>
  );
};

export default QtyItem;
