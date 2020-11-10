import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";



import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/PlayerReg";
import FinishPlayerReg from "./pages/finishplayerreg";















import CreateEvent from "./pages/createevent";


const App = () => {
  return<View>
    <AdminReg/>
    <PlayerReg></PlayerReg>
    <FinishPlayerReg></FinishPlayerReg>

    <CreateEvent />
  </View>

}


export default App;
