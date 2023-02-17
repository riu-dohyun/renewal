import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import logger from "redux-logger";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import commonReducer from "./common.store";
import estimateReducer from "./estimate.store";
import layoutReducer from "./layout.store";
import noPersistCommonReducer from "./noPersistCommon.store";
import packagingReducer from "./packaging.store";
import rootSaga from "./redux-saga/index";
import userReducer from "./user.store";

const persistConfig = {
  key: "root",
  version: "0.0.0.8",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user", "packaging", "layout", "common"],
  timeout: 0,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        common: commonReducer,
        user: userReducer,
        packaging: packagingReducer,
        estimate: estimateReducer,
        layout: layoutReducer,
        noPersistCommon: noPersistCommonReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: true,
//   middleware: [logger, sagaMiddleware],
// });

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: [logger, sagaMiddleware],
  });

export const wrapper = createWrapper(makeStore, { debug: true });
export const store = makeStore();

sagaMiddleware.run(rootSaga);
