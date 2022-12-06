import {SET_BUSINESS_TRIP,GET_BUSINESS_TRIP} from "../../../const"

const initState = {
    businessTrip: [],
};
export default function businessTripReducer(state = initState, action) {
  switch (action.type) {
    case SET_BUSINESS_TRIP:
      return {
        ...state,
        businessTrip: action.businessTrip,
      };
    default:
      return state;
  }
}


export const setBusinessTrip = (businessTrip) => ({
  type: SET_BUSINESS_TRIP,
  businessTrip,
});

export const getBusinessTrip = () => ({
  type: GET_BUSINESS_TRIP,
});
