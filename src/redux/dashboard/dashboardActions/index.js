import {SET_PASSED_USER_INFO_FROM_API,GET_DATA_FROM_API, GET_PASSED_USER_INFO_FROM_API} from "../../const"

export const setPersonInfoAC =(person)=>({
    type:GET_PASSED_USER_INFO_FROM_API,
    person
  })

  export const getPersonInfoAC =( param)=>({
    type:SET_PASSED_USER_INFO_FROM_API,
    param
  })
  
  export const getDataFromAPIAC=()=>({
    type:GET_DATA_FROM_API,
  })