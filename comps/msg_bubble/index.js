import React from "react";
import { View, StyleSheet } from "react-native";
// import styled from "styled-components/native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 235,
    minHeight: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,

    margin: 50
  },
  textbox: {
    width: 205,
    minHeight: 16
  }
});

const MyBubble = ({ text, leftborder, bgcolor, textcolor }) => {
  const bgstyles = { backgroundColor: bgcolor ? bgcolor : "#F18701" };
  const textstyles = { color: textcolor ? textcolor : "#E8E8E8" };

  // Need to figure out how to do the border radius
  const leftboderstyles = {
    borderBottomLeftRadius: leftborder === true ? 0 : 20
  };

  return (
    <View style={[styles.container, bgstyles, leftboderstyles]}>
      <View style={[styles.textbox, textstyles]}>{text}</View>
    </View>
  );
};

export default MyBubble;
