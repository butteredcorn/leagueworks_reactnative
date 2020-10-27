import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  firstText: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "black"
  }
});

const MyHeader = ({ head }) => {
  return (
    <View styles>
      <Text styles={styles.firstText}>{head}</Text>
    </View>
  );
};

MyHeader.defaultProps = {
  head: "Default Header"
};

export default MyHeader;