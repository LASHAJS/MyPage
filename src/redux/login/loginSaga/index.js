import {  put, takeEvery, fork, all } from "redux-saga/effects";
import { getIsAuth, getLogout } from "../loginAction"
import { SET_IS_AUTH, SET_LOGOUT } from "../../const"
import { setGlobalLoadingStatusAC } from "../../loading/loadingReducer";


export function* getLoginData() {
  yield takeEvery( SET_IS_AUTH, function*(action) {

    const { userData } = action; 

    
    localStorage.setItem("jwt", "token");
    yield put(getIsAuth(userData));
    yield put(setGlobalLoadingStatusAC(false))
  }
     )
  }


  export function* setLogout() {
    yield takeEvery( SET_LOGOUT, function*(action) {
      console.log('adsasds')
        localStorage.removeItem("jwt");
        yield put(getLogout())
    }
       )
    }


export default function* rootSaga() {
  yield all([
    fork(getLoginData),
    fork(setLogout)
  ])
}
  