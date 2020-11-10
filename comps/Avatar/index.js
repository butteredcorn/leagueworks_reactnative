
import React from "react";
import { View, StyleSheet, Image } from "react-native";
const Avatar = ({img}) => {

  const width = {width: width ? width : 90}
  
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={styles.avatar} resizeMode="cover"/>
      </View>
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
    borderRadius: 50

  }
});

Avatar.defaultProps = {
  img: require("../../public/girl.jpg"),
  width: 50,
  height: 50,

};
export default Avatar;
