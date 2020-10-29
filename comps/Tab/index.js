import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 325,
    height: 50,
    padding: 10
  },
  indivcont: {
    alignItems: "center",
    width: 90
  },
  border: {
    width: 80,
    borderWidth: 3,
    borderColor: "#F35B04",
    borderRadius: 50
  },
  text: {
    fontWeight: "bold",
    fontSize: "16",
    paddingBottom: 5
  }
});
const MyTab = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.indivcont}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.border}></View>
      </View>

      <View style={styles.indivcont}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.border}></View>
      </View>

      <View style={styles.indivcont}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.border}></View>
      </View>
    </View>
  );
};

MyTab.defaultProps = {
  text: "Default"
};

export default MyTab;
