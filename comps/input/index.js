import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({ text, placeholder, width }) => {
  const [value, onChangeText] = React.useState();
  
  const inputwidth = {width: width ? width : 271}

  return (
    <View>
      <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{text}</Text>
      <TextInput
        style={[{
          height: 37,
          borderRadius: 33,
          padding:12,
          backgroundColor:"#F6F6F6",
          marginRight:10,
          marginBottom:5
        }, inputwidth]}
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