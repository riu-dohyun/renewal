import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as packagingActions from "src/store/packaging.store";

const DownloadContainer = () => {
  const dispatch = useDispatch();
  const { documentsDownloadLink, documentsDownloadLinkFileName } = useSelector(
    state => state.packaging
  );
  useEffect(() => {
    if (documentsDownloadLink) {
      fetch(documentsDownloadLink, { method: "GET" })
        .then(res => {
          return res.blob();
        })
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = documentsDownloadLinkFileName;
          document.body.appendChild(a);
          a.click();
          a.remove();

          dispatch(
            packagingActions.initPackagingItemDocumentsDownloadLinkList()
          );
        })
        .catch(err => {
          console.error("err: ", err);
        });
    }
  }, [documentsDownloadLink]);

  return <></>;
};

export default DownloadContainer;
