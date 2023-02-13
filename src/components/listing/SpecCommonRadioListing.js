import { useEffect, useState } from "react";

const SpecCommonRadioListing = props => {
  const {
    list,
    defaultValue = "",
    name,
    onChange = () => {},
    // className = "",
  } = props;
  const [checked, setChecked] = useState();

  const inputOnChange = e => {
    const target = e.currentTarget;
    const value = target.value;
    setChecked(value);
    onChange(e);
  };

  useEffect(() => {
    if (!checked) {
      setChecked(defaultValue);
    }
  }, [checked]);

  return (
    <>
      {list.map((item, idx) => (
        <div className="w-full" key={idx}>
          <label
            className={`inline-flex w-full cursor-pointer items-center justify-center rounded border-gray-200 bg-gray-100 py-1.5 px-3 text-sm  ${
              item.content === checked
                ? "bg-secondary-500 text-white"
                : "text-gray-500 hover:bg-gray-200 hover:text-gray-600"
            } `}
          >
            <input
              type="radio"
              name={name}
              value={item.content}
              onChange={inputOnChange}
              className="hidden"
              checked={item.content === checked}
              data-index={item?.index}
            />

            {item.content}
          </label>
        </div>
      ))}
    </>
  );
};

export default SpecCommonRadioListing;
