import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import * as containers from "src/containers";

const Wrapper = props => {
  const { title = "", meta = [], children } = props;
  const setTitle = `PackPoss - ${title}`;

  return (
    <div className="h-full">
      <containers.DetailSpecificationContainer />
      <containers.SendSupplierEmailContainer />
      <containers.CoreContainer />
      <containers.DownloadContainer />
      <HelmetProvider>
        <Helmet title={setTitle} meta={meta}></Helmet>
      </HelmetProvider>
      {children}
      <ToastContainer />
      <containers.SpinnerContainer />
    </div>
  );
};

export default Wrapper;
