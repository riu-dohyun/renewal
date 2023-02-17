import CryptoJS from "crypto-js";
import { getFixedT } from "i18next";
import moment from "moment";
import { put } from "redux-saga/effects";
import * as categoryConfig from "src/config/category";
import * as commonConfig from "src/config/common";
import { typeOnCheckBox, typeOnInput } from "src/config/specification";
import url from "src/config/url";
import i18n from "src/i18n/i18n";
import * as commonAction from "src/store/common.store";
import * as commonUtils from "src/utils/commonUtils";
import * as toastUtils from "src/utils/toastUtils";
import { v4 as uuidV4 } from "uuid";

export const reducerAsyncExecuteState = props => {
  const { state, action, type } = props;

  if (type === commonConfig.asyncState.execute) {
    state.isLoading = true;
    state.isDone = false;
    state.isPending = true;
    state.error = null;
  } else if (type === commonConfig.asyncState.success) {
    state.isLoading = false;
    state.isDone = true;
    state.isPending = false;
    state.error = null;
  } else if (type === commonConfig.asyncState.failure) {
    state.isLoading = true;
    state.isDone = false;
    state.isPending = true;
    state.error = action.error;
  }
};

export const checkBuyerType = userType => {
  return userType === commonConfig.userType.buyer;
};
export const checkSupplierType = userType => {
  return userType === commonConfig.userType.supplier;
};

export const verifyCodeHash = number => {
  var utf8arr = CryptoJS.enc.Utf8.parse(number);
  var hash = CryptoJS.SHA256(utf8arr);
  var base64 = CryptoJS.enc.Base64.stringify(hash);
  return base64;
};

export const checkObjectEmpty = obj => {
  if (!obj) return false;
  return Object.keys(obj).length === 0;
};

export const getResponseData = responseData => {
  const { errInfo, resData, retCode } = responseData.data.result;

  return {
    errInfo,
    resData,
    retCode,
  };
};

export function* commonSagaWrapper(props) {
  const t = getFixedT(null, null, commonConfig.i18nKey.sagaKey);
  const { errorMessage, tryFunc, notLoading = false } = props;
  try {
    if (!notLoading) {
      yield put({
        type: commonAction.start,
      });
    }
    const { i18nMiddleKey, retCode, navigate } = yield tryFunc();
    // console.log("i18nMiddleKey >>", i18nMiddleKey);
    if (retCode !== undefined) {
      if (retCode === 9) {
        yield localStorage.removeItem("persist:root");
        yield navigate(url.home);
        return false;
      }

      yield commonUtils.sagaErrorToast({
        t,
        i18nMiddleKey,
        retCode,
      });
    }
  } catch (error) {
    if (commonConfig.developMode) {
      console.log("error >> ", error);
    }
    if (!notLoading) {
      yield put({
        type: commonAction.end,
        payload: {
          error: errorMessage,
        },
      });
    }
  } finally {
    if (!notLoading) {
      yield put({
        type: commonAction.end,
      });
    }
  }
}

export const getCategory = props => {
  const { category, step, categoryCode, subCategoryCode } = props;
  let newList = [...category];
  if (step === 2) {
    newList = category[categoryCode].list;
  } else if (step === 3) {
    newList = category[categoryCode].list[subCategoryCode].list;
  } else if (step === 4) {
    newList = [];
  }

  return newList;
};

export const getCode = props => {
  const { code } = props;
  return code - 1;
};

export const getSpecification = props => {
  const { category, categoryCode, subCategoryCode, styleCode } = props;
  let returnObj = null;

  const checkStyleCode = styleCode === null;
  const checkSubCategoryCode = subCategoryCode === null;
  const styleSpecification =
    category[categoryCode]?.list[subCategoryCode]?.list[styleCode];
  const subCategorySpecification =
    category[categoryCode]?.list[subCategoryCode];
  const categorySpecification = category[categoryCode];

  if (checkStyleCode && subCategorySpecification) {
    returnObj = {
      ...subCategorySpecification,
    };
  } else if (checkSubCategoryCode && categorySpecification) {
    returnObj = { ...categorySpecification };
  } else if (!checkStyleCode && !checkSubCategoryCode && styleSpecification) {
    returnObj = {
      ...styleSpecification,
    };
  }

  return returnObj;
};

export const getDefaultSpecification = props => {
  const { category, categoryCode } = props;
  let returnValue = null;
  if (categoryCode === null) {
    return returnValue;
  }
  const defaultSpecification = category[categoryCode].specificationDefault;
  if (!checkObjectEmpty(defaultSpecification)) {
    returnValue = defaultSpecification;
  }

  return returnValue;
};

