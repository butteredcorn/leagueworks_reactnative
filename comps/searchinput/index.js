import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 324,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 30,
    marginBottom: 10
  },
  icon: {
    width: 17,
    height: 17,
    marginLeft: 20,
    position: "relative",
    bottom: -17,
    resizeMode: "center"
  }
});

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require("/../../public/search.png")}
      />
      <TextInput
        style={{
          backgroundColor: "#FFF",
          width: 250,
          height: 50,
          borderColor: "white",
          position: "relative",
          right: -20,
          outline: "none"
        }}
        placeholder="Search..."
      />
    </View>
  );
};

export default SearchInput;