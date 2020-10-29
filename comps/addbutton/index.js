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

const AddButton = () => {
  return (
    <View style={styles.box}>
      <View style={styles.container} />
      <Text>Add Admin</Text>
    </View>
  );
};

export default AddButton;