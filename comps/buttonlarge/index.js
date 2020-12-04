import React from "react";
import { View, StyleSheet } from "react-native";
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FD8700",
    height: 50,
    width: 250,
    padding: 10,
    borderRadius: 50
  },
  firstText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    fontFamily:"Ubuntu-Bold"
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