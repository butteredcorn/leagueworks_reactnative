import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 325,
    height: 50,
    margin: 5
  },
  text: {
    fontFamily:"Ubuntu-Bold",
    fontSize: 16,
    paddingBottom: 5
  },
  line: {
    position: "absolute",
    width: 325,
    height: 1,
    backgroundColor: "#ececec",
    bottom: 0
  },
  icon: {
    resizeMode: "contain",
    width: 18,
    height: 18,
    position: "absolute",
    left: 0
  },
  arrow: {
    resizeMode: "contain",
    width: 18,
    height: 18,
    position: "absolute",
    right: 0
  }
});

const MySection = () => {
  const history = useHistory();
  return (
    <View>
      {/* Notifications */}

      <TouchableOpacity
          onPress={() => {
          history.push("/notifications");
          }}      
      >
        <View style={styles.container}>
          <Image style={[styles.icon]} source={require("./images/bell.png")} />

          <Text style={styles.text}>Notifications</Text>

          <Image style={styles.arrow} source={require("./images/arrow.png")} />

          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>

      {/* Password */}

      <TouchableOpacity
          onPress={() => {
          history.push("/password");
          }}           
      >
        <View style={styles.container}>
          <Image
            style={[styles.icon]}
            source={require("./images/password.png")}
          />

          <Text style={styles.text}>Password</Text>

          <Image style={styles.arrow} source={require("./images/arrow.png")} />

          <View style={styles.line}></View>
        </View>
      </TouchableOpacity>

      {/* Help */}

      <TouchableOpacity
          onPress={() => {
          history.push("/help");
          }}           
      >
        <View style={styles.container}>
          <Image style={[styles.icon]} source={require("./images/help.png")} />

          <Text style={styles.text}>Help</Text>

          <Image style={styles.arrow} source={require("./images/arrow.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

MySection.defaultProps = {
  text: "Default"
};

export default MySection;
