import * as commonConfig from "src/config/common";

export const initialState = {
  // ANCHOR: PACKAGING CREATE
  // NOTE: 분류 선택하기
  categoryCode: null,
  subCategoryCode: null,
  styleCode: null,

  // NOTE: 분류 step
  /**
   * @step
   * 1 : category
   * 2 : subCategory
   * 3 : style
   * 4 : specification
   */
  step: commonConfig.createCategoryStep.categoryStep,

  // NOTE: specification state
  itemId: null,
  sizeUnit: null,
  sizeSpec: null,
  material: null,
  wrappingPaper: null,
  printColor: null,
  coating: null,
  finish: null,
  extras: null,
  printSurface: null,
  easyCut: null,
  zipper: null,

  // NOTE: specification common state
  notes: null,
  documents: null,
  contents: null,
  itemName: null,

  // NOTE: documents file state
  documentsList: null,
  fileList: [],
  documentsDownloadLink: null,
  documentsDownloadLinkFileName: null,

  // NOTE: create Item
  createItemId: null,

  // NOTE: 선택한 분류에 대한 specification
  selectedSpecification: null,
  selectedSpecificationDefault: null,

  // ANCHOR: PACKAGING LIST
  // NOTE: Item List
  packagingItemsTotalCount: null,
  packagingItems: [],
  packagingRequestItemsIndex: [],
  packagingRequestItems: [],

  // NOTE: Edit Item
  editSelectedItem: null,
  deleteItem: false,

  // ANCHOR: In-progress
  inProgressItems: [],
  inProgressTotalNum: null,

  // NOTE: 생산자 list
  supplierRecommendedList: [],
};

