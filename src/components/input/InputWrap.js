import { FormControl } from "@material-ui/core";

const InputWrap = props => {
  const { className, error, children } = props;
  return (
    <FormControl className={className} error={error}>
      {children}
    </FormControl>
  );
};

export default InputWrap;
