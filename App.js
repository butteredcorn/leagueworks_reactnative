import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import MySwitch from "./comps/Switch";
import MyAvatar from "./comps/Avatar";

const App = () => {
  return (
    <View>
      <MyAvatar img="url(/girl.jpg)" />
      <MySwitch />
    </View>
  );
};

export default App;
