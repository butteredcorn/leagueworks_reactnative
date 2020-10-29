import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  check: {
    backgroundColor: "#F8F9FA",
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#F8F9FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  checkselect: {
    backgroundColor: "#F18701",
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#F8F9FA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  none: {
    width: 0,
    height: 0
  },
  checkmark: {
    width: 20,
    height: 20
  }
});
const MyCheck = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.check, isSelected ? styles.check : styles.checkselect]}
        onPress={() => {
          setIsSelected(!isSelected);
        }}
      >
        <Image
          style={[styles.none, isSelected ? styles.none : styles.checkmark]}
          source={require("./checkmark.png")}
        />
      </TouchableHighlight>
    </View>
  );
};

MyCheck.defaultProps = {};

export default MyCheck;
