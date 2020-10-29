import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundImage: "url(/add.png)",
    width: 24,
    height: 24,
    marginRight: 10
  }
});

const AddButton = ({ text }) => {
  return (
    <View style={styles.box}>
      <View style={styles.container} />
      <Text>{text}</Text>
    </View>
  );
};

AddButton.defaultProps = {
  text: "Add Admin"
};

export default AddButton;