import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoutes } from "../router";
import { AuthContext } from "../context";
import MyLoader from "./UI/Loader/MyLoader";

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading) {
      return <MyLoader />
    }
  return (
    isAuth
        ? <Routes>
            {privateRoute.map(rout => 
            <Route path={rout.path} 
            element={rout.element} 
            exact={rout.exact}
            key={rout.path}
            />
        )}
          </Routes>
        : <Routes>{publicRoutes.map(rout => 
            <Route 
            path={rout.path} 
            element={rout.element} 
            exact={rout.exact}
            key={rout.path}
            />
        )}
          </Routes>

    

  );
}

export default AppRouter;