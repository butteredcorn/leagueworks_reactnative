
import React from "react";
import { View, TextInput, Image } from "react-native";

const MsgInput = ({ text }) => {
  const [value, onChangeText] = React.useState();

  return (
    <View
      style={{
        position:"relative",
        width: 325,
        height: 50,
        flexDirection: "row",
        borderRadius: 100,
        borderColor: "#ECECEC",
        borderWidth: 0.1,
        backgroundColor: "#F8F9FA",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        style={{
          height: 20,
          width: 20,
          resizeMode: "contain"
        }}
        source={require("../../public/camera.png")}
      />
      <TextInput
        style={{
          height: 37,
          width: 230,
          borderColor: "#FFF",
          borderWidth: 0,
          marginLeft: 10,
          marginRight: 10
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Message here..."
      />
  
      <Image
        style={{
          height: 20,
          width: 20,
          resizeMode: "contain"
        }}
        source={require("../../public/send.png")}
      />
    </View>
  );
};

export default MsgInput;