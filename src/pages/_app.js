import "@/i18n/i18n";
import { setNextLoading } from "@/store/common.store";
import "@/styles/globals.css";
import "@/styles/notFound.css";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { persistStore } from "redux-persist";
import { session } from "redux-persist/lib/storage";
import { store, wrapper } from "src/store/store";
import "swiper/css";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  dispatch(setNextLoading(true));
  useEffect(() => {
    return () => {
      dispatch(setNextLoading(false));
    };
  }, []);

  persistStore(store, {
    key: "root",
    storage: session,
    serialize: state => JSON.stringify(state),
  });

  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
