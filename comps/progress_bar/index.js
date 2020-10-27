import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 159,
    height: 16
  },
  line: {
    width: 143,
    height: 3,
    backgroundImage:
      "linear-gradient(to right, rgba(241,135,1,1), rgba(243,91,4,1))"
    // F18701 is rgba(241, 135, 1, 1)
    // F35B04 is rgba(243, 91, 4, 1)
    // linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))
  },
  // Middle
  circle1: {
    width: 16,
    height: 16,
    backgroundImage:
      "linear-gradient(to right, rgba(241,135,1,1), rgba(243,91,4,1))",
    borderRadius: "50%",
    position: "absolute"
  },
  // Right
  circle2: {
    width: 16,
    height: 16,
    backgroundImage:
      "linear-gradient(to right, rgba(241,135,1,1), rgba(243,91,4,1))",
    borderRadius: "50%",
    position: "absolute",
    right: 0
  },
  // Left
  circle3: {
    width: 16,
    height: 16,
    backgroundImage:
      "linear-gradient(to right, rgba(241,135,1,1), rgba(243,91,4,1))",
    borderRadius: "50%",
    position: "absolute",
    left: 0
  }
});
const MyProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
    </View>
  );
};

export default MyProgressBar;
