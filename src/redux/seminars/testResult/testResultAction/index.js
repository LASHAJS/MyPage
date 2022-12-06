import {SET_TEST_RESULT,GET_TEST_RESULT} from "../../../const"

const initState = {
    testResults: [],
};
export default function testResultReducer(state = initState, action) {
  switch (action.type) {
    case SET_TEST_RESULT:
      return {
        ...state,
        testResults: action.testResults,
      };
    default:
      return state;
  }
}


export const setTestResult = (testResults) => ({
  type: SET_TEST_RESULT,
  testResults,
});

export const getTestResult = () => ({
  type: GET_TEST_RESULT,
});
