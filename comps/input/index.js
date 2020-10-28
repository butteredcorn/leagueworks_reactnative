import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ text }) => {
  const [value, onChangeText] = React.useState();

  return (
    <View>
      <Text style={{ fontWeight: "bold" , marginBottom: 5}}>{text}</Text>
      <TextInput
        style={{
          height: 37,
          width: 271,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 33,
          padding: 15,
          outline: "none",
          marginBottom:20
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

Input.defaultProps = {
  text: "Default"
};

export default Input;