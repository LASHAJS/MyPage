import {SET_CAR_DRIVING_LICENSE,GET_CAR_DRIVING_LICENSE} from "../../../const";
  
  const initState = {
    carDrivingLicense: [],
  };
  
  export default function carDrivingLicrnseReducer(state = initState, action) {
    switch (action.type) {
      case SET_CAR_DRIVING_LICENSE:
        return {
          ...state,
          carDrivingLicense: action.carDrivingLicense,
        };
      default:
        return state;
    }
  }
  
  export const setCarDrivingLicense = (carDrivingLicense) => ({
    type: SET_CAR_DRIVING_LICENSE,
    carDrivingLicense,
  });
  export const getCarDrivingLicense = () => ({
    type: GET_CAR_DRIVING_LICENSE,
  });
  