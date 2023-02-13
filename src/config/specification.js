// string 변수화

import { eachSpecFormName } from "./common";

export const typeOnInput = "input";
export const typeOnSelect = "select";
export const typeOnRadio = "radio";
export const typeOnCheckBox = "checkbox";

export const sizeUnitOnInches = "inches";
export const sizeUnitOnCentimeter = "cm";
export const sizeUnitOnMillimeter = "mm";

export const sizeSpecOnWidth = "Width";
export const sizeSpecOnLength = "Length";
export const sizeSpecOnHeight = "Height";
export const sizeSpecOnBottom = "Bottom";
export const sizeSpecOnTopWidth = "Top Width";
export const sizeSpecOnTopLength = "Top Length";
export const sizeSpecOnBottomWidth = "Bottom Width";
export const sizeSpecOnBottomLength = "Bottom Length";
export const sizeSpecOnBottomHeight = "Bottom Height";
export const sizeSpecOnUpperHeight = "Upper Height";
export const sizeSpecOnNeckHeight = "Neck Height";
export const sizeSpecOnRollWidth = "Roll Width";
export const sizeSpecOnRollLength = "Roll Length";
export const sizeSpecOnSpoutDiameter = "Spout diameter";

export const guideOnMaterialSc =
  "White on the front, gray on the back, single-sided printing available, affordable";
export const guideOnMaterialIv =
  "Double-sided white, higher strength than SC and excellent printability";
export const guideOnMaterialRiv =
  "Double-sided white, elasticity, durability, excellent printability, high-quality paper";
export const guideOnMaterialCcp =
  "Double-sided white, transparent gloss, smooth and resilient, excellent printability, high-quality paper";
export const guideOnMaterialFbbAllKing =
  "Used as Riv replacement, High Bulk Board, with a thickness of about 20% higher than that of RIV";
export const guideOnWrappingGlossCoatedPaper =
  "Glossy surface, suitable for vivid color printing";
export const guideOnWrappingMatteCoatedPaper =
  "Matte surface, suitable for fine print";
export const guideOnMaterialPetLldpe = "Commonly Used Transparent Pouches";
export const guideOnMaterialPetAlLldpe =
  "Excellent protection against oxygen, moisture and light (Powders, etc.)";
export const guideOnMaterialPetAlNyLldpe =
  "Excellent adhesion and impact strength to prevent leakage of liquid (Beverage, etc.)";
export const guideOnMaterialPetAlNyCpp =
  "High temperature sterilization, blocking oxygen and humidity, excellent heat resistance and durability (Food, etc.)";
export const guideOnMaterialPetAlNyCpr =
  "High temperature sterilization, blocking oxygen and humidity, excellent heat resistance and durability (Retort, etc.)";
export const guideOnMaterialPetNyLldpe =
  "Excellent cold resistance, impact resistance, printability (Chilled and Frozen Foods, etc.)";
export const guideOnMaterialPetVmpetLldpe =
  "Can block oxygen/moisture/light for a short time (Confectionery, etc.)";
export const guideOnMaterialKraftVmpetLldpe =
  "Can block oxygen/moisture/light for a short time (Coffee beans, etc.)";
export const guideOnMaterialNyLldpe =
  "Excellent cold resistance, impact resistance (Chilled and Frozen Foods, etc.)";
export const guideOnMaterialOppCpp =
  "Use high transparency film (Dried food, ice cream, etc.)";

export const grammageOn270g = "270g";
export const grammageOn295g = "295g";
export const grammageOn300g = "300g";
export const grammageOn325g = "325g";
export const grammageOn350g = "350g";
export const grammageOn400g = "400g";

export const materialOnSc = "SC";
export const materialOnIv = "IV";
export const materialOnRiv = "RIV";
export const materialOnCcp = "CCP";
export const materialOnFbbAllKing = "FBB-Aliking";
export const materialOnPetLldpe = "PET + LLDPE";
export const materialOnPetAlLldpe = "PET + AL + LLDPE";
export const materialOnPetAlNyLldpe = "PET + AL + NY + LLDPE";
export const materialOnPetAlNyCpp = "PET + AL + NY + CPP";
export const materialOnPetAlNyCpr = "PET + AL + NY + CPR";
export const materialOnPetNyLldpe = "PET + NY + LLDPE";
export const materialOnPetVmpetLldpe = "PET + VMPET + LLDPE";
export const materialOnKraftVmpetLldpe = "Kraft + VMPET + LLDPE";
export const materialOnNyLldpe = "NY + LLDPE";
export const materialOnOppCpp = "OPP + CPP";
export const materialOnEnterASpecificMaterial = "Enter a specific material";

