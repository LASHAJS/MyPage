import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_CORP_NUMBER} from "../../../const"
import axios from "axios";
import { setCorpNumber } from "../corpReducer";


export function* getCorpNumberWorker() {
  yield takeEvery( GET_CORP_NUMBER, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/getCorpNumber');
      yield put(setCorpNumber(data))
     
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getCorpNumberWorker)
  ])
}
  