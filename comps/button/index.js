import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD8700",
    height: 30,
    width: 108,
    borderRadius: 5
  },
  firstText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#f8f9fa"
  }
});

const MyButton = ({ text, cancel }) => {
  // No <div> in react-native
  // Need to figure out how to prop the color... because we need to change the color for the cancel button
  // const cancelStyles = {backgroundColor: cancel === "true" === "#333333"};

  // const [bgColor, setBgColor] = useState(null);
  // const btncont = {backgroundColor:bgColor?bgColor:"none"}



  return (
    <TouchableOpacity style={[styles.container]}>
      <Text style={styles.firstText}>{text}</Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  text: "Button",
};

export default MyButton;

