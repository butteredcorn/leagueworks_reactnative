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
    paddingBottom: 15,
    fontFamily:"Ubuntu-Light",
  }
});

const MyBubble = ({ text, bgcolor, textcolor, leftposition, rightposition}) => {
  const bgstyles = { backgroundColor: bgcolor ? bgcolor : "#F18701" };
  const textstyles = { color: textcolor ? textcolor : "#E8E8E8" };
  const graybox = { left: leftposition ? leftposition : null }; //this is a prop for graychatbox
  const oragebox = {right: rightposition ? rightposition: null}; //this is a prop for orangechatbox

  return (
    <View style={[styles.container, bgstyles, graybox, oragebox]}>
      <Text style={[styles.textbox, textstyles]}>{text}</Text>
    </View>
  );
};


export default MyBubble;
