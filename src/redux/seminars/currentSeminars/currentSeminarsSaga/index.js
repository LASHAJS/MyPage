import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_CURRENT_SEMINARS} from "../../../const"
import axios from "axios";
import { setCurrent } from "../currentSeminarsActions";


export function* getCurrentWorker() {
  yield takeEvery( GET_CURRENT_SEMINARS, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/getPassedTrainings');
      yield put(setCurrent(data))
      console.log(data)
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getCurrentWorker)
  ])
}
  