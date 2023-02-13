import { createSlice } from "@reduxjs/toolkit";
import { initialState, packagingReducer } from "./reducer/packaging.reducer";

export const packagingSlice = createSlice({
  name: "packaging",
  initialState: initialState,
  reducers: packagingReducer,
});

export const {
  // ANCHOR: Async
  awsFileUploadTrigger,
  setDocumentList,
  awsFileDeleteTrigger,
  deleteDocumentList,
  itemCreateTrigger,
  itemCreateSuccess,
  itemUpdateTrigger,
  itemUpdateSuccess,
  itemDeleteTrigger,
  itemDeleteSuccess,
  getPackagingItemListTrigger,
  getPackagingItemListSuccess,
  createPackagingItemRequestTrigger,
  createPackagingItemRequestSuccess,
  getPackagingItemRequestListTrigger,
  getPackagingItemRequestListSuccess,
  getPackagingItemDocumentsDownloadLinkTrigger,
  getPackagingItemDocumentsDownloadLinkSuccess,
  initPackagingItemDocumentsDownloadLinkList,
  getSupplierRecommendedListTrigger,
  getSupplierRecommendedListSuccess,
  initSupplierRecommendedList,
  sendRfqEmailTrigger,
  sendRfqEmailSuccess,

  // ANCHOR: Sync
  initial,
  setCategory,
  setSubCategory,
  setStyle,
  setItemId,
  setSpecification,
  setStep,
  setInitSpecificationAndCategory,
  setDefaultInit,
  setEditSelectedItem,
  setPackagingRequestSelectedItem,
  setPackagingRequestSelectedItemIndex,
  initPackagingRequestSelectedItem,
} = packagingSlice.actions;

export default packagingSlice.reducer;
