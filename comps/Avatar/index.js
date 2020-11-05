import React from "react";
import { View, StyleSheet } from "react-native";
import "../../../public/girl2.png";
const Avatar = ({ img }) => {
  // const avatarIcon = { backgroundImage: img ? img : "url(/girl.jpg)" };
  return (
    <View style={styles.container}>
      <View style={styles.avatar} img={img}></View>
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

Avatar.defaultProps = {
  img: "url(/girl.jpg)",
  width: 50,
  height: 50
};
export default Avatar;
