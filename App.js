import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";

import AdminReg from "./pages/adminreg";
import Account from "./pages/account";

const App = () => {
  return<View>
    <Account />
  </View>
}


export default App;
