import React from "react";
import { View, TextInput } from "react-native";
import Text from '../Text';

const Input = ({ text, placeholder, width, value, setValue }) => {
  //const [value, onChangeText] = React.useState();

  const newstyle = {width: width ? width : 271}

  return (
    <View>
      <Text style={{fontFamily:"Ubuntu-Bold", marginBottom: 5, fontWeight: "bold"}}>{text}</Text>
      <TextInput
        style={[{
          height: 37,
          borderRadius: 33,
          padding: 10,
          marginBottom:5,
          backgroundColor:"#F8F8F8",
          fontFamily:"Ubuntu-Light"
        }, newstyle]}
        onChangeText={(text) => setValue(text)}
        value={value} placeholder={placeholder}
        autoCapitalize='none'
      />
    </View>
  );
};

Input.defaultProps = {
  text: "Default",
  placeholder:"Type Something"
};

export default Input;