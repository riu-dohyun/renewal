// const t = getFixedT(null, null, "commonReturnCode");

import url from "./url";

// export const media = {
//   breakPoint1920: "1920px",
//   breakPoint1680: "1680px",
//   breakPoint1440: "1440px",
//   breakPoint1200: "1200px",
//   breakPoint1024: "1024px",
//   breakPoint768: "768px",
//   breakPoint640: "640px",
//   breakPoint520: "520px",
//   breakPoint480: "480px",
//   breakPoint420: "420px",
// };
export const media = {
  breakPoint1920: 1920,
  breakPoint1680: 1680,
  breakPoint1440: 1440,
  breakPoint1200: 1200,
  breakPoint1024: 1024,
  breakPoint768: 768,
  breakPoint640: 640,
  breakPoint520: 520,
  breakPoint480: 480,
  breakPoint420: 420,
};

export const userType = {
  buyer: "buyer",
  supplier: "supplier",
};

export const asyncState = {
  execute: "execute",
  success: "success",
  failure: "failure",
};

export const defaultClass = {
  BasicButton: "BasicButton",
  BasicLink: "BasicLink",
  BasicInput: "BasicInput",
  BasicLabel: "BasicLabel",
};

export const resultType = {
  success: "success",
  failure: "failure",
};

export const statusType = {
  RFQ: "RFQ",
  QUOTE: "QUOTE",
  ORDER: "ORDER",
};

export const sizeUnitNumber = {
  inchesToCmConvert: 2.54,
};

export const retCodeType = {
  retCode_0: {
    result: resultType.success,
    message: null,
  },
  retCode_1: {
    result: resultType.failure,
    message: "ERROR CODE 1",
  },
  retCode_2: {
    result: resultType.failure,
    message: "ERROR CODE 2",
  },
  retCode_3: {
    result: resultType.failure,
    message: "check parameter",
  },
  retCode_4: {
    result: resultType.failure,
    message: "DB Error",
  },
  retCode_9: {
    result: resultType.failure,
    message: "Not allowed",
  },
  retCode_999: {
    result: resultType.failure,
    message: "not define error",
  },
  retCode_1001: {
    result: resultType.failure,
    message: "id, password error",
  },
  retCode_1002: {
    result: resultType.failure,
    message: "exists ID or deleted user",
  },
  retCode_1003: {
    result: resultType.failure,
    message: "no data",
  },
  retCode_4001: {
    result: resultType.failure,
    message: "Failed to send mail",
  },
};

export const createCategoryStep = {
  categoryStep: 1,
  subCategoryStep: 2,
  styleStep: 3,
  specificationStep: 4,
};

export const categoryDepth = {
  categoryDepth: 1,
  subCategoryDepth: 2,
  styleDepth: 3,
};

export const eachSpecFormName = {
  sizeUnit: "sizeUnit",
  sizeSpec: "sizeSpec",
  material: "material",
  materialWriteInput: "materialWriteInput",
  grammage: "grammage",
  wrappingPaper: "wrappingPaper",
  chipBoard: "chipBoard",
  printColor: "printColor",
  coating: "coating",
  finish: "finish",
  extras: "extras",
  printSurface: "printSurface",
  easyCut: "easyCut",
  zipper: "zipper",
};

export const commonSpecFormName = {
  notes: "notes",
  contents: "contents",
  itemName: "itemName",
  documents: "documents",
};

export const specFormName = {
  ...eachSpecFormName,
  ...commonSpecFormName,
};

export const specFormSizeSpecName = {
  Width: "Width",
  Length: "Length",
  Height: "Height",
  Bottom: "Bottom",
  "Top Width": "TopWidth",
  "Top Length": "TopLength",
  "Bottom Width": "BottomWidth",
  "Bottom Length": "BottomLength",
  "Bottom Height": "BottomHeight",
  "Upper Height": "UpperHeight",
  "Neck Height": "NeckHeight",
  "Roll Width": "RollWidth",
  "Roll Length": "RollLength",
  "Spout diameter": "SpoutDiameter",
};

export const fileUploadExtList = [
  "JPEG",
  "PNG",
  "JPG",
  "PDF",
  "AI",
  "PSD",
  "DXF",
  "XLSX",
  "XLS",
  "PPT",
  "DOCX",
  "ZIP",
  "PPTX",
];

export const developMode = process.env.NODE_ENV === "development";

export const pageShowCountList = [
  {
    index: 0,
    content: 10,
  },
  {
    index: 1,
    content: 20,
  },
  {
    index: 2,
    content: 40,
  },
  {
    index: 3,
    content: 80,
  },
  {
    index: 4,
    content: 100,
  },
];

export const pageShowCountDefaultValue = 10;

export const componentType = {
  packagingItem: {
    itemList: "itemList",
    requestItemList: "requestItemList",
  },
};

export const status = {
  RFQ: {
    status1000: {
      status: 1000,
      desc: "quoting",
    },
    status2000: {
      status: 2000,
      desc: "readyToOrder",
    },
    status9000: {
      status: 9000,
      desc: "ordered",
    },
    status9100: {
      status: 9100,
      desc: "declined",
    },
  },
  QUOTE: {
    status1000: {
      status: 1000,
      desc: "quoting",
    },
    status2000: {
      status: 2000,
      desc: "submitted",
    },
    status9000: {
      status: 9000,
      desc: "ordered",
    },
    status9100: {
      status: 9100,
      desc: "declined",
    },
    status9200: {
      status: 9200,
      desc: "unSubmitted",
    },
  },
  ORDER: {
    status1000: {
      status: 1000,
      desc: "Order received",
    },
  },
};

export const quoteCostType = [
  {
    index: 1,
    value: "Wooden pattern fee",
  },
  {
    index: 2,
    value: "Copperplate fee",
  },
  {
    index: 3,
    value: "Printing tooling fee",
  },
  {
    index: 4,
    value: "Flim tooling fee",
  },
];

export const i18nKey = {
  sagaKey: "saga",
  retCodeKey: "retCode",
};

if (!developMode) {
  // console.log = () => {};
  // console.error = () => {};
}

export const showFooterList = [
  url.home,
  url.service.privacyPolicy,
  url.service.termsOfUse,
];

export const hideLnbList = [
  url.home,
  url.service.privacyPolicy,
  url.service.termsOfUse,
];

export const country = {
  ko: "ko",
  usa: "usa",
  cn: "cn",
};
