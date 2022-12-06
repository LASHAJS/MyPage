import {GET_IS_AUTH , GET_LOGOUT} from "../../const"

const initialState = {
    userData: null,
    isAuth: false,
  };
  
  export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case GET_IS_AUTH:

        return {
          ...state,
          isAuth: true,
          userData: action.payload,
        };
      case GET_LOGOUT:
        return {
          ...state,
          isAuth: false,
        }
      default:
        return state;
    }
  };
  