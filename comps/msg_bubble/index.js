import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    margin: 10
  },
  textbox: {
    width: 205,
    minHeight: 16,
    paddingTop: 15,
    paddingBottom: 15
  }
});

const MyBubble = ({ text, bgcolor, textcolor }) => {
  const bgstyles = { backgroundColor: bgcolor ? bgcolor : "#F18701" };
  const textstyles = { color: textcolor ? textcolor : "#E8E8E8" };

  return (
    <View style={[styles.container, bgstyles]}>
      <Text style={[styles.textbox, textstyles]}>{text}</Text>
    </View>
  );
};


export default MyBubble;
