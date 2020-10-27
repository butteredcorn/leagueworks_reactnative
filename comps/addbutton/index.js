import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  box: {
    display: "flex"
  },
  container: {
    backgroundImage: "url(/add.png)",
    width: 24,
    height: 24
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
