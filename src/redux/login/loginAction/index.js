import {SET_IS_AUTH , GET_IS_AUTH, GET_LOGOUT, SET_LOGOUT} from "../../const"



export const setIsAuth = (userData) => ({ type:SET_IS_AUTH, userData });
export const getIsAuth = (payload) => ({ type:GET_IS_AUTH, payload });

export const getLogout = () => ({ type:GET_LOGOUT });
export const setLogout = () => ({ type:SET_LOGOUT });