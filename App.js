import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
// import MySwitch from "./comps/Switch";
// import MyAvatar from "./comps/Avatar";
// import PostNew from "./comps/postnew";
import Post from "./comps/post";

const App = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }}>
      {/* <PostNew /> */}
      {/* <MyAvatar img="url(/girl.jpg)" /> */}
      {/* <MySwitch /> */}
      <Post />
    </View>
  );
};

export default App;