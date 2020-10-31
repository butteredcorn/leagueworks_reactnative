import React from "react";
import { View, StyleSheet } from "react-native";
import MySwitch from "./comps/Switch";
import SendtoInput from "./comps/sendtoinput";
import MsgInput from "./comps/msginput";
import MyProgressBar from "./comps/progress_bar";
// import MyAvatar from "./comps/Avatar";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <MyProgressBar />
      <SendtoInput />
      <MsgInput />
      {/* <MyAvatar img="url(/girl.jpg)" /> */}
      <MySwitch />
    </View>
  );
};

export default App;
