import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";

import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/PlayerReg";

const App = () => {
  return<View>
    {/* <AdminReg/> */}
    <PlayerReg></PlayerReg>
  </View>
}


export default App;
