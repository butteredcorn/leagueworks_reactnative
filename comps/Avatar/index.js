import React, {useState, useEffect} from "react";
import { View, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native";


const Avatar = ({img, dim, logout, thumbnail_link}) => {

  const widthstyle = {
    width: dim ? dim : 90,
    height: dim ? dim : 90

  }

  const imagestyle = {
    borderRadius: dim ? dim/2 : 50
  }
  
  return (
    <View style={[styles.container, widthstyle]}>
      <TouchableOpacity onPress={logout}>
        <Image source={thumbnail_link ? {uri: thumbnail_link} : img} style={[styles.avatar, imagestyle]} resizeMode="cover"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 50

  }
});

Avatar.defaultProps = {
  img: require("../../public/girl.jpg"),
  width: 50,
  height: 50,

};
export default Avatar;
