import endPoint from "src/config/endPoint";
import { requestPost } from "src/utils/axiosUtils";

// NOTE: AWS File Upload Info API (첨부파일 정보 저장)
export const awsFileUploadInfoApi = async props => {
  const { uid, fileKey, fileName } = props;
  const responseData = await requestPost(endPoint.completeS3Upload, {
    uid,
    fileKey,
    fileName,
  });

  return responseData;
};

// NOTE: get AWS put signed url API
export const getAwsPutSignedUrlApi = async props => {
  const { uid } = props;
  const responseData = await requestPost(endPoint.getS3UploadUrl, {
    uid: uid,
  });

  return responseData;
};

// NOTE: delete AWS File API
export const deleteAwsFileApi = async props => {
  const { uid, fileKey } = props;
  const responseData = await requestPost(endPoint.deleteS3File, {
    uid,
    fileKey,
  });

  return responseData;
};

// NOTE: signed url file upload put API
export const awsFileUploadApi = async props => {
  const { file, fileType, presignedUrl } = props;
  const uploadInfo = await fetch(presignedUrl, {
    method: "PUT",
    body: file,
    headers: {
      ContentType: fileType,
    },
  });

  return uploadInfo;
};

// NOTE: item create API
export const createItemApi = async props => {
  const {
    uid,
    buyerUid,
    category,
    subCategory,
    style,
    itemName,
    notes,
    contents,
    documents,
    spec,
  } = { ...props };
  const responseData = await requestPost(endPoint.createItem, {
    uid,
    buyerUid,
    category,
    subCategory,
    style: style ? style : "",
    itemName,
    notes,
    contents,
    documents,
    spec,
  });

  return responseData;
};

// NOTE: Get Packaging Items API
export const getPackagingItemListApi = async props => {
  const { uid, buyerUid, sort, search, pageNo, numPageItem } = { ...props };
  const responseData = await requestPost(endPoint.getItemList, {
    uid,
    buyerUid,
    sort,
    search,
    pageNo,
    numPageItem,
  });
  return responseData;
};

// NOTE: item update API
export const updateItemApi = async props => {
  const {
    itemId,
    uid,
    buyerUid,
    category,
    subCategory,
    style,
    itemName,
    notes,
    contents,
    documents,
    spec,
  } = { ...props };
  const responseData = await requestPost(endPoint.updateItem, {
    itemId,
    uid,
    buyerUid,
    category,
    subCategory,
    style,
    itemName,
    notes,
    contents,
    documents,
    spec,
  });

  return responseData;
};

// NOTE: Delete Packaging Item API
export const deletePackagingItemApi = async props => {
  const { uid, itemId } = { ...props };
  const responseData = await requestPost(endPoint.deleteItem, {
    uid,
    itemId,
  });
  return responseData;
};

// NOTE: Request Item Api
export const createRequestItemApi = async props => {
  const { uid, buyerUid, shippingAddress, itemList, deadline } = props;
  const responseData = await requestPost(endPoint.createRfq, {
    uid,
    buyerUid,
    shippingAddress,
    itemList,
    deadline,
  });

  return responseData;
};

// NOTE: Get Packaging Item Request List APi
export const getPackagingItemRequestListApi = async props => {
  const { uid, buyerUid, sort, search, pageNo, numPageItem } = { ...props };
  const responseData = await requestPost(endPoint.getRfqList, {
    uid,
    buyerUid,
    sort,
    search,
    pageNo,
    numPageItem,
  });
  return responseData;
};

// NOTE: Get download documents link
export const getPackagingItemDocumentsDownLoadApi = async props => {
  const { uid, fileKey } = { ...props };
  const responseData = await requestPost(endPoint.getS3DownloadUrl, {
    uid,
    fileKey,
  });
  return responseData;
};

// NOTE: 추천 생산자 조회 [Buyer] API
export const getRfqSupplierListApi = async props => {
  const { uid } = props;
  const responseData = await requestPost(endPoint.getRfqSupplierList, {
    uid: uid,
  });
  return responseData;
};

// NOTE: 선택된 생산자에게 견적 요청 메일 발송 API
export const sendRfqEmailApi = async props => {
  const { uid, buyerName, emailList } = props;
  const responseData = await requestPost(endPoint.sendRfqEmail, {
    uid: uid,
    buyerName: buyerName,
    emailList: emailList,
  });
  return responseData;
};
