import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import * as commonConfig from "src/config/common";

const SpecCommonSelectListing = props => {
  const {
    selectedListDefaultValue,
    selectedList,
    label,
    sizeSpec = false,
    onChange = () => {},
  } = props;

  return (
    <FormControl variant="standard">
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        label={label}
        defaultValue={selectedListDefaultValue}
        name={sizeSpec ? commonConfig.specFormSizeSpecName[`${label}`] : label}
        onChange={onChange}
      >
        {selectedList.map(item => (
          <MenuItem value={item.content} key={item.index}>
            {item.content}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SpecCommonSelectListing;
