import React from "react";
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
    </View>
  );
};

export default App;
