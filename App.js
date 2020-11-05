import React from "react";
import { View, StyleSheet } from "react-native";
import MySwitch from "./comps/Switch";
import SendtoInput from "./comps/sendtoinput";
import PlayerAdminInput from "./comps/playeradmininput"
import MsgInput from "./comps/msginput";
import MyProgressBar from "./comps/progress_bar";
import MySection from "./comps/settings_section"
import PollPopUp from "./comps/pollpopupmenu";
// import MyAvatar from "./comps/Avatar";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa"
  }
})

const App = () => {
  return (
    <View style={styles.container}>
      <PollPopUp />
      {/* <MySection /> */}
      {/* <MyProgressBar /> */}
      {/* <SendtoInput /> */}
      {/* <PlayerAdminInput /> */}
      {/* <MsgInput /> */}
      {/* <MyAvatar img="url(/girl.jpg)" /> */}
      {/* <MySwitch /> */}
    </View>
  );
};

export default App;