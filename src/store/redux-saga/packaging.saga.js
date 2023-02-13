import { getFixedT } from "i18next";
import { call, put, takeLatest } from "redux-saga/effects";
import * as commonConfig from "src/config/common";
import url from "src/config/url";
import * as packagingApi from "src/store/api/packaging";
import * as commonAction from "src/store/common.store";
import * as packagingActions from "src/store/packaging.store";
import * as commonUtils from "src/utils/commonUtils";
import * as toastUtils from "src/utils/toastUtils";

const t = getFixedT(null, null, commonConfig.i18nKey.sagaKey);

// NOTE: AWS File Upload Info saga
function* awsFileUploadInfoSaga(action) {
  const i18nMiddleKey = "awsFileUploadInfo";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const { files, documentsList, uid } = action.payload;
      const fileList = documentsList ? documentsList : [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const fileType = file.type;
        // NOTE: get signed url
        const signedUrlInfo = yield call(packagingApi.getAwsPutSignedUrlApi, {
          uid,
        });
        const { resData: signedUrlResData, retCode: signedUrlRetCode } =
          yield commonUtils.getResponseData(signedUrlInfo);
        if (signedUrlRetCode !== 0) {
          continue;
        }
        const { fileKey, presignedUrl } = signedUrlResData;

        // NOTE: aws file upload
        yield call(packagingApi.awsFileUploadApi, {
          file,
          fileType,
          presignedUrl,
        });

        const obj = {
          fileName: file.name,
          fileKey,
          uid,
        };

        // FIXME: fileId 받아서 json stringify 처리 하기
        const fileIdInfo = yield call(packagingApi.awsFileUploadInfoApi, obj);

        const { resData, retCode } = yield commonUtils.getResponseData(
          fileIdInfo
        );

        if (retCode !== 0) {
          yield toastUtils.errorToast(t(`${i18nMiddleKey}.fileUploadError`));
          return 0;
        }
        const deepCopyObj = { ...obj };
        yield delete deepCopyObj.uid;
        const fileIdObj = {
          ...deepCopyObj,
          fileId: resData.fileId,
        };

        yield fileList.push(fileIdObj);
        yield put({
          type: packagingActions.setDocumentList,
          payload: fileList,
        });
      }
      return { retCode: 0 };
    },
    errorMessage: "server error",
  });
}

export function* watchAwsFileUploadInfo() {
  yield takeLatest(
    packagingActions.awsFileUploadTrigger,
    awsFileUploadInfoSaga
  );
}

