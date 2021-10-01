import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Actions from "./Actions";
import Categories from "./Categories";
import Rewards from "./Rewards";
import Users from "./Users";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Actions }  path="/actions" />
            <Route component = { Categories }  path="/categories" />
            <Route component = { Rewards }  path="/rewards" />
            <Route component = { Users }  path="/users" />
        </BrowserRouter>
    )
}

export default Routes;