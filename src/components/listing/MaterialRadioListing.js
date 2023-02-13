import { TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import * as commonConfig from "src/config/common";
import * as commonUtils from "src/utils/commonUtils";
import SpecCommonRadioListing from "./SpecCommonRadioListing";

const MaterialRadioListing = props => {
  const {
    list,
    defaultValueIndex = null,
    name,
    selectedName,
    innerOptionDefaultValue,
  } = props;
  let { defaultValue = "" } = props;

  // ANCHOR: STATE VALUE
  const [updateStatus, setUpdateStatus] = useState(false);
  // NOTE: 가이드 정보
  const [guide, setGuide] = useState("");
  // NOTE: grammage 부분 변경 감지
  const [asyncCheck, setAsyncCheck] = useState(false);
  // NOTE: 초기 데이터 잡는 상태 값 input value && radio selected value
  const [processValue, setProcessValue] = useState(null);
  // NOTE: inner select list 상태 값
  const [selectedList, setSelectedList] = useState([]);
  // NOTE: inner select list default value 상태 값
  const [selectedListDefaultValue, setSelectedListDefaultValue] =
    useState(null);
  // NOTE: radio button 클릭시 input을 보여줘야하는지 여부 상태 값
  const [selectedOpenInput, setSelectedOpenInput] = useState(false);
  // NOTE: 선택 시 input을 보여주는 부분 value (수정 시 필요)
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [checked, setChecked] = useState(null);

  const checkObjectEmpty = commonUtils.checkObjectEmpty(selectedList);

  // NOTE: guide show
  const radioChangeEvent = e => {
    const target = e.currentTarget;
    const index = target.dataset.index;
    const choice = list[index];
    const choiceList = choice?.selectedList;
    const findGuide = choice.guide.desc;
    const innerSelectedList = choiceList?.list;
    const innerSelectedListDefaultValue = choiceList?.defaultValue;
    const openInputType = choice?.selectedOpenInput ? true : false;

    setUpdateStatus(true);

    setAsyncCheck(true);
    setGuide(findGuide);
    setSelectedList(innerSelectedList);
    setSelectedListDefaultValue(innerSelectedListDefaultValue);
    setSelectedOpenInput(openInputType);
  };

  // NOTE: 컴포너트 렌더링 전에 실행 되어야 하는 부분
  useEffect(() => {
    if (!checked) {
      setChecked(defaultValue);
    }

    if (defaultValue) {
      let filterValue = list.filter(item => item.content === defaultValue);

      filterValue =
        filterValue.length === 0
          ? list.filter(item => {
              if (item.selectedOpenInput) {
                setSelectedInputValue(defaultValue);
                defaultValue = item.content;
                return true;
              }
            })
          : filterValue;

      setProcessValue(filterValue[0]);
    }
  }, []);

  useEffect(() => {
    // NOTE: init guide show
    const defaultValueIndexTypeCheck = typeof defaultValueIndex === "number";
    const existsDefaultValueIndex = defaultValueIndex > -1;
    const condition = defaultValueIndexTypeCheck && existsDefaultValueIndex;

    if (condition || processValue) {
      const selected = list[defaultValueIndex] || processValue || null;
      setGuide(selected?.guide?.desc);
      setSelectedListDefaultValue(selected?.selectedList?.defaultValue);
      setSelectedList(selected?.selectedList?.list);
      setAsyncCheck(false);
      if (selected?.selectedOpenInput) {
        setSelectedOpenInput(true);
      }
    }
  }, [processValue]);

  useEffect(() => {
    setAsyncCheck(false);
  }, [asyncCheck]);

  useEffect(() => {}, [checked]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:flex-row">
        <SpecCommonRadioListing
          defaultValue={checked}
          name={name}
          list={list}
          onChange={radioChangeEvent}
        />

        {selectedOpenInput && (
          <TextField
            required={true}
            name={commonConfig.specFormName.materialWriteInput}
            defaultValue={selectedInputValue}
          />
        )}
      </div>
      {guide && (
        <div className="flex items-center">
          <span className="material-symbols-outlined mr-1 self-start text-[20px]">
            report
          </span>
          <p className="flex text-sm">{guide}</p>
        </div>
      )}
      <div className="flex flex-col">
        {selectedList && !checkObjectEmpty && !asyncCheck && (
          <>
            <h3 className="mb-2 text-sm font-semibold text-gray-600">
              {selectedName}
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:flex-row">
              <SpecCommonRadioListing
                list={selectedList}
                defaultValue={
                  !updateStatus && innerOptionDefaultValue
                    ? innerOptionDefaultValue
                    : selectedListDefaultValue
                }
                name={selectedName}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MaterialRadioListing;
