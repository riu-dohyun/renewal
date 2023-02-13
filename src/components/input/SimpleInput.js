const SimpleInput = props => {
  const { label, name, required = false, defaultValue = "" } = props;
  return (
    <>
      <input
        type="text"
        className="form-input px-2 py-1.5 font-semibold transition"
        placeholder={name}
        label={label}
        name={name}
        required={required}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default SimpleInput;
