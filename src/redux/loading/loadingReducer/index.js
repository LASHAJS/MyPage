import { SET_LOADING_STATUS } from "../../const";

export const setGlobalLoadingStatusAC = (status) => ({
    type: SET_LOADING_STATUS,
    status,
  });

const initState = {
  loading: false,
};

export const  loadingStatus = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
       loading: action.status
      };
    default:
      return state;
  }
}
