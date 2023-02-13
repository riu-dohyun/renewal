import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from "react-redux";
import * as commonConfig from "src/config/common";
import * as packagingAction from "src/store/packaging.store";
import * as toastUtils from "src/utils/toastUtils";

const AwsFileUpload = () => {
  // const { updateStatus } = props;
  const { fullName, uid } = useSelector(state => state.user);
  const { documentsList } = useSelector(state => state.packaging);
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState(Array(10).fill(null));
  const fileUiList = Array(10).fill(null);

  const handleChange = async files => {
    const fileList = await _.values(files);
    const parsingDocumentsList = documentsList ? JSON.parse(documentsList) : [];
    const documentsListLength = parsingDocumentsList.length;
    const fileListLength = fileList.length;

    const sumLength = documentsListLength + fileListLength;
    if (sumLength > 10) {
      toastUtils.errorToast("No more than 10 file uploads.");
      return false;
    }
    const params = {
      files: fileList,
      documentsList: parsingDocumentsList,
      fullName,
      uid,
    };

    await dispatch(packagingAction.awsFileUploadTrigger(params));
  };

  const deleteFile = async e => {
    const target = e.currentTarget;
    const id = target.dataset.id;
    const file = fileList[id];

    // console.log("file >>", file);

    await dispatch(packagingAction.deleteDocumentList(id));
    // if (updateStatus) {
    //   // NOTE: 수정 부분
    // } else {
    //   // NOTE: 생성 부분
    //   await dispatch(
    //     packagingAction.awsFileDeleteTrigger({ uid, id, fileKey: file.fileKey })
    //   );
    // }
  };

  useEffect(() => {
    const documents = documentsList ? JSON.parse(documentsList) : [];

    const newList = fileUiList.map((item, idx) => {
      return documents[idx] ? documents[idx] : null;
    });
    setFileList(newList);
  }, [documentsList]);

  return (
    <>
      <input
        type="hidden"
        name={commonConfig.specFormName.documents}
        value={documentsList ? documentsList : ""}
      />

      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={commonConfig.fileUploadExtList}
        maxSize={100}
        onSizeError={e => {
          // console.log("e >>>>>>", e);
        }}
      >
        <div className="relative mb-3 flex w-full cursor-pointer items-center justify-center rounded-md bg-blue-500 p-4 text-center text-sm text-white">
          <span className="material-symbols-outlined mr-1 text-[20px]">
            upload
          </span>
          Upload file / drag and drop
        </div>
      </FileUploader>

      <div className="flex flex-wrap gap-2 rounded-lg border-2 border-dashed border-slate-200 bg-white p-2 md:gap-3 md:p-3">
        {fileList.filter(item => item).length > 0 ? (
          fileList.map((item, idx) => (
            <Fragment key={idx}>
              {fileList[idx] ? (
                <div className="flex items-center rounded border bg-white pl-2 text-xs text-slate-400">
                  <span className="max-w-[100px] truncate lg:max-w-[200px]">
                    {fileList[idx].fileName}
                  </span>
                  <button type="button" data-id={idx} onClick={deleteFile}>
                    <span className="material-symbols-outlined ml-2 flex border-l bg-slate-50 px-1 text-sm hover:bg-slate-100">
                      close
                    </span>
                  </button>
                </div>
              ) : (
                <></>
              )}
            </Fragment>
          ))
        ) : (
          <p className="block w-full p-3 text-center text-sm text-slate-300">
            There is no attached file.
          </p>
        )}
      </div>
    </>
  );
};

export default AwsFileUpload;
