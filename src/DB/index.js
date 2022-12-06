import  axios from "axios";

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

const instance = axios.create({
  baseURL: "http://localhost:3001/",
})
 


export const getPersonDataAPI = async () => {
  return await instance.get("/person");
};

export const getTrainingsAPI = async () => {
  return await instance.get("/gettraining");
};

export const getPassedTrainingsAPI = async () => {
  return await instance.get("/getPassedTrainings");
};

export const getTestResultsAPI = async () => {
  return await instance.get("getTestResults");
};

export const getVocationAPI = async () => {
  return await instance.get("getVocation");
};

export const getVocationStatisticsAPI = async () => {
  return await instance.get("getVocationStatistics");
};

export const getVocationCurrentRequestsAPI = async () => {
  return await instance.get("getLeaveCurrentRequirements");
};

export const getDrivingLicensesAPI = async () => {
  return await instance.get("getCarDrivingLicense");
};

export const getBusinessTripsAPI = async () => {
  return await instance.get("getBusinessTrip");
};

export const getBusinessTripsErrorAPI = async () => {
  return await instance.get("getBusinessTripError");
};

export const getCorpNumberErrorAPI = async () => {
  return await instance.get("getCorpNumber");
};