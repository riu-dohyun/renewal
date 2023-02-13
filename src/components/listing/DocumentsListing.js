import { useDispatch, useSelector } from "react-redux";
import * as packagingActions from "src/store/packaging.store";

const DocumentsListing = props => {
  const { item } = props;
  const { uid } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const documentsFileDownLoad = e => {
    e.preventDefault();

    const target = e.currentTarget;
    const fileKey = target.dataset.key;
    const fileName = target.dataset.name;

    dispatch(
      packagingActions.getPackagingItemDocumentsDownloadLinkTrigger({
        uid,
        fileKey,
        fileName,
      })
    );
  };

  if (!item) {
    return <></>;
  }
  return (
    <>
      {item.map((item, idx) => (
        <div
          key={idx}
          className="flex cursor-pointer items-center px-1 text-sm text-slate-400 hover:text-slate-500"
          data-key={item.fileKey}
          data-name={item.fileName}
          onClick={documentsFileDownLoad}
        >
          <span className="material-symbols-outlined mr-1 text-sm">
            {/* {t("specificationContent.download")} */}
            download
          </span>
          <span className="underline">{item.fileName}</span>
        </div>
      ))}
    </>
  );
};

export default DocumentsListing;
