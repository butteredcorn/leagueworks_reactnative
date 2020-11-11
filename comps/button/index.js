import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 108,
    padding: 10,
    margin:10,
    borderRadius:5
  },
  firstText: {
    fontWeight: "bold",
    color: "#FFF"
  }
});

const MyButton = ({ text, bgcolor }) => {
  const newstyles = {backgroundColor: bgcolor ? bgcolor:"#FD8700"}
  return (
    <TouchableOpacity style={[styles.container, newstyles]}>

      <Text style={styles.firstText}>{text}</Text>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {

  text: "Button"
};

export default MyButton;

