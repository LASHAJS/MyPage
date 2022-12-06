import {createContext, useReducer,useContext } from 'react'
const initialState = {
    theme: 'light',
}
function reducer(state,action) {
    switch(action.type){
        case 'theme-switch':
            return {...state,theme: state.theme === 'light'? 'dark': 'light'}
        default:
            throw new Error();
    }
}
const AppStateContext = createContext({});
export const useAppState = () => useContext (AppStateContext);
function AppState({children}) {
  const [state,dispatch] = useReducer(reducer,initialState);
  const value = {
    state:state,
    appDispatch:dispatch
  }
  return (
    <AppStateContext.Provider value={value}>
        {children}
    </AppStateContext.Provider>
  )

}
 export default AppState;