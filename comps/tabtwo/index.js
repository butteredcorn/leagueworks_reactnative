import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import Text from '../Text';

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
    width: 125,
    borderWidth: 3,
    borderColor: "#F35B04",
    borderRadius: 50
  },
  text: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 16,
    paddingBottom: 5,
    fontWeight:"bold"
  },
  noborder: {
    width: 80,
    borderWidth: 3,
    borderColor: "#F35B04",
    borderRadius: 50,
    opacity: 0
  }
});
const MyTabTwo = ({ tab1, tab2, press1, press2 }) => {
  const [selected, setSelected] = useState(1);

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          setSelected(1);
          press1(1);
        }}
      >
        <View style={styles.indivcont}>
          <Text style={styles.text}>{tab1}</Text>
          <View
            style={[selected === 1 ? styles.border : styles.noborder]}
          ></View>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => {
          setSelected(2);
          press2(2);
        }}
      >
        <View style={styles.indivcont}>
          <Text style={styles.text}>{tab2}</Text>
          <View
            style={[selected === 2 ? styles.border : styles.noborder]}
          ></View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

MyTabTwo.defaultProps = {
  tab1: "Default",
  tab2: "Default",
};

export default MyTabTwo;
