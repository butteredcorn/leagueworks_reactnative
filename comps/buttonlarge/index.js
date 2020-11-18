import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FD8700",
    height: 50,
    width: 286,
    padding: 10,
    borderRadius: 50
  },
  firstText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center"
  }
});

const MyLargeButton = (props) => {
  // No <div> in react-native
  return (
    <View style={styles.container}>
      <Text style={styles.firstText} onPress={props.onPress}>{props.text}</Text>
    </View>
  );
};

MyLargeButton.defaultProps = {
  text: "Button"
};

export default MyLargeButton;