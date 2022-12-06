import {  put, takeEvery, fork, all } from "redux-saga/effects";
import {GET_CAR_DRIVING_LICENSE} from "../../../const"
import axios from "axios";
import { setCarDrivingLicense } from "../drivingReducer";


export function* getCarDrivingLicenseWorker() {
  yield takeEvery( GET_CAR_DRIVING_LICENSE, function*(action) {
    try {
      const { data } = yield axios.get('http://localhost:3001/getCarDrivingLicense');
      yield put(setCarDrivingLicense(data))
     
    } catch(e) {
      
    }
  }
     )
  }


export default function* rootSaga() {
  yield all([
    fork(getCarDrivingLicenseWorker)
  ])
}
  