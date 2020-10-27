import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  }
});
const MySection = ({ text, image }) => {
  return (
    <View style={styles.container}>
      {/* The image one's are just placeholders */}
      <Image source={{ uri: image }} style={{ width: 20, height: 20 }} />

      <Text style={styles.text}>{text}</Text>

      {/* Not 100% sure hot to do the icons */}
      <Image source={{ uri: image }} style={{ width: 20, height: 20 }} />

      <View style={styles.line}></View>
    </View>
  );
};

MySection.defaultProps = {
  text: "Default"
};

export default MySection;
