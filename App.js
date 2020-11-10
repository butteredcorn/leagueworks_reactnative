import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";

import Account from "./pages/account";
import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/playerreg";
import FinishPlayerReg from "./pages/finishplayerreg";

const App = () => {
  return<View>
    {/* <AdminReg/> */}
    {/* <PlayerReg></PlayerReg> */}
    {/* <Account */>
    <FinishPlayerReg></FinishPlayerReg>
  </View>
}


export default App;
