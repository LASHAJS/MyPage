import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_CURRENT_REQUIRMENTS} from "../../../const"
import axios from "axios";
import { setCurrentRequirements } from "../vacationReducer";


export function* getCurrentRequirementsWorker() {
  yield takeEvery( GET_CURRENT_REQUIRMENTS, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/getLeaveCurrentRequirements');
      yield put(setCurrentRequirements(data))
     
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getCurrentRequirementsWorker)
  ])
}
  