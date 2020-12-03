import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Text from '../Text';

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

const AddButton = ({ text }) => {
  return (
    <View style={styles.box}>
      <Image
        style={{ width: 25, height: 25 }}
        source={require("../../public/add.png")}
      ></Image>
      <Text style={{ marginLeft: 7 }}>{text}</Text>
    </View>
  );
};

AddButton.defaultProps = {
  text: "Add Admin"
};

export default AddButton;
