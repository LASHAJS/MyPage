import {SET_CORP_NUMBER,GET_CORP_NUMBER} from "../../../const";
  
  const initState = {
    corpNumber: [],
  };
  
  export default function corpNumberReducer(state = initState, action) {
    switch (action.type) {
      case SET_CORP_NUMBER:
        return {
          ...state,
          corpNumber: action.corpNumber,
        };
      default:
        return state;
    }
  }
  
  export const setCorpNumber = (corpNumber) => ({
    type: SET_CORP_NUMBER,
    corpNumber,
  });
  export const getCorpNumber = () => ({
    type: GET_CORP_NUMBER,
  });
  