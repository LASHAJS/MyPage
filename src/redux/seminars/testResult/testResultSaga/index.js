import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_TEST_RESULT} from "../../../const"
import axios from "axios";
import { setTestResult } from "../testResultAction";


export function* getTestResultWorker() {
  yield takeEvery( GET_TEST_RESULT, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/getTestResults');
      yield put(setTestResult(data))
      console.log(data)
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getTestResultWorker)
  ])
}
  