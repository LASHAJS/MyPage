import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {setPersonInfoAC} from "../dashboardActions"
import {SET_PASSED_USER_INFO_FROM_API} from "../../const"
import axios from "axios";




export function* getPersonFromAPIWorker() {
  yield takeEvery( SET_PASSED_USER_INFO_FROM_API, function*(action) {
    try {
     
      const { data } = yield axios.get('http://localhost:3001/person');
      yield put(setPersonInfoAC(data))

    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getPersonFromAPIWorker)
  ])
}
  