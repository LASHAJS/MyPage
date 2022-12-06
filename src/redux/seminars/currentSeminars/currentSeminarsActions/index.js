import {SET_CURRENT_SEMINARS,GET_CURRENT_SEMINARS} from "../../../const"

const initState = {
    passedTrainings: [],
};
export default function currentSeminarReducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_SEMINARS:
      return {
        ...state,
        passedTrainings: action.passedTrainings,
      };
    default:
      return state;
  }
}


export const setCurrent = (passedTrainings) => ({
  type: SET_CURRENT_SEMINARS,
  passedTrainings,
});

export const getCurrent = () => ({
  type: GET_CURRENT_SEMINARS,
});