export const chipBoardOnWhite1000g = "White(1000g)";
export const chipBoardOnWhite1200g = "White(1200g)";
export const chipBoardOnBlack1000g = "Black(1000g)";
export const chipBoardOnBlack1200g = "Black(1200g)";

export const wrappingPaperOnGlossCoatedPaper = "Gloss coated paper";
export const wrappingPaperOnMatteCoatedPaper = "Matte coated paper";

export const printColorOnSingular = "color";
export const printColorOnPlural = "colors";
export const printColorOnOneColor = `1 ${printColorOnSingular}`;
export const printColorOnTwoColor = `2 ${printColorOnPlural}`;
export const printColorOnThreeColor = `3 ${printColorOnPlural}`;
export const printColorOnFourColor = `4 ${printColorOnPlural}`;
export const printColorOnFiveColor = `5 ${printColorOnPlural}`;
export const printColorOnSixColor = `6 ${printColorOnPlural}`;
export const printColorOnSevenColor = `7 ${printColorOnPlural}`;
export const printColorOnEightColor = `8 ${printColorOnPlural}`;
export const printColorOnNineColor = `9 ${printColorOnPlural}`;
export const printColorOnTenColor = `10 ${printColorOnPlural}`;
export const printColorOnNoneColor = `None`;

export const coatingOnVarnish = "Varnish";
export const coatingOnLamination = "Lamination";

export const finishOnMatte = "Matte";
export const finishOnGlossy = "Glossy";
export const finishOnSatin = "Satin";
export const finishOnSoftTouch = "Soft touch";

export const extrasOnSpotUv = "Spot Uv";
export const extrasOnEmbossing = "Embossing";
export const extrasOnDebossing = "Debossing";
export const extrasOnFoilStamping = "Foil stamping";

export const printSurfaceOnFullMatte = "Full matte";
export const printSurfaceOnPartialMatte = "Partial matte";
export const printSurfaceOnFullGloss = "Full gloss";

export const easyCutOnYes = "Yes";
export const easyCutOnNo = "No";

export const zipperOnNone = "None";
export const zipperOnNormalZipper = "Normal zipper";
export const zipperOnPocketZipper = "Pocket zipper";
export const zipperOnDoubleZipper = "Double zipper";
export const zipperOnSliceZipper = "Slice zipper";

// 공통(중복) spec
export const commonSpec = {
  printColorList: [
    { index: 0, order: 0, content: printColorOnOneColor },
    { index: 1, order: 1, content: printColorOnTwoColor },
    { index: 2, order: 2, content: printColorOnThreeColor },
    { index: 3, order: 3, content: printColorOnFourColor },
    { index: 4, order: 4, content: printColorOnFiveColor },
    { index: 5, order: 5, content: printColorOnSixColor },
    { index: 6, order: 6, content: printColorOnSevenColor },
  ],
};

// spec list ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

export const sizeUnit = [
  {
    sizeUnitId: 0,
    type: typeOnRadio,
    list: [
      { index: 0, order: 0, content: sizeUnitOnInches },
      { index: 1, order: 1, content: sizeUnitOnCentimeter },
    ],
  },
];

