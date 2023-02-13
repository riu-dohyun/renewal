import * as categoryImage from "src/assets/category";
import * as size from "src/assets/size";
import * as style from "src/assets/style";
import * as subCategoryImage from "src/assets/subCategory";
import * as commonConfig from "src/config/common";
import * as specString from "./specification";
import { allSpec } from "./specification";

export const category = [
  {
    name: "Box",
    depth: commonConfig.categoryDepth.categoryDepth,
    order: 0,
    code: 0,
    image: categoryImage.Category_0,
    specificationDefault: {
      sizeUnit: {
        index: 0,
        content: specString.sizeUnitOnInches,
      },
      wrappingPaper: {
        index: 0,
        content: specString.wrappingPaperOnGlossCoatedPaper,
      },
      material: {
        index: 0,
        content: specString.materialOnSc,
      },
      printColor: {
        index: 3,
        content: specString.printColorOnFourColor,
      },
      coating: {
        index: 0,
        content: specString.coatingOnVarnish,
      },
      finish: {
        index: 0,
        content: specString.finishOnMatte,
      },
    },
    list: [
      {
        name: "Folding carton",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 0,
        code: 0,
        image: subCategoryImage.SubCategory_0_0,
        list: [
          {
            name: "Reverse Tuck End",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 0,
            code: 0,
            image: style.Style_0_0_0,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[0] },
              material: { ...allSpec.material[0] },
              sizeImage: size.Size_0_0_0,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
          {
            // FIXME: image && size image 수정해야함
            name: "Straight Tuck End",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 1,
            code: 1,
            image: style.Style_0_0_2,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[0] },
              material: { ...allSpec.material[0] },
              sizeImage: size.Size_0_0_2,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
          {
            name: "Auto Bottom",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 2,
            code: 2,
            image: style.Style_0_0_2,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[0] },
              material: { ...allSpec.material[0] },
              sizeImage: size.Size_0_0_2,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
          {
            name: "Snap Lock",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 3,
            code: 3,
            image: style.Style_0_0_3,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[0] },
              material: { ...allSpec.material[0] },
              sizeImage: size.Size_0_0_3,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
        ],
      },
      {
        name: "Mailer boxes",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 1,
        code: 1,
        image: subCategoryImage.SubCategory_0_1,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[0] },
          material: { ...allSpec.material[0] },
          sizeImage: size.Size_0_1,
          printColor: { ...allSpec.printColor[0] },
          coating: { ...allSpec.coating[0] },
          finish: { ...allSpec.finish[0] },
          extras: { ...allSpec.extras[0] },
        },
      },
      {
        name: "Sleeve",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 2,
        code: 2,
        image: subCategoryImage.SubCategory_0_2,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[1] },
          material: { ...allSpec.material[0] },
          sizeImage: size.Size_0_2,
          printColor: { ...allSpec.printColor[0] },
          coating: { ...allSpec.coating[0] },
          finish: { ...allSpec.finish[0] },
          extras: { ...allSpec.extras[0] },
        },
      },
      {
        name: "Tray",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 3,
        code: 3,
        image: subCategoryImage.SubCategory_0_3,
        list: [
          {
            name: "Without lid",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 0,
            code: 0,
            image: style.Style_0_3_0,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[1] },
              material: { ...allSpec.material[0] },
              sizeImage: size.Size_0_3_0,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
          {
            name: "With lid",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 1,
            code: 1,
            image: style.Style_0_3_1,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[1] },
              material: { ...allSpec.material[0] },
              sizeImage: size.Size_0_3_1,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
        ],
      },
      {
        name: "Rigid boxes",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 4,
        code: 4,
        image: subCategoryImage.SubCategory_0_4,
        list: [
          {
            name: "Standard Cover",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 0,
            code: 0,
            image: style.Style_0_4_0,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[2] },
              wrappingPaper: { ...allSpec.wrappingPaper[0] },
              sizeImage: size.Size_0_4_0,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
          {
            name: "Shoulder and Neck",
            depth: commonConfig.categoryDepth.styleDepth,
            order: 1,
            code: 1,
            image: style.Style_0_4_1,
            specification: {
              sizeUnit: { ...allSpec.sizeUnit[0] },
              sizeSpec: { ...allSpec.sizeSpec[3] },
              wrappingPaper: { ...allSpec.wrappingPaper[0] },
              sizeImage: size.Size_0_4_1,
              printColor: { ...allSpec.printColor[0] },
              coating: { ...allSpec.coating[0] },
              finish: { ...allSpec.finish[0] },
              extras: { ...allSpec.extras[0] },
            },
          },
        ],
      },
    ],
  },
  {
    name: "Pouch",
    depth: commonConfig.categoryDepth.categoryDepth,
    order: 1,
    code: 1,
    image: categoryImage.Category_1,
    specificationDefault: {
      sizeUnit: {
        index: 0,
        content: specString.sizeUnitOnInches,
      },
      material: {
        index: 0,
        content: specString.materialOnPetLldpe,
      },
      printColor: {
        index: 5,
        content: specString.printColorOnSixColor,
      },
      printSurface: {
        index: 2,
        content: specString.printSurfaceOnFullGloss,
      },
      easyCut: {
        index: 0,
        content: specString.easyCutOnYes,
      },
      zipper: {
        index: 0,
        content: specString.zipperOnNone,
      },
    },
    list: [
      {
        name: "Stick pouch",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 0,
        code: 0,
        image: subCategoryImage.SubCategory_1_0,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[4] },
          material: { ...allSpec.material[1] },
          sizeImage: size.Size_1_0,
          printColor: { ...allSpec.printColor[1] },
          printSurface: { ...allSpec.printSurface[0] },
          easyCut: { ...allSpec.easyCut[0] },
        },
      },
      {
        name: "Flat pouch",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 1,
        code: 1,
        image: subCategoryImage.SubCategory_1_1,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[4] },
          material: { ...allSpec.material[1] },
          sizeImage: size.Size_1_1,
          printColor: { ...allSpec.printColor[1] },
          printSurface: { ...allSpec.printSurface[0] },
          zipper: { ...allSpec.zipper[0] },
        },
      },
      {
        name: "Stand-up pouch",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 2,
        code: 2,
        image: subCategoryImage.SubCategory_1_2,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[5] },
          material: { ...allSpec.material[1] },
          sizeImage: size.Size_1_2,
          printColor: { ...allSpec.printColor[1] },
          printSurface: { ...allSpec.printSurface[0] },
          zipper: { ...allSpec.zipper[0] },
        },
      },
      {
        name: "Flat Bottom pouch",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 3,
        code: 3,
        image: subCategoryImage.SubCategory_1_3,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[5] },
          material: { ...allSpec.material[1] },
          sizeImage: size.Size_1_3,
          printColor: { ...allSpec.printColor[1] },
          printSurface: { ...allSpec.printSurface[0] },
          zipper: { ...allSpec.zipper[0] },
        },
      },
      {
        name: "Spouted pouch",
        depth: commonConfig.categoryDepth.subCategoryDepth,
        order: 4,
        code: 4,
        image: subCategoryImage.SubCategory_1_4,
        list: [],
        specification: {
          sizeUnit: { ...allSpec.sizeUnit[0] },
          sizeSpec: { ...allSpec.sizeSpec[6] },
          material: { ...allSpec.material[1] },
          sizeImage: size.Size_1_4,
          printColor: { ...allSpec.printColor[1] },
          printSurface: { ...allSpec.printSurface[0] },
        },
      },
    ],
  },
];