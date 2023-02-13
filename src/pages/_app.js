import "@/styles/globals.css";
import "@/styles/notFound.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store, wrapper } from "src/store/store";
import "swiper/css";

const App = ({ Component, ...pageProps }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor} loading={null}> */}
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
};

export default wrapper.withRedux(App);
