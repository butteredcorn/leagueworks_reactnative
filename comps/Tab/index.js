import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 325,
    height: 50,
    padding: 10
  },
  indivcont: {
    alignItems: "center",
    width: 90,
    backgroundColor: "#FAD"
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
  },
  noborder: {
    width: 80,
    borderWidth: 3,
    borderColor: "#F35B04",
    borderRadius: 50,
    opacity: 0
  }
});
const MyTab = ({ text }) => {
  const [firstSelected, setfirstSelected] = useState(true);
  const [secondSelected, setsecondSelected] = useState(true);
  const [thirdSelected, setthirdSelected] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          setfirstSelected(!firstSelected);
        }}
      >
        <View style={styles.indivcont}>
          <Text style={styles.text}>{text}</Text>
          <View
            style={[
              styles.border,
              firstSelected ? styles.border : styles.border,
              secondSelected ? styles.border : styles.noborder,
              thirdSelected ? styles.border : styles.noborder
            ]}
          ></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          setsecondSelected(!secondSelected);
        }}
      >
        <View style={styles.indivcont}>
          <Text style={styles.text}>{text}</Text>
          <View
            style={[
              styles.border,
              firstSelected ? styles.border : styles.noborder,
              secondSelected ? styles.border : styles.border,
              thirdSelected ? styles.border : styles.noborder
            ]}
          ></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          setthirdSelected(!thirdSelected);
        }}
      >
        <View style={styles.indivcont}>
          <Text style={styles.text}>{text}</Text>
          <View
            style={[
              styles.border,
              firstSelected ? styles.border : styles.noborder,
              secondSelected ? styles.border : styles.noborder,
              thirdSelected ? styles.border : styles.border
            ]}
          ></View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

MyTab.defaultProps = {
  text: "Default"
};

export default MyTab;