export const sizeSpec = [
  {
    type: typeOnInput,
    sizeId: 1,
    list: [
      { index: 0, order: 0, content: sizeSpecOnWidth },
      { index: 1, order: 1, content: sizeSpecOnLength },
      { index: 2, order: 2, content: sizeSpecOnHeight },
    ],
  },
  {
    type: typeOnInput,
    sizeId: 2,
    list: [
      { index: 0, order: 0, content: sizeSpecOnTopWidth },
      { index: 1, order: 1, content: sizeSpecOnTopLength },
      { index: 2, order: 2, content: sizeSpecOnBottomWidth },
      { index: 3, order: 3, content: sizeSpecOnBottomLength },
      { index: 4, order: 4, content: sizeSpecOnHeight },
    ],
  },
  {
    type: typeOnInput,
    sizeId: 3,
    list: [
      { index: 0, order: 0, content: sizeSpecOnWidth },
      { index: 1, order: 1, content: sizeSpecOnLength },
      { index: 2, order: 2, content: sizeSpecOnUpperHeight },
      { index: 3, order: 3, content: sizeSpecOnBottomHeight },
    ],
  },
  {
    type: typeOnInput,
    sizeId: 4,
    list: [
      { index: 0, order: 0, content: sizeSpecOnWidth },
      { index: 1, order: 1, content: sizeSpecOnLength },
      { index: 2, order: 2, content: sizeSpecOnUpperHeight },
      { index: 3, order: 3, content: sizeSpecOnNeckHeight },
    ],
  },
  {
    type: typeOnInput,
    sizeId: 5,
    list: [
      { index: 0, order: 0, content: sizeSpecOnRollWidth },
      { index: 1, order: 1, content: sizeSpecOnRollLength },
      { index: 2, order: 2, content: sizeSpecOnWidth },
      { index: 3, order: 3, content: sizeSpecOnLength },
    ],
  },
  {
    type: typeOnInput,
    sizeId: 6,
    list: [
      { index: 0, order: 0, content: sizeSpecOnWidth },
      { index: 1, order: 1, content: sizeSpecOnLength },
      { index: 2, order: 2, content: sizeSpecOnBottom },
    ],
  },
  {
    type: typeOnInput,
    sizeId: 7,
    list: [
      { index: 0, order: 0, content: sizeSpecOnWidth },
      { index: 1, order: 1, content: sizeSpecOnLength },
      { index: 2, order: 2, content: sizeSpecOnBottom },
      {
        index: 3,
        content: sizeSpecOnSpoutDiameter,
        type: typeOnSelect,
        list: [
          { index: 0, order: 0, content: 7 },
          { index: 1, order: 1, content: 9, default: true },
          { index: 2, order: 2, content: 12 },
          { index: 3, order: 3, content: 15 },
          { index: 4, order: 4, content: 18 },
          { index: 5, order: 5, content: 24 },
          { index: 6, order: 6, content: 28 },
          { index: 7, order: 7, content: 32 },
        ],
        unit: sizeUnitOnMillimeter,
      },
    ],
  },
];

export const guide = [
  {
    guideId: 0,
    content: materialOnSc,
    desc: guideOnMaterialSc,
  },
  {
    guideId: 1,
    content: materialOnIv,
    desc: guideOnMaterialIv,
  },
  {
    guideId: 2,
    content: materialOnRiv,
    desc: guideOnMaterialRiv,
  },
  {
    guideId: 3,
    content: materialOnCcp,
    desc: guideOnMaterialCcp,
  },
  {
    guideId: 4,
    content: materialOnFbbAllKing,
    desc: guideOnMaterialFbbAllKing,
  },
  {
    guideId: 5,
    content: wrappingPaperOnGlossCoatedPaper,
    desc: guideOnWrappingGlossCoatedPaper,
  },
  {
    guideId: 6,
    content: wrappingPaperOnMatteCoatedPaper,
    desc: guideOnWrappingMatteCoatedPaper,
  },
  {
    guideId: 7,
    content: materialOnPetLldpe,
    desc: guideOnMaterialPetLldpe,
  },
  {
    guideId: 8,
    content: materialOnPetAlLldpe,
    desc: guideOnMaterialPetAlLldpe,
  },
  {
    guideId: 9,
    content: materialOnPetAlNyLldpe,
    desc: guideOnMaterialPetAlNyLldpe,
  },
  {
    guideId: 10,
    content: materialOnPetAlNyCpp,
    desc: guideOnMaterialPetAlNyCpp,
  },
  {
    guideId: 11,
    content: materialOnPetAlNyCpr,
    desc: guideOnMaterialPetAlNyCpr,
  },
  {
    guideId: 12,
    content: materialOnPetNyLldpe,
    desc: guideOnMaterialPetNyLldpe,
  },
  {
    guideId: 13,
    content: materialOnPetVmpetLldpe,
    desc: guideOnMaterialPetVmpetLldpe,
  },
  {
    guideId: 14,
    content: materialOnKraftVmpetLldpe,
    desc: guideOnMaterialKraftVmpetLldpe,
  },
  {
    guideId: 15,
    content: materialOnNyLldpe,
    desc: guideOnMaterialNyLldpe,
  },
  {
    guideId: 16,
    content: materialOnOppCpp,
    desc: guideOnMaterialOppCpp,
  },
];

