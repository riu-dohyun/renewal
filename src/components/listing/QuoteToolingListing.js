import { useEffect, useState } from "react";
import QuoteToolingItem from "../item/QuoteToolingItem";

const QuoteToolingListing = props => {
  const { detailInfo } = props;
  const [toolingItems, setToolingItems] = useState([]);
  const [toolingValueItems, setToolingValueItems] = useState([]);

  const onClick = e => {
    e.preventDefault();
    const length = toolingItems.length + 1;
    const newArray = Array(length)
      .fill(1)
      .map((item, idx) => idx + 1);
    setToolingItems(newArray);
  };

  const deleteOnClick = e => {
    e.preventDefault();
    const length = toolingItems.length - 1;
    const newArray = Array(length)
      .fill(1)
      .map((item, idx) => idx + 1);
    setToolingItems(newArray);
  };

  useEffect(() => {
    const findRfqItem = detailInfo.findRfqItem;
    let count = 1;

    if (findRfqItem !== null) {
      const tooling = findRfqItem[0].tooling;
      count = tooling.length > count ? tooling.length : count;
      setToolingValueItems(tooling);
    }

    setToolingItems(
      Array(count)
        .fill(1)
        .map((item, idx) => idx + 1)
    );
  }, []);

  return (
    <>
      <div>
        {toolingItems.map((item, idx) => (
          <QuoteToolingItem
            key={idx}
            tooling={toolingValueItems[idx] ? toolingValueItems[idx] : null}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={onClick}
          className="flex p-2 text-slate-400 hover:text-slate-500"
        >
          <span className="material-symbols-outlined">add_circle</span>
        </button>
        {toolingItems.length > 1 && (
          <>
            <button
              onClick={deleteOnClick}
              className="flex p-2 text-red-500 hover:text-red-700"
            >
              <span className="material-symbols-outlined">
                do_not_disturb_on
              </span>
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default QuoteToolingListing;