export const createDynamicObject = list => {
  const newObject = list.reduce((acc, cur) => {
    acc[`${cur.content}`] = null;
    return acc;
  }, {});

  return newObject;
};

// NOTE: 스펙 정보들 초기 default value 가져오기
export const getSpecificationInitialValue = selectedValue => {
  return {
    sizeUnit: selectedValue?.sizeUnit?.content || null,
    sizeSpec: selectedValue?.sizeSpec?.content || null,
    material: selectedValue?.material?.content || null,
    wrappingPaper: selectedValue?.wrappingPaper?.content || null,
    grammage: selectedValue?.grammage?.content || null,
    chipBoard: selectedValue?.chipBoard?.content || null,
    printColor: selectedValue?.printColor?.content || null,
    coating: selectedValue?.coating?.content || null,
    finish: selectedValue?.finish?.content || null,
    extras: selectedValue?.extras?.content || null,
    printSurface: selectedValue?.printSurface?.content || null,
    easyCut: selectedValue?.easyCut?.content || null,
    zipper: selectedValue?.zipper?.content || null,
    notes: selectedValue?.notes?.content || null,
    contents: selectedValue?.contents?.content || null,
    itemName: selectedValue?.itemName?.content || null,
    documents: selectedValue?.documents?.content || null,
  };
};

// NOTE: 스펙 정보들 초기 default value의 index 가져오기
export const getSpecificationInitialValueIndex = selectedValue => {
  return {
    sizeUnit: selectedValue?.sizeUnit || null,
    sizeSpec: selectedValue?.sizeSpec || null,
    material: selectedValue?.material || null,
    wrappingPaper: selectedValue?.wrappingPaper || null,
    printColor: selectedValue?.printColor || null,
    coating: selectedValue?.coating || null,
    finish: selectedValue?.finish || null,
    extras: selectedValue?.extras || null,
    printSurface: selectedValue?.printSurface || null,
    easyCut: selectedValue?.easyCut || null,
    zipper: selectedValue?.zipper || null,
  };
};

// NOTE: specList 작성해야하는 input들 가공
export const getRequireSpecList = selectedSpec => {
  let requireSpecList = [];
  for (const property in selectedSpec) {
    if (property === "sizeImage") continue;

    const attr = selectedSpec[property];
    const list = attr?.list ? attr.list : [];
    const obj = {
      name: property,
      require: attr.type === typeOnCheckBox ? false : true,
      checkBox: attr.type === typeOnCheckBox ? true : false,
    };

    // NOTE: sizeSpec 처럼 input text의 list로 된 부분 처리 목적
    if (attr.type === typeOnInput) {
      const inputAttrList = attr.list.map(item => {
        const attrListObj = {
          ...obj,
          name: commonConfig.specFormSizeSpecName[`${item.content}`],
        };
        return attrListObj;
      });

      requireSpecList.push({ ...obj, list: inputAttrList });
    } else {
      const selectedList = list.filter(item => item?.selectedList);
      const innerOption = selectedList[0]?.selectedList;
      if (innerOption) {
        const innerObj = {
          name: innerOption?.name,
          require: innerOption?.type === typeOnCheckBox ? false : true,
          checkBox: innerOption?.type === typeOnCheckBox ? true : false,
        };

        requireSpecList.push(innerObj);
      }
      requireSpecList.push(obj);
    }
  }

  return requireSpecList;
};

// NOTE: SizeSpec 처럼 input list로 가지고 있는 것 value로 가져올 때 사용
export const getInputListValue = ({ form, list }) => {
  return list.map(item => {
    return {
      name: item.name,
      value: form[`${item.name}`].value.trim(),
    };
  });
};

// NOTE: checkBox 체크된 것 값들 가져오기
export const getCheckboxCheckedListValue = ({ form, name }) => {
  return [...form[`${name}`]]
    .filter(item => item.checked)
    .map(item => item.value);
};

// NOTE: radio에 input text가 있는 경우 값 가져오기
export const getInputInTheRadioValue = ({ form, name }) => {
  // NOTE: material input form
  if (name === commonConfig.specFormName.material && form?.materialWriteInput) {
    return form.materialWriteInput.value.trim();
  } else {
    return form[`${name}`].value.trim();
  }
};

// NOTE: input require check && processing
export const createProcessingRequireSpecList = props => {
  const { requireSpecList, form } = props;

  return requireSpecList.reduce(
    (acc, cur) => {
      const name = cur.name;

      const value = cur.checkBox
        ? getCheckboxCheckedListValue({ form, name })
        : cur?.list
        ? getInputListValue({ list: cur.list, form })
        : getInputInTheRadioValue({ form, name });

      cur.require && value === "" ? acc.error.push(name) : null;

      acc[`${name}`] = value;
      return acc;
    },
    { error: [] }
  );
};

