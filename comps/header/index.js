import React from "react";
import { View, StyleSheet } from "react-native";
import Text from '../Text';

const styles = StyleSheet.create({
  firstText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    fontFamily:"Ubuntu-Bold"
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