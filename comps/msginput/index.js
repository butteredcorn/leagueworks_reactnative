import React from "react";
import { View, Text, TextInput, Stylesheet } from "react-native";

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
      <View
        style={{
          backgroundImage: "url(/camera.png)",
          height: 30,
          width: 30,
          backgroundRepeat: "no-repeat",
          position: "left",
          left: -10,
          bottom: -4,
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center"
        }}
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
      <View
        style={{
          backgroundImage: "url(/send.png)",
          height: 45,
          width: 45,
          backgroundRepeat: "no-repeat",
          position: "right",
          right: -22,
          bottom: 3,
          justifyContent: "center",
          alignItems: "center",
          backgroundPosition: "center"
        }}
      />
    </View>
  );
};

export default MsgInput;