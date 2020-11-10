import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";


import Account from "./pages/account";
import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/PlayerReg";
import FinishPlayerReg from "./pages/finishplayerreg";
// import AdminReg from "./pages/adminreg";
// import AdminRegTeam from "./pages/adminregteam";
// import AdminWaiver from "./pages/adminwaiver";
import Schedule from "./pages/schedule";


const App = () => {
  return<View>
    {/* <AdminReg/> */}
    {/* <PlayerReg></PlayerReg> */}
    {/* <Account /> */}
    {/* <FinishPlayerReg /></FinishPlayerReg> */}
    {/* <AdminReg /> */}
    {/* <AdminRegTeam /> */}
    {/* <AdminWaiver /> */}
    <Schedule />
  </View>

}


export default App;
