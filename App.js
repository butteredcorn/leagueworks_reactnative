import React from "react";
import { View, StyleSheet } from "react-native";
import MySwitch from "./comps/Switch";
import MyAvatar from "./comps/Avatar";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      {/* <MyAvatar img="url(/girl.jpg)" /> */}
      <MySwitch />
    </View>
  );
};

export default App;
