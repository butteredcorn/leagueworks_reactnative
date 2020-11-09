import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FD8700",
    height: 50,
    width: 286,
    padding: 10,
    borderRadius: 50
  },
  firstText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF"
  }
});

const MyLargeButton = ({ text }) => {
  // No <div> in react-native
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.firstText}>{text}</Text>
    </TouchableOpacity>
  );
};

MyLargeButton.defaultProps = {
  text: "Button"
};

export default MyLargeButton;