import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";



import CreateEvent from "./pages/createevent";
import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/PlayerReg";
import FinishPlayerReg from "./pages/finishplayerreg";
import PlayerWaiver from "./pages/playerwaiver";
import Teams from "./pages/teams";
import Account from './pages/account';
import NavBar from './comps/navbar';
import Schedule from './pages/schedule';
const App = () => {
  return ( <View>
    
    <NativeRouter>
<Route path ="/teams" component={Teams}></Route>
<Route path ="/account" component={Account}></Route>
<Route path ="/schedule" component={Schedule}></Route>


    </NativeRouter>
  </View>
  )
};


export default App;
