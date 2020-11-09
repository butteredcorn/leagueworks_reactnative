import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom:5
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
            backgroundColor:"#F6F6F6",
            width: 118,
            height: 43,
            padding: 12,
            borderRadius: 30,
            marginRight: 15,
          }}
          placeholder="Name"
        />
      </View>

      <View>
        <Text>Email</Text>
        <TextInput
          style={{
            backgroundColor:"#F6F6F6",
            width: 118,
            height: 43,
            padding: 12,
            borderRadius: 30,
            marginRight: 15
          }}
          placeholder="Email"
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