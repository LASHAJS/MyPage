import { all } from "redux-saga/effects"
import dashboardSaga from "../dashboard/dashboardSaga"
import loginSaga from "../login/loginSaga"
import attendedSeminarsSaga from "../seminars/attendedSeminars/attendedSeminarsSaga"
import currentSeminarsSaga from "../seminars/currentSeminars/currentSeminarsSaga"
import testResultSaga from "../seminars/testResult/testResultSaga"
import CurrentRequirementsSaga from "../request/vacation/vacationSaga" 
import businessTripSaga from "../request/trip/tripSaga"
import carDrivingLicrnseSaga from "../request/drivingLicense/drivingSaga"
import corpNumberSaga from "../request/corpNumber/corpSaga"


export default function* rootSaga() {
  yield all([
    dashboardSaga(),
    loginSaga(),
    attendedSeminarsSaga(),
    currentSeminarsSaga(),
    testResultSaga(),
    CurrentRequirementsSaga(),
    businessTripSaga(),
    carDrivingLicrnseSaga(),
    corpNumberSaga(),
    
  ])
}