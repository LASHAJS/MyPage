import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import authReducer from "../login/loginReducer";
import dashboardReducer from "../dashboard/dashboardReducer"
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../rootSaga/rootSaga"
import attendedSeminarReducer from "../seminars/attendedSeminars/attendedSeminarsActions"
import currentSeminarReducer from "../seminars/currentSeminars/currentSeminarsActions"
import testResultReducer from "../seminars/testResult/testResultAction"
import { loadingStatus } from "../loading/loadingReducer"
import leaveCurrentReqReducer from ".././/request/vacation/vacationReducer"
import businessTripReducer from "../../redux/request/trip/tripReducer"
import carDrivingLicrnseReducer from "../../redux/request/drivingLicense/drivingReducer"
import corpNumberReducer from "../../redux/request/corpNumber/corpReducer"

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  authReducer,
  dashboardReducer,
  attendedSeminarReducer,
  currentSeminarReducer,
  testResultReducer,
  LoadingReducer: loadingStatus,
  leaveCurrentReqReducer,
  businessTripReducer,
  carDrivingLicrnseReducer,
  corpNumberReducer,
  

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;