export const createUploadFileName = props => {
  const { fullName, fileExt } = props;
  return `${fullName}_${uuidV4()}.${fileExt}`;
};

// NOTE: 다음 step return 시켜주기
export const getStep = props => {
  const { list, type, step } = props;
  let returnStep = 0;
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item !== null && typeof item === "number") {
      returnStep++;
    } else {
      break;
    }
  }

  if (type === "next") {
    return returnStep + 1;
  } else if (type === "prev") {
    if (returnStep === step) {
      return returnStep - 1;
    }
    return returnStep;
  }
};

// NOTE: category null 처리
export const setNullCategory = props => {
  const { categoryObj, step } = props;

  const newCategoryObj = { ...categoryObj };
  if (step === commonConfig.createCategoryStep.categoryStep) {
    newCategoryObj.categoryCode = null;
    newCategoryObj.subCategoryCode = null;
    newCategoryObj.styleCode = null;
  } else if (step === commonConfig.createCategoryStep.subCategoryStep) {
    newCategoryObj.subCategoryCode = null;
    newCategoryObj.styleCode = null;
  } else if (step === commonConfig.createCategoryStep.styleStep) {
    newCategoryObj.styleCode = null;
  }

  return newCategoryObj;
};

// NOTE: item마다 category info 가져오기
export const getPackagingItemInfo = props => {
  const { category = null, subCategory = null, style = null } = props;
  if (style !== null && (!!style || style === 0)) {
    return categoryConfig.category[category].list[subCategory].list[style];
  } else if (subCategory !== null && (!!subCategory || subCategory === 0)) {
    return categoryConfig.category[category].list[subCategory];
  } else if (category !== null && (!!category || category === 0)) {
    return categoryConfig.category[category];
  }
};

// NOTE: category type 가져오기
export const getCategoryType = props => {
  const { depth } = props;
  return depth === 3
    ? "style"
    : depth === 2
    ? "subCategory"
    : depth === 1
    ? "category"
    : null;
};

// NOTE: sizeSpec list에 뿌릴 형식으로 가져오기
export const getSizeSpecListForm = props => {
  const { sizeSpec } = props;

  return sizeSpec
    ? sizeSpec.reduce((acc, cur) => {
        if (acc === "") {
          acc = cur.value;
        } else {
          acc += " x " + cur.value;
        }
        return acc;
      }, "")
    : "";
};

// NOTE: category name 가져오기
export const getCategoryInfo = props => {
  const { categoryCode } = props;
  return categoryConfig?.category[categoryCode];
};

// NOTE: subCategory name 가져오기
export const getSubCategoryInfo = props => {
  const { categoryCode, subCategoryCode } = props;
  return categoryConfig?.category[categoryCode]?.list[subCategoryCode];
};

// NOTE: style name 가져오기
export const getStyleInfo = props => {
  const { categoryCode, subCategoryCode, styleCode } = props;
  return categoryConfig?.category[categoryCode]?.list[subCategoryCode]?.list[
    styleCode
  ];
};

export const lockScroll = () => {
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "17px";
};

export const unlockScroll = () => {
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};

export const getPackagingItemProcessList = props => {
  const { list, packagingRequestItemsIndex = [] } = props;

  const newList = [...list].map(item => {
    const category = item.category ? Number(item.category) : null;
    const subCategory = item.subCategory ? Number(item.subCategory) : null;
    const style = item.style ? Number(item.style) : null;
    const checked = [...packagingRequestItemsIndex].indexOf(item.itemId) !== -1;
    const activeClass = checked ? "active" : "";

    const info = getPackagingItemInfo({
      category,
      subCategory,
      style,
    });
    const depth = info?.depth;

    const categoryType = getCategoryType({ depth });
    const sizeSpec = getSizeSpecListForm({
      sizeSpec: item.spec.sizeSpec,
    });
    return {
      ...item,
      processData: {
        ...info,
        categoryType,
        sizeSpec,
        activeClass,
      },
    };
  });
  return newList;
};

export const getStatusInfo = props => {
  const { type, status } = props;
  let setStatus = null;
  if (type === commonConfig.statusType.RFQ) {
    setStatus = commonConfig.status.RFQ;
  } else if (type === commonConfig.statusType.QUOTE) {
    setStatus = commonConfig.status.QUOTE;
  } else if (type === commonConfig.statusType.ORDER) {
    setStatus = commonConfig.status.ORDER;
  }
  return setStatus[`status${status}`];
};

