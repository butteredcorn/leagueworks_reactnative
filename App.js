import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";

// import AdminReg from "./pages/adminreg";
// import AdminRegTeam from "./pages/adminregteam";
import AdminWaiver from "./pages/adminwaiver";

const App = () => {
  return<View>
    {/* <AdminReg/> */}
    {/* <AdminRegTeam /> */}
    <AdminWaiver />
  </View>
}


export default App;
