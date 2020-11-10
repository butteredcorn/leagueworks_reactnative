import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";



import CreateEvent from "./pages/createevent";
import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/PlayerReg";
import FinishPlayerReg from "./pages/finishplayerreg";
import PlayerWaiver from "./pages/playerwaiver";
import Teams from "./pages/teams";
import Messages from "./pages/messages"

const App = () => {
  return<View>
    {/* <AdminReg/> */}
    {/* <PlayerReg></PlayerReg> */}
    {/* <FinishPlayerReg></FinishPlayerReg> */}
    {/* <PlayerWaiver></PlayerWaiver> */}
    {/* <Teams /> */}
    <Messages />

  </View>
}


export default App;