// NOTE: AWS file delete saga
function* awsFileDeleteSaga(action) {
  const i18nMiddleKey = "awsFileDelete";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const awsFileDeleteInfo = yield call(packagingApi.deleteAwsFileApi, {
        fileKey: action.payload.fileKey,
      });

      const { retCode } = yield commonUtils.getResponseData(awsFileDeleteInfo);

      if (retCode === 0) {
        yield put({
          type: packagingActions.deleteDocumentList,
          payload: Number(action.payload.id),
        });
      }
      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchAwsFileDeleteInfo() {
  yield takeLatest(packagingActions.awsFileDeleteTrigger, awsFileDeleteSaga);
}

// NOTE: AWS download file link
function* awsFileDownloadLinkSaga(action) {
  const i18nMiddleKey = "awsFileDownloadLink";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const awsFileDownloadLinkInfo = yield call(
        packagingApi.getPackagingItemDocumentsDownLoadApi,
        {
          uid: action.payload.uid,
          fileKey: action.payload.fileKey,
        }
      );

      const { retCode, resData } = yield commonUtils.getResponseData(
        awsFileDownloadLinkInfo
      );

      if (retCode === 0) {
        yield put({
          type: packagingActions.getPackagingItemDocumentsDownloadLinkSuccess,
          payload: {
            presignedUrl: resData.presignedUrl,
            fileName: action.payload.fileName,
          },
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchAwsFileDownloadLink() {
  yield takeLatest(
    packagingActions.getPackagingItemDocumentsDownloadLinkTrigger,
    awsFileDownloadLinkSaga
  );
}

// NOTE: ITEM CREATE START
function* itemCreateSaga(action) {
  const i18nMiddleKey = "itemCreate";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const createItemInfo = yield call(packagingApi.createItemApi, {
        ...action.payload,
      });
      const { resData, retCode } = yield commonUtils.getResponseData(
        createItemInfo
      );

      if (retCode === 0) {
        yield put({
          type: packagingActions.initial,
        });
        yield put({
          type: packagingActions.itemCreateSuccess,
          payload: resData.itemId,
        });
        yield action.payload.navigate(url.buyer.packagingList);
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchItemCreate() {
  yield takeLatest(packagingActions.itemCreateTrigger, itemCreateSaga);
}
// NOTE: ITEM CREATE END

// NOTE: GET LIST packaging item START
export function* getPackagingItemListSaga(action) {
  const i18nMiddleKey = "getPackagingItemList";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const { uid, buyerUid, sort, search, pageNo, numPageItem } =
        action.payload;
      const getPackagingItemListInfo = yield call(
        packagingApi.getPackagingItemListApi,
        {
          uid,
          buyerUid,
          sort,
          search,
          pageNo,
          numPageItem,
        }
      );

      const { resData, retCode } = yield commonUtils.getResponseData(
        getPackagingItemListInfo
      );

      if (retCode === 0) {
        yield put({
          type: packagingActions.getPackagingItemListSuccess,
          payload: {
            packagingItemsTotalCount: resData.totalNum,
            packagingItems: resData.itemList,
          },
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchGetPackagingItemList() {
  yield takeLatest(
    packagingActions.getPackagingItemListTrigger,
    getPackagingItemListSaga
  );
}
// NOTE: GET LIST packaging item END

// NOTE: UPDATE packaging item START
export function* updatePackagingItemSaga(action) {
  const i18nMiddleKey = "updatePackagingItem";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const updatePackagingItemInfo = yield call(packagingApi.updateItemApi, {
        ...action.payload,
      });

      const { retCode } = yield commonUtils.getResponseData(
        updatePackagingItemInfo
      );

      if (retCode === 0) {
        yield put({
          type: packagingActions.itemUpdateSuccess,
          payload: { ...action.payload },
        });
        yield put({
          type: commonAction.setEditSpecification,
          payload: false,
        });
        yield toastUtils.successToast(t(`${i18nMiddleKey}.updateSuccess`));
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchUpdatePackagingItem() {
  yield takeLatest(packagingActions.itemUpdateTrigger, updatePackagingItemSaga);
}
// NOTE: UPDATE packaging item END

// NOTE: DELETE packaging item START
export function* deletePackagingItemSaga(action) {
  const i18nMiddleKey = "deletePackagingItem";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* deletePackagingItemFn() {
      const deletePackagingItemInfo = yield call(
        packagingApi.deletePackagingItemApi,
        {
          ...action.payload,
        }
      );
      const { retCode } = yield commonUtils.getResponseData(
        deletePackagingItemInfo
      );

      if (retCode === 0) {
        yield put({
          type: packagingActions.itemDeleteSuccess,
          payload: { ...action.payload },
        });
        yield put({
          type: commonAction.setEditSpecification,
          payload: false,
        });
        yield put({
          type: commonAction.setDetailSpecification,
          payload: false,
        });
        yield commonUtils.unlockScroll();
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchDeletePackagingItem() {
  yield takeLatest(packagingActions.itemDeleteTrigger, deletePackagingItemSaga);
}
// NOTE: DELETE packaging item END

// NOTE: Request Create Packaging item START
export function* createPackagingItemRequestSaga(action) {
  const i18nMiddleKey = "createPackagingItemRequest";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const createPackagingItemRequestInfo = yield call(
        packagingApi.createRequestItemApi,
        {
          ...action.payload,
        }
      );

      const { retCode } = yield commonUtils.getResponseData(
        createPackagingItemRequestInfo
      );

      if (retCode === 0) {
        yield action.payload.navigate(url.buyer.packagingInProgress);
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchCreatePackagingItemRequest() {
  yield takeLatest(
    packagingActions.createPackagingItemRequestTrigger,
    createPackagingItemRequestSaga
  );
}
// NOTE: Request Create Packaging item END

// NOTE: Get Request Packaging item List START
export function* getPackagingItemRequestListSaga(action) {
  const i18nMiddleKey = "getPackagingItemRequestList";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const createPackagingItemRequestInfo = yield call(
        packagingApi.getPackagingItemRequestListApi,
        {
          ...action.payload,
        }
      );

      const { retCode, resData } = yield commonUtils.getResponseData(
        createPackagingItemRequestInfo
      );

      if (retCode === 0) {
        yield put({
          type: packagingActions.getPackagingItemRequestListSuccess,
          payload: {
            rfqList: resData.rfqList,
            totalNum: resData.totalNum,
          },
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchGetPackagingItemListRequest() {
  yield takeLatest(
    packagingActions.getPackagingItemRequestListTrigger,
    getPackagingItemRequestListSaga
  );
}
// NOTE: Request Create Packaging item END

export function* getRfqSupplierListSaga(action) {
  const i18nMiddleKey = "getRfqSupplierList";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getSupplierRecommendedListInfo = yield call(
        packagingApi.getRfqSupplierListApi,
        { ...action.payload }
      );

      const { retCode, resData } = yield commonUtils.getResponseData(
        getSupplierRecommendedListInfo
      );
      if (retCode === 0) {
        yield put({
          type: packagingActions.getSupplierRecommendedListSuccess,
          payload: resData.supplierList,
        });
        // success code
      } else {
        yield commonUtils.sagaErrorToast({
          t,
          i18nMiddleKey,
          retCode,
        });
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchGetRfqSupplierList() {
  yield takeLatest(
    packagingActions.getSupplierRecommendedListTrigger,
    getRfqSupplierListSaga
  );
}

export function* sendRfqEmailSaga(action) {
  const i18nMiddleKey = "sendRfqEmail";
  yield commonUtils.commonSagaWrapper({
    tryFunc: function* () {
      const getSupplierRecommendedListInfo = yield call(
        packagingApi.sendRfqEmailApi,
        { ...action.payload }
      );

      const { retCode } = yield commonUtils.getResponseData(
        getSupplierRecommendedListInfo
      );

      if (retCode === 0) {
        yield action.payload.closeEvent();
        yield toastUtils.successToast(t(`${i18nMiddleKey}.sendMailSuccess`));
      }

      return { retCode, i18nMiddleKey };
    },
    errorMessage: "server error",
  });
}

export function* watchSendRfqEmail() {
  yield takeLatest(packagingActions.sendRfqEmailTrigger, sendRfqEmailSaga);
}

export const sagaFnArray = [
  watchAwsFileUploadInfo,
  watchAwsFileDeleteInfo,
  watchItemCreate,
  watchGetPackagingItemList,
  watchUpdatePackagingItem,
  watchDeletePackagingItem,
  watchCreatePackagingItemRequest,
  watchGetPackagingItemListRequest,
  watchAwsFileDownloadLink,
  watchGetRfqSupplierList,
  watchSendRfqEmail,
];
