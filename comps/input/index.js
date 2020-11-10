import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ text, placeholder }) => {
  const [value, onChangeText] = React.useState();

  return (
    <View>
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{text}</Text>
      <TextInput
        style={{
          height: 37,
          width: 271,
          borderRadius: 33,
          padding: 15,
          backgroundColor:"#FFF"
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value} placeholder={placeholder}
      />
    </View>
  );
};

Input.defaultProps = {
  text: "Default",
  placeholder:"Type Something"
};

export default Input;