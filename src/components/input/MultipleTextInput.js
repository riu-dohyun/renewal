const MultipleTextInput = props => {
  const { name, placeholder, defaultValue = "" } = props;
  return (
    <textarea
      name={name}
      label={name}
      placeholder={placeholder}
      className="form-textarea h-28 resize-none transition"
      defaultValue={defaultValue}
    ></textarea>
  );
};

export default MultipleTextInput;
