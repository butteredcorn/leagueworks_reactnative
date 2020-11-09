import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FD8700",
    height: "50px",
    width: "286px",
    padding: "10px",
    borderRadius: "50px"
  },
  firstText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#FFF"
  }
});

const MyLargeButton = ({ text }) => {
  // No <div> in react-native
  return (
    <View style={styles.container}>
      <Text style={styles.firstText}>{text}</Text>
    </View>
  );
};

MyLargeButton.defaultProps = {
  text: "Button"
};

export default MyLargeButton;