import React from "react";
import { View, StyleSheet } from "react-native";
const MyAvatar = ({ img }) => {
  const avatarIcon = { backgroundImage: img ? img : "url(/girl.jpg)" };
  return (
    <View style={styles.container}>
      <View style={[styles.avatar, avatarIcon]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: "url(/girl.jpg)",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%"
  }
});

export default MyAvatar;
