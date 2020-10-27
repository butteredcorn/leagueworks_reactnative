import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 325,
    height: 50
  },
  text: {
    fontWeight: "bold",
    fontSize: "16",
    paddingBottom: 5
  },
  line: {
    position: "absolute",
    width: 325,
    height: 1,
    backgroundColor: "#ececec",
    bottom: 0
  },
  bell: {
    // not sure how to make the image changeable with props
    backgroundImage: "url(/bell.svg)",
    width: 18,
    height: 18,
    position: "absolute",
    left: 25
  },
  arrow: {
    backgroundImage: "url(/arrow.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: 18,
    height: 18,
    position: "absolute",
    right: 25
  }
});
const MySection = ({ text, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bell} />

      <Text style={styles.text}>{text}</Text>

      <View style={styles.arrow} />

      <View style={styles.line}></View>
    </View>
  );
};

MySection.defaultProps = {
  text: "Default"
};

export default MySection;
