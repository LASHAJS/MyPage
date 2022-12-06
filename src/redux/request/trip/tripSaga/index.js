import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_BUSINESS_TRIP} from "../../../const"
import axios from "axios";
import { setBusinessTrip } from "../tripReducer";


export function* getBusinessTripWorker() {
  yield takeEvery( GET_BUSINESS_TRIP, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/getBusinessTrip');
      console.log(data, "saga")
      yield put(setBusinessTrip(data))
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getBusinessTripWorker)
  ])
}
  