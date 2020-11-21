import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-native";

export default function ProtectedRoute({token, path, component, render, exact}) {
    if(token.token && tokken.loggedin) {
        if(exact) return <Route exact path={path} component={component} render={render}></Route>
        return <Route path={path} component={component} render={render}></Route>
    } else {
        return <Redirect to="/gettingstarted"></Redirect>
    }
}