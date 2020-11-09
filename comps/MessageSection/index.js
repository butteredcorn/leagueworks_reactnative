import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "../Avatar";

const MessageSection = ({ name, messageContent, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.hr} />
      <View style={styles.messagecont}>
        <View style={styles.avatar}>
          <Avatar img={require("../../../public/girl2.jpg")}></Avatar>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text}>{messageContent}</Text>
        </View>
        <View style={styles.time}>{time}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  switch: {
    width: 65,
    height: 37
  },
  avatar: {
    marginTop: 20
  },
  messagecont: {
    flex: 1,
    flexDirection: "row",
    width: 323.06,
    height: 72
  },
  name: {
    width: 200,
    height: 100,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20
  },
  hr: {
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 3,
    width: 322.06
  },
  text: {
    marginTop: -60,
    marginLeft: 10
  },
  time: {
    marginTop: 20,
    color: "#BDBDBD"
  }
});

MessageSection.defaultProps = {
  name: "name goes here",
  messageContent: "message content goes here",
  time: "00:00 AM"
};

export default MessageSection;