export const grammage = [
  {
    type: typeOnSelect,
    grammageId: 0,
    name: eachSpecFormName.grammage,
    list: [
      { index: 0, order: 0, content: grammageOn300g },
      { index: 1, order: 1, content: grammageOn350g },
      { index: 2, order: 2, content: grammageOn400g },
    ],
  },
  {
    type: typeOnSelect,
    grammageId: 1,
    name: eachSpecFormName.grammage,
    list: [
      { index: 0, order: 0, content: grammageOn350g },
      { index: 1, order: 1, content: grammageOn400g },
    ],
  },
  {
    type: typeOnSelect,
    grammageId: 2,
    name: eachSpecFormName.grammage,
    list: [
      { index: 0, order: 0, content: grammageOn270g },
      { index: 1, order: 1, content: grammageOn295g },
      { index: 2, order: 2, content: grammageOn325g },
    ],
  },
];

export const material = [
  {
    type: typeOnSelect,
    materialId: 0,
    list: [
      {
        index: 0,
        order: 0,
        content: materialOnSc,
        guide: { ...guide[0] },
        selectedList: { ...grammage[0], defaultValue: grammageOn350g },
      },
      {
        index: 1,
        order: 1,
        content: materialOnIv,
        guide: { ...guide[1] },
        selectedList: { ...grammage[0], defaultValue: grammageOn350g },
      },
      {
        index: 2,
        order: 2,
        content: materialOnRiv,
        guide: { ...guide[2] },
        selectedList: { ...grammage[0], defaultValue: grammageOn350g },
      },
      {
        index: 3,
        order: 3,
        content: materialOnCcp,
        guide: { ...guide[3] },
        selectedList: { ...grammage[1], defaultValue: grammageOn350g },
      },
      {
        index: 4,
        order: 4,
        content: materialOnFbbAllKing,
        guide: { ...guide[4] },
        selectedList: { ...grammage[2], defaultValue: grammageOn295g },
      },
    ],
  },
  {
    type: typeOnSelect,
    materialId: 1,
    list: [
      {
        index: 0,
        order: 0,
        content: materialOnPetLldpe,
        guide: { ...guide[7] },
      },
      {
        index: 1,
        order: 1,
        content: materialOnPetAlLldpe,
        guide: { ...guide[8] },
      },
      {
        index: 2,
        order: 2,
        content: materialOnPetAlNyLldpe,
        guide: { ...guide[9] },
      },
      {
        index: 3,
        order: 3,
        content: materialOnPetAlNyCpp,
        guide: { ...guide[10] },
      },
      {
        index: 4,
        order: 4,
        content: materialOnPetAlNyCpr,
        guide: { ...guide[11] },
      },
      {
        index: 5,
        order: 5,
        content: materialOnPetNyLldpe,
        guide: { ...guide[12] },
      },
      {
        index: 6,
        order: 6,
        content: materialOnPetVmpetLldpe,
        guide: { ...guide[13] },
      },
      {
        index: 7,
        order: 7,
        content: materialOnKraftVmpetLldpe,
        guide: { ...guide[14] },
      },
      {
        index: 8,
        order: 8,
        content: materialOnNyLldpe,
        guide: { ...guide[15] },
      },
      {
        index: 9,
        order: 9,
        content: materialOnOppCpp,
        guide: { ...guide[16] },
      },
      {
        index: 10,
        order: 10,
        content: materialOnEnterASpecificMaterial,
        guide: {},
        selectedOpenInput: true,
      },
    ],
  },
];

