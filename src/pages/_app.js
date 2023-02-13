import "@/styles/globals.css";
import "@/styles/notFound.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store, wrapper } from "src/store/store";
import "swiper/css";

import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

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
        <PersistGate
          persistor={persistor}
          loading={<Component {...pageProps} className={roboto.className} />}
        >
          <Component {...pageProps} className={roboto.className} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default wrapper.withRedux(App);
