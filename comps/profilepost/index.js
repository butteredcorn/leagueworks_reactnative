import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 100,
    backgroundColor: "#ececec",
    borderRadius: 20
  },
  flexcontainer: {
    width: 230,
    height: 40,
    display: "flex",
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
    top: 15,
    left: 20
  },
  contentcontainer: {
    width: 160,
    height: 40,
    display: "flex",
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center"
  },
  timecontainer: {
    width: 80,
    height: 40,
    position: "relative",
    bottom: 0,
    left: 40,
    textAlign: "right"
  },
  timetext: {
    color: "#BDBDBD",
    fontSize: 14
  },
  titletext: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  desctext: {
    color: "black",
    fontSize: 14
  },
  contentbox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "grey"
  }
});
const Profilepost = ({ header, description, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexcontainer}>
        <View style={styles.contentcontainer}>
          <View style={styles.contentbox}> 
          </View>
          <View>
            <Text style={styles.titletext}>{header}</Text>
            <Text style={styles.desctext}>{description}</Text>
          </View>
        </View>

        <View style={styles.timecontainer}>
          <Text style={styles.timetext}>{time}m ago</Text>
        </View>
      </View>
    </View>
  );
};

Profilepost.defaultProps = {
  header: "Post title",
  description: "Post description",
  time: "1"
};

export default Profilepost;
