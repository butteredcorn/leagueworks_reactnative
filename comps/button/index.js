import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FD8700",
    height: "30px",
    width: "108px",
    padding: "10px",
    borderRadius: "5px"
  },
  firstText: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#FFF"
  }
});

const MyButton = ({ text }) => {
  // No <div> in react-native
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>{text}</Text>
    </View>
  );
};

MyButton.defaultProps = {
  text: "Button"
};

export default MyButton;

