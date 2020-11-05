import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  firstText: {
    fontWeight: "bold",
    fontSize: 36,
    color: "black"
  }
});

const MyHeader = ({ head }) => {
  return (
    <View styles>
      <Text style={styles.firstText}>{head}</Text>
    </View>
  );
};

MyHeader.defaultProps = {
  head: "Default Header"
};

export default MyHeader;