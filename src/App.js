import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "./container/layout";
import ButtonAppBar from "./components/Header/HeaderComponent";
import { routes } from ".././src/routes";
import {useSelector} from "react-redux";
import {Navigate } from "react-router-dom";
import Login from "./pages/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setIsAuth} from "./redux/login/loginAction"
import Request from "./pages/Requests/pages/index";
import './App.css'



const App = () =>  {
const isAuth = useSelector((state => state.authReducer.isAuth))
const navigate = useNavigate()
const dispatch = useDispatch()

useEffect(() => {
  if (localStorage.getItem("jwt")) {
// navigate("/");
    dispatch(setIsAuth())
    return;
    
  }
  
}, [navigate, dispatch]);
return (
    <div className="app">
    
      <ButtonAppBar />
      <Layout>
      {!isAuth
        ?<Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route  path="/" element={<Navigate to="/Login"/>} />
          
          </Routes>
            :
          <Routes>
          {routes.map((route) => {
            const result = [];
            if (route.children) {


              result.push(
                ...route.children.map((child) => (
                  <Route
                    key={`${route.path}${child.path}`}
                    path={`${child.path}`}
                    element={child.component}
                  />
                ))
              );
            }
            result.push(
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
            return result;
          })}

          <Route key={ "/Requests/:id" } path={  "/Requests/:id" } element={ <Request />}/>
          <Route element={<Navigate to="/"/>} />
        </Routes>
}
      </Layout>
    </div>

  );
}

export default App;