export const packagingReducer = {
  // ANCHOR: Async
  // NOTE: AWS File Upload Async
  awsFileUploadTrigger: () => {},
  // NOTE: set documentList
  setDocumentList: (state, action) => {
    state.documentsList = JSON.stringify(action.payload);
  },

  // NOTE: delete File Async
  awsFileDeleteTrigger: () => {},
  // NOTE: documentList update
  deleteDocumentList: (state, action) => {
    const parseDocumentsList = [...JSON.parse(state.documentsList)];
    parseDocumentsList.splice(action.payload, 1);
    state.documentsList = JSON.stringify(parseDocumentsList);
  },

  // NOTE: item create Async
  itemCreateTrigger: () => {},
  itemCreateSuccess: (state, action) => {
    state.createItemId = action.payload;
  },
  itemUpdateTrigger: () => {},
  itemUpdateSuccess: (state, action) => {
    state.packagingItems = state.packagingItems.map(item => {
      if (item.itemId === action.payload.itemId) {
        return {
          ...item,
          itemName: action.payload.itemName,
          notes: action.payload.notes,
          contents: action.payload.contents,
          documents: JSON.parse(action.payload.documents),
          spec: JSON.parse(action.payload.spec),
        };
      }

      return item;
    });
  },

  itemDeleteTrigger: () => {},
  itemDeleteSuccess: state => {
    state.deleteItem = true;
  },

  // NOTE: Packaging Item List
  getPackagingItemListTrigger: () => {},
  getPackagingItemListSuccess: (state, action) => {
    state.packagingItemsTotalCount = action.payload.packagingItemsTotalCount;
    state.packagingItems = action.payload.packagingItems;
    state.packagingRequestItemsIndex = [];
    state.packagingRequestItems = [];
  },

  // NOTE: Packaging Item request
  createPackagingItemRequestTrigger: () => {},
  createPackagingItemRequestSuccess: () => {},

  // NOTE: Packaging Item request List
  getPackagingItemRequestListTrigger: () => {},
  getPackagingItemRequestListSuccess: (state, action) => {
    state.inProgressItems = action.payload.rfqList;
    state.inProgressTotalNum = action.payload.totalNum;
  },

  // NOTE: Get Packaging documents download Link
  getPackagingItemDocumentsDownloadLinkTrigger: () => {},
  getPackagingItemDocumentsDownloadLinkSuccess: (state, action) => {
    state.documentsDownloadLink = action.payload.presignedUrl;
    state.documentsDownloadLinkFileName = action.payload.fileName;
  },
  initPackagingItemDocumentsDownloadLinkList: state => {
    state.documentsDownloadLink = null;
  },

  // 추천 생상자 조회
  getSupplierRecommendedListTrigger: () => {},
  getSupplierRecommendedListSuccess: (state, action) => {
    state.supplierRecommendedList = action.payload;
  },
  initSupplierRecommendedList: state => {
    state.supplierRecommendedList = [];
  },

  sendRfqEmailTrigger: () => {},
  sendRfqEmailSuccess: () => {},

  // SECTION: -------------

  // ANCHOR: Sync
  // NOTE: 초기화
  initial: () => initialState,
  // NOTE: 카테고리 & 스텝 설정
  setCategory: (state, action) => {
    state.categoryCode = action.payload;
  },
  // NOTE: 서브 카테고리 & 스텝 설정
  setSubCategory: (state, action) => {
    state.subCategoryCode = action.payload;
  },
  // NOTE: 스타일 & 스텝 설정
  setStyle: (state, action) => {
    state.styleCode = action.payload;
  },
  // NOTE: 옵션 & 스텝 설정
  setSpecification: (state, action) => {
    state.selectedSpecification = action.payload.specification;
    state.selectedSpecificationDefault = action.payload.defaultSpecification;
  },
  // NOTE: item id 설정
  setItemId: (state, action) => {
    state.itemId = action.payload;
  },
  // NOTE: 스텝 설정
  setStep: (state, action) => {
    state.step = action.payload.step;
    state.categoryCode = action.payload.categoryCode;
    state.subCategoryCode = action.payload.subCategoryCode;
    state.styleCode = action.payload.styleCode;
  },
  // NOTE: 카테고리 및 옵션 초기화 & 스텝 초기화
  setInitSpecificationAndCategory: state => {
    // NOTE: 분류 선택하기
    state.categoryCode = null;
    state.subCategoryCode = null;
    state.styleCode = null;
    // NOTE: 분류 step
    state.step = commonConfig.createCategoryStep.categoryStep;
    // NOTE: specification state
    state.itemId = null;
    state.sizeUnit = null;
    state.sizeSpec = null;
    state.material = null;
    state.wrappingPaper = null;
    state.printColor = null;
    state.coating = null;
    state.finish = null;
    state.extras = null;
    state.printSurface = null;
    state.easyCut = null;
    state.zipper = null;
    // NOTE: specification common state
    state.notes = null;
    state.documents = null;
    state.contents = null;
    state.itemName = null;
    // NOTE: Edit Item
    state.editSelectedItem = null;
    state.deleteItem = false;
  },
  // NOTE: Category Default Value Setting
  setDefaultInit: (state, action) => {
    state.sizeUnit = action.payload.sizeUnit;
    state.sizeSpec = action.payload.sizeSpec;
    state.material = action.payload.material;
    state.wrappingPaper = action.payload.wrappingPaper;
    state.printColor = action.payload.printColor;
    state.coating = action.payload.coating;
    state.finish = action.payload.finish;
    state.extras = action.payload.extras;
    state.printSurface = action.payload.printSurface;
    state.easyCut = action.payload.easyCut;
    state.zipper = action.payload.zipper;
  },

  setEditSelectedItem: (state, action) => {
    state.editSelectedItem = action.payload;
  },

  setPackagingRequestSelectedItemIndex: (state, action) => {
    state.packagingRequestItemsIndex = action.payload;
  },
  setPackagingRequestSelectedItem: (state, action) => {
    state.packagingRequestItems = action.payload;
  },

  initPackagingRequestSelectedItem: state => {
    state.packagingRequestItemsIndex = [];
    state.packagingRequestItems = [];
  },
};
