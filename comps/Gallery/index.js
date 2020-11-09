import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight, Image } from "react-native";
import MyCheck from "../Check";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100
  },
  checkcont: {
    position: "relative",
    top: 65,
    left: 65,
    width: 30,
    height: 30
  },
  larger: {
    backgroundColor: "#c4c4c4",
    width: 100,
    height: 100
  },
  smaller: {
    backgroundColor: "#c4c4c4",
    width: 90,
    height: 90
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

const MyGallery = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[styles.larger, isSelected ? styles.larger : styles.smaller]}
        onPress={() => {
          setIsSelected(!isSelected);
        }}
      >
        <View style={styles.checkcont}>
          <TouchableHighlight
            style={[
              styles.check,
              isSelected ? styles.none : styles.checkselect
            ]}
          >
            <Image
              style={[styles.none, isSelected ? styles.none : styles.checkmark]}
              source={require("../../public/checkmark.png")}
            />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </View>
  );
};

MyGallery.defaultProps = {};

export default MyGallery;
