import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },

  number: {
    fontWeight: "bold",
    fontSize: 14
  }
});

const PlayerAdminInput = ({ text, number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <View>
        <Text>{text}</Text>
        <TextInput
          style={{
            backgroundColor: "#FFF",
            width: 118,
            height: 25,
            padding: 20,
            borderRadius: 30,
            marginRight: 15,
            outline: "none"
          }}
          placeholder="Name"
        />
      </View>

      <View>
        <Text>ID Number</Text>
        <TextInput
          style={{
            backgroundColor: "#FFF",
            width: 118,
            height: 25,
            padding: 20,
            borderRadius: 30,
            marginRight: 15,
            outline: "none"
          }}
          placeholder="ID Number"
        />
      </View>
    </View>
  );
};

PlayerAdminInput.defaultProps = {
  text: "Admin",
  number: "1.   "
};

export default PlayerAdminInput;