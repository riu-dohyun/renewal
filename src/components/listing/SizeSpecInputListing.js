import { FormControl } from "@material-ui/core";
import { Fragment } from "react";
import * as commonConfig from "src/config/common";
import styled from "styled-components";
import SpecCommonSelectListing from "./SpecCommonSelectListing";

const Styled = {
  StyledFormInputWrap: styled(FormControl)`
    width: calc(100% / ${props => props.length});
  `,
  StyledCenterSymbol: styled.span`
    display: inline-block;
    padding: 10px;
  `,
};

const SizeSpecInputListing = props => {
  const { list = [], defaultValue = [] } = props;

  const listDefaultValue = ({ list, name }) => {
    const defaultValueCheck = defaultValue?.filter(
      item => item.name === name
    )[0]?.value;
    if (defaultValueCheck) return defaultValueCheck;

    const filterArray = list.filter(item => item.default === true);
    return filterArray[0].content;
  };

  const listLength = list.length;

  return (
    <div className="flex items-start">
      {list.map((item, idx) => {
        const index = item.index;
        const list = item.list;
        const name = commonConfig.specFormSizeSpecName[`${item.content}`];
        const label = item.content;
        const defaultValues =
          defaultValue?.filter(
            fItem =>
              fItem.name ===
              commonConfig.specFormSizeSpecName[`${item.content}`]
          )[0]?.value || 0;
        return (
          <Fragment key={index}>
            {!list ? (
              <>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    className="form-input text-center font-bold text-secondary-500"
                    defaultValue={defaultValues}
                    aria-label={label}
                    name={name}
                    required={true}
                  />
                  <span className="mt-1 text-xs text-slate-500">{label}</span>
                </div>
              </>
            ) : (
              <Styled.StyledFormInputWrap length={listLength}>
                <SpecCommonSelectListing
                  selectedList={list}
                  selectedListDefaultValue={listDefaultValue({ list, name })}
                  label={label}
                  sizeSpec={true}
                />
              </Styled.StyledFormInputWrap>
            )}
            {idx < listLength - 1 && (
              <>
                <span className="material-symbols-outlined p-2">close</span>
              </>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default SizeSpecInputListing;
