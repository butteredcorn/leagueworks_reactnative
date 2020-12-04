import React from "react";
import { View, StyleSheet, TextInput} from "react-native";
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
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
      <Text style={styles.number}>{}</Text>
      <View>
        <Text>{text}</Text>
        <TextInput
          style={{
            backgroundColor: "#F8F8F8",
            width: 118,
            height: 43,
            padding: 12,
            borderRadius: 30,
            marginRight: 15
          }}
          placeholder="Name"
        />
      </View>

      <View>
        <Text>Email or User ID</Text>
        <TextInput
          style={{
            backgroundColor: "#F8F8F8",
            width: 118,
            height: 43,
            padding: 12,
            borderRadius: 30,
            marginRight: 15
          }}
          placeholder="Email or User ID"
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