import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import MySwitch from "./comps/MySwitch";
import Avatar from "./comps/Avatar";
import MessageSection from "./comps/MessageSection";
import EventSection from "./comps/EventSection";

const App = () => {
  return (
    <View>
      <Avatar img="url(/girl.jpg)" />
      <View>
        <br />
        <br />
      </View>
      <MySwitch />
      <View>
        <br />
        <br />
      </View>
      <MessageSection name="Test" />
      <br />
      <br />
      <EventSection />
      <br />
      <br />
    </View>
  );
};

export default App;
