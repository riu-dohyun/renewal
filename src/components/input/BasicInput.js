import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const BasicInput = props => {
  const {
    type = "text",
    placeholder,
    className,
    required = false,
    disabled = false,
    onChange = () => {},
    value = "",
    error = false,
    ariaDescribedby = "",
    datasetRole = "",
    autoComplete = "off",
    maxLength = null,
  } = props;
  return (
    <>
      <TextField
        onChange={onChange}
        required={required ? required : false}
        disabled={disabled ? disabled : false}
        error={error ? error : false}
        label={placeholder}
        type={type}
        className={className}
        size="small"
        variant="outlined"
        value={value}
        aria-describedby={ariaDescribedby}
        autoComplete={autoComplete}
        inputProps={{
          "data-role": datasetRole,
          maxLength: maxLength,
        }}
      />
    </>
  );
};

BasicInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default BasicInput;
