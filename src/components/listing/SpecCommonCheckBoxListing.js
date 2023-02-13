const SpecCommonCheckBoxListing = props => {
  const { list, name, defaultValue = [] } = props;
  return (
    <>
      {list.map((item, idx) => (
        <div className="relative w-full" key={idx}>
          <input
            type="checkbox"
            id={`${name}-${idx}`}
            value={item.content}
            name={name}
            className="peer absolute top-1/2 left-2 z-10 translate-y-[-50%] rounded-full border-transparent text-secondary-700 focus:ring-0 focus:ring-secondary-700 focus:ring-offset-0"
            defaultChecked={
              defaultValue?.filter(fItem => fItem === item.content).length > 0
            }
          />
          <label
            htmlFor={`${name}-${idx}`}
            className="relative inline-flex w-full cursor-pointer items-center justify-center rounded border-gray-200 bg-gray-100 py-1.5 px-3 text-sm text-gray-500 hover:bg-gray-200 hover:text-gray-600 peer-checked:bg-secondary-500 peer-checked:text-white"
          >
            {item.content}
          </label>
        </div>
      ))}
    </>
  );
};

export default SpecCommonCheckBoxListing;
