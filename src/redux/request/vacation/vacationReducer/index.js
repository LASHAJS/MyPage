import {SET_CURRENT_REQUIRMENTS,GET_CURRENT_REQUIRMENTS} from "../../../const"

const initState = {
    leaveCurrentRequirements: [],
};
export default function leaveCurrentReqReducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_REQUIRMENTS:
      return {
        ...state,
        leaveCurrentRequirements: action.leaveCurrentRequirements,
      };
    default:
      return state;
  }
}


export const setCurrentRequirements = (leaveCurrentRequirements) => ({
  type: SET_CURRENT_REQUIRMENTS,
  leaveCurrentRequirements,
});

export const getCurrentRequirements = () => ({
  type: GET_CURRENT_REQUIRMENTS,
});
