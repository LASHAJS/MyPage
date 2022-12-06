import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {setAttended} from "../attendedSeminarsActions"
import {GET_ATTENDED_SEMINARS} from "../../../const"
import axios from "axios";


export function* getAttendedWorker() {
  yield takeEvery( GET_ATTENDED_SEMINARS, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/gettraining');
      yield put(setAttended(data))
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getAttendedWorker)
  ])
}
  