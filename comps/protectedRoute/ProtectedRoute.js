import React, { useEffect, useState } from "react";
import { Route } from 'react-router-native'
import { Redirect } from "react-router-native";

function ProtectedRoute({token, path, component, render, exact}) {
    if(token && token.token && token.loggedin) {
        if(exact) return <Route exact path={path} component={component} render={render}></Route>
        return <Route path={path} component={component} render={render}></Route>
    } else {
        return <Redirect to="/gettingstarted"></Redirect>
    }
}

export default ProtectedRoute;