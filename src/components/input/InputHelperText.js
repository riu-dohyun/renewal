import { FormHelperText } from "@material-ui/core";

const InputHelperText = props => {
  const { id, labelName, helperText, error, className } = props;
  return (
    <FormHelperText
      id={id}
      label={labelName}
      error={error}
      className={className}
    >
      {helperText}
    </FormHelperText>
  );
};

export default InputHelperText;
