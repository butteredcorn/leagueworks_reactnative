import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

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
    backgroundImage: "url(/search.png)",
    width: 16,
    height: 17,
    marginLeft: 20,
    position: "relative",
    bottom: -19
  }
});

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}></View>
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