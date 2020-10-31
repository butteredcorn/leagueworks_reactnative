import React from "react";
import { View, Text, TextInput, Stylesheet, Image } from "react-native";

const MsgInput = ({ text }) => {
  const [value, onChangeText] = React.useState();

  return (
    <View
      style={{
        width: 271,
        height: 41,
        flexDirection: "row",
        borderRadius: 33,
        borderColor: "white",
        borderWidth: 0.1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#FFF"
      }}
    >
      <Image
        style={{
          height: 30,
          width: 30,
          position: "left",
          left: -10,
          bottom: -4,
          resizeMode: "center"
        }}
        source={require("../../public/camera.png")}
      />
      <TextInput
        style={{
          height: 37,
          width: 271,
          borderColor: "#FFF",
          borderWidth: 0,
          padding: 2,
          outline: "none"
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Message here..."
      />
      <Image
        style={{
          height: 45,
          width: 45,
          position: "right",
          right: -22,
          bottom: 3,
          justifyContent: "center",
          alignItems: "center",
          resizeMode: "center"
        }}
        source={require("../../public/send.png")}
      />
    </View>
  );
};

export default MsgInput;