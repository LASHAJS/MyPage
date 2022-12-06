import {GET_ATTENDED_SEMINARS,SET_ATTENDED_SEMINARS} from "../../../const"

const initState = {
  trainings: [],
};
export default function attendedSeminarReducer(state = initState, action) {
  switch (action.type) {
    case SET_ATTENDED_SEMINARS:
      return {
        ...state,
        trainings: action.trainings,
      };
    default:
      return state;
  }
}


export const setAttended = (trainings) => ({
  type: SET_ATTENDED_SEMINARS,
  trainings,
});

export const getAttended = () => ({
  type: GET_ATTENDED_SEMINARS,
});
