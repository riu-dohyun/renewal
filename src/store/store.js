import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import commonReducer from "./common.store";
import estimateReducer from "./estimate.store";
import layoutReducer from "./layout.store";
import noPersistCommonReducer from "./noPersistCommon.store";
import packagingReducer from "./packaging.store";
import userReducer from "./user.store";

const persistConfig = {
  key: "root",
  version: "0.0.0.8",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user", "packaging", "layout", "common"],
};

const rootReducer = combineReducers({
  common: commonReducer,
  user: userReducer,
  packaging: packagingReducer,
  estimate: estimateReducer,
  layout: layoutReducer,
  noPersistCommon: noPersistCommonReducer,
});

// console.log("rootReducer >>", rootReducer);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_SET === "dev" ? true : false,
  middleware: [sagaMiddleware],
});

const setupStore = () => store;
const makeStore = context => setupStore(context);

export const persistor = persistStore(store);

export const wrapper = createWrapper(store, {
  debug: true,
});

export default store;
