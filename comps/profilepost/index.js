import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 325,
    height: 120,
    backgroundColor: "#ececec",
    borderRadius: 20,
    justifyContent:"center",
    paddingBottom:25
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
    fontSize: 14,
    fontFamily:"Ubuntu-Light"
  },
  titletext: {
    color: "black",
    fontSize: 16,
    fontFamily:"Ubuntu-Bold"
  },
  desctext: {
    color: "black",
    fontSize: 14,
    fontFamily:"Ubuntu-Light"
  },
  contentbox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "grey",
    marginRight:15
  }
});
const Profilepost = ({ title, description, timeStamp, thumbnail }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexcontainer}>
        <View style={styles.contentcontainer}>
          <Image style={styles.contentbox} source={{uri: thumbnail}}> 
          </Image>
          <View>
            <Text style={styles.titletext}>{title}</Text>
            <Text style={styles.desctext}>{description}</Text>
          </View>
        </View>

        <View style={styles.timecontainer}>
          <Text style={styles.timetext}>{timeStamp}</Text>
        </View>
      </View>
    </View>
  );
};

Profilepost.defaultProps = {
  title: "Post title",
  description: "Post description",
  timeStamp: "",
  thumbnail: '',
};

export default Profilepost;