export const inchesToCm = props => {
  let { value, type } = props;
  value = Number(value);
  const notANumberCheck = !isNaN(value);
  const typeCheck = typeof value === "number";
  const valueCheck = value > 0;
  if (typeCheck && valueCheck && notANumberCheck) {
    if (type === "inches") {
      return numberFloor({
        value: value / commonConfig.sizeUnitNumber.inchesToCmConvert,
        cut: 1,
      });
    } else if (type === "cm") {
      return numberFloor({
        value: value * commonConfig.sizeUnitNumber.inchesToCmConvert,
        cut: 1,
      });
    }
  } else {
    return 0;
  }
};

export const numberFloor = props => {
  const { cut, value } = props;

  const multiply = Math.pow(10, cut);
  const multiplyValue = value * multiply;

  const processingValue = multiplyValue.toString().split(".")[0];
  return processingValue / multiply;
};

export const getEnDate = dates => {
  const date = moment(dates);
  return date.format("MMM DD, YYYY");
};

export const checkNullAndUndefined = value => {
  return value === null || value === undefined;
};

export const quoteDataProcessing = props => {
  const { quoteList, quote } = props;

  const newQuoteList = quoteList.reduce((acc, cur) => {
    if (cur.quoteId === quote.quoteId) {
      acc.push(quote);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  return newQuoteList;
};

export const quoteListMergeProcessing = props => {
  const { requestDetailInfo, quoteList } = props;

  return requestDetailInfo?.itemList.reduce((acc, cur) => {
    const curRfqItemId = cur?.rfqItemId;
    const quoteListItem = quoteList[0];
    const findRfqItem = quoteListItem?.itemList?.filter(
      item => item.rfqItemId === curRfqItemId
    );
    const quoteItem = {
      ...cur,
      findRfqItem: findRfqItem?.length > 0 ? findRfqItem : null,
      quoteId: quoteListItem?.quoteId,
    };

    acc.push(quoteItem);
    return acc;
  }, []);
};

export const getFirstUrl = url => {
  const split = url.split("/");
  const filter = split.filter(item => item);
  return filter[0];
};

export const numberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getAllQueryString = search => {
  console.log("search >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", search);
  // const deleteQuestionMarkString = search.slice(1);

  // const value = deleteQuestionMarkString.split("&").reduce(
  //   (acc, cur) => {
  //     const keyValue = cur.split("=");
  //     const key = keyValue[0];
  //     const value = keyValue[1];

  //     if (key === "pageNo") {
  //       return { ...acc, pageNo: value };
  //     } else if (key === "sort") {
  //       return { ...acc, sort: value };
  //     } else if (key === "numPageItem") {
  //       return { ...acc, numPageItem: value };
  //     } else if (key !== "") {
  //       acc.search[`${key}`] = value;
  //     }
  //     return acc;
  //   },
  //   { search: {} }
  // );

  return search;
};

export const isEmptyObject = param => {
  if (!param) return false;
  return Object.keys(param).length === 0 && param.constructor === Object;
};

export const setSearchPageParams = props => {
  const { sort, pageNo, search, numPageItem } = props;
  return {
    sort: sort ? sort : 0,
    search: !isEmptyObject() ? JSON.stringify(search) : "{}",
    pageNo: pageNo ? pageNo - 1 : 0,
    numPageItem: numPageItem ? numPageItem : 10,
  };
};

export const getSearchPageParams = locationSearch => {
  const allQueryString = getAllQueryString(locationSearch);
  return setSearchPageParams(allQueryString);
};

export const getSearchParamsProcessingObj = locationSearch => {
  return locationSearch
    .slice(1)
    .split("&")
    .reduce((acc, cur) => {
      const keyValue = cur.split("=");
      const key = keyValue[0];
      const value = keyValue[1];
      if (!key) {
        return acc;
      }
      acc[`${key}`] = value;
      return acc;
    }, {});
};

export const sagaErrorToast = props => {
  const { t, i18nMiddleKey, retCode, key = null } = props;
  const { sagaKey, retCodeKey } = commonConfig.i18nKey;

  let lastKey = null;
  if (key === null) {
    lastKey = `${retCodeKey}${retCode}`;
  } else {
    lastKey = key;
  }
  const i18nCheck = i18n.exists(`${sagaKey}.${i18nMiddleKey}.${lastKey}`);
  if (i18nCheck) {
    toastUtils.errorToast(`${t(`${i18nMiddleKey}.${retCodeKey}${retCode}`)}`);
  }
};

export const isLogin = uid => {
  return uid !== -1 && uid;
};

export const showFooter = pathName => {
  return commonConfig.showFooterList.includes(pathName);
};

export const hideLnb = pathName => {
  return !commonConfig.hideLnbList.includes(pathName);
};
