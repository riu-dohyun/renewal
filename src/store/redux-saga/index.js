import { all, fork } from "redux-saga/effects";
import * as estimateSaga from "src/store/redux-saga/estimate.saga";
import * as packagingSaga from "src/store/redux-saga/packaging.saga";
import * as userSaga from "src/store/redux-saga/user.saga";

export default function* rootSaga() {
  yield all(userSaga.sagaFnArray.map(item => fork(item)));
  yield all(packagingSaga.sagaFnArray.map(item => fork(item)));
  yield all(estimateSaga.sagaFnArray.map(item => fork(item)));
}
