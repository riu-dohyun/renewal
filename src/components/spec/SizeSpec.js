// const SizeSpecItem = () => {}

import * as commonConfig from "src/config/common";
import * as commonUtils from "src/utils/commonUtils";
import SizeSpecInputListing from "../listing/SizeSpecInputListing";
import SpecCommonRadioListing from "../listing/SpecCommonRadioListing";

const SizeSpec = props => {
  const { sizeUnit, sizeSpec, specificationInitialValue } = props;

  const onChange = e => {
    const target = e.currentTarget;
    const form = target.form;
    const type = target.value.trim();

    const specObj = commonConfig.specFormSizeSpecName;
    for (let key in specObj) {
      const formSpecInput = form[specObj[key]];
      if (!formSpecInput) continue;

      const changeValue = commonUtils.inchesToCm({
        value: formSpecInput.value,
        type,
      });
      formSpecInput.value = changeValue;
    }
  };
  return (
    <>
      {sizeUnit && (
        <div className="mb-3 flex gap-3">
          <SpecCommonRadioListing
            list={sizeUnit.list}
            defaultValue={specificationInitialValue?.sizeUnit}
            name={commonConfig.specFormName.sizeUnit}
            onChange={onChange}
          />
        </div>
      )}
      {sizeSpec && (
        <SizeSpecInputListing
          list={sizeSpec.list}
          defaultValue={specificationInitialValue?.sizeSpec}
        />
      )}
    </>
  );
};

// const sizeUnit = () => {}

export default SizeSpec;
