import React from "react";
<<<<<<< HEAD
import { Button, Image, StyleSheet, Text, View } from "react-native";
import MySwitch from "./comps/MySwitch";
import Avatar from "./comps/Avatar";
import MessageSection from "./comps/MessageSection";
import EventSection from "./comps/EventSection";

const App = () => {
  return (
    <View>
      <Avatar img={require("../public/girl.jpg")} />

      {/* code below is how to import a url picture*/}

      {/* <Avatar
        img={{ uri: "https://cdn.eso.org/images/thumb300y/eso1907a.jpg" }}
      /> */}

      <View>
        <br />
        <br />
      </View>
      <MySwitch />
      <View>
        <br />
        <br />
      </View>
      <MessageSection name="Test" messageContent="Hello, this is a message" />
      <br />
      <br />
      <EventSection
        eventName="Event name"
        eventTime="00:00"
        eventLocation="Burnaby"
        eventDesc="this is a description"
      />
      <br />
      <br />
=======
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
>>>>>>> main
    </View>
  );
};

export default App;