export const chipBoard = [
  {
    type: typeOnSelect,
    chipBoardId: 0,
    name: eachSpecFormName.chipBoard,
    list: [
      { index: 0, order: 0, content: chipBoardOnWhite1000g },
      { index: 1, order: 1, content: chipBoardOnWhite1200g },
      { index: 2, order: 2, content: chipBoardOnBlack1000g },
      { index: 3, order: 3, content: chipBoardOnBlack1200g },
    ],
  },
];

export const wrappingPaper = [
  {
    type: typeOnSelect,
    wrappingPaperId: 0,
    list: [
      {
        index: 0,
        order: 0,
        content: wrappingPaperOnGlossCoatedPaper,
        guide: { ...guide[5] },
        selectedList: { ...chipBoard[0], defaultValue: chipBoardOnWhite1200g },
      },
      {
        index: 1,
        order: 1,
        content: wrappingPaperOnMatteCoatedPaper,
        guide: { ...guide[6] },
        selectedList: { ...chipBoard[0], defaultValue: chipBoardOnWhite1200g },
      },
    ],
  },
];

export const printColor = [
  {
    type: typeOnSelect,
    printColorId: 0,
    list: [
      ...commonSpec.printColorList,
      { index: 7, order: 7, content: printColorOnNoneColor },
    ],
  },
  {
    type: typeOnSelect,
    printColorId: 1,
    list: [
      ...commonSpec.printColorList,
      { index: 7, order: 7, content: printColorOnEightColor },
      { index: 8, order: 8, content: printColorOnNineColor },
      { index: 9, order: 9, content: printColorOnTenColor },
      { index: 10, order: 10, content: printColorOnNoneColor },
    ],
  },
];

export const coating = [
  {
    coatingId: 0,
    type: typeOnRadio,
    list: [
      { index: 0, order: 0, content: coatingOnVarnish },
      { index: 1, order: 1, content: coatingOnLamination },
    ],
  },
];

export const finish = [
  {
    type: typeOnRadio,
    finishId: 0,
    list: [
      { index: 0, order: 0, content: finishOnMatte },
      { index: 1, order: 1, content: finishOnGlossy },
      { index: 2, order: 2, content: finishOnSatin },
      { index: 3, order: 3, content: finishOnSoftTouch },
    ],
  },
];

export const extras = [
  {
    type: typeOnCheckBox,
    extrasId: 0,
    list: [
      { index: 0, order: 0, content: extrasOnSpotUv },
      { index: 1, order: 1, content: extrasOnEmbossing },
      { index: 2, order: 2, content: extrasOnDebossing },
      { index: 3, order: 3, content: extrasOnFoilStamping },
    ],
  },
];

export const printSurface = [
  {
    type: typeOnRadio,
    printSurfaceId: 0,
    list: [
      { index: 0, order: 0, content: printSurfaceOnFullMatte },
      { index: 1, order: 1, content: printSurfaceOnPartialMatte },
      { index: 2, order: 2, content: printSurfaceOnFullGloss },
    ],
  },
];

export const easyCut = [
  {
    type: typeOnRadio,
    easyCutId: 0,
    list: [
      { index: 0, order: 0, content: easyCutOnYes },
      { index: 1, order: 1, content: easyCutOnNo },
    ],
  },
];

export const zipper = [
  {
    type: typeOnRadio,
    zipperId: 0,
    list: [
      { index: 0, order: 0, content: zipperOnNone },
      { index: 1, order: 1, content: zipperOnNormalZipper },
      { index: 2, order: 2, content: zipperOnPocketZipper },
      { index: 3, order: 3, content: zipperOnDoubleZipper },
      { index: 4, order: 4, content: zipperOnSliceZipper },
    ],
  },
];

export const allSpec = {
  sizeUnit: [...sizeUnit],
  sizeSpec: [...sizeSpec],
  material: [...material],
  wrappingPaper: [...wrappingPaper],
  printColor: [...printColor],
  coating: [...coating],
  finish: [...finish],
  extras: [...extras],
  printSurface: [...printSurface],
  easyCut: [...easyCut],
  zipper: [...zipper],
};
