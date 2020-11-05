import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center",
    height: "30px",
    width: "108px",
    padding: "10px",
    borderRadius: "5px",
    margin:10
  },
  firstText: {
    fontSize: "12px",
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

