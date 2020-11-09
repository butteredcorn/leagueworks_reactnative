import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  MdHome,
  MdPeople,
  MdEventNote,
  MdChatBubble,
  MdPerson
} from "react-icons/md";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 85,
    backgroundColor: "#ececec",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 7
  },
  iconCont: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  active: {
    height: 6,
    width: "100%",
    backgroundColor: "#F35B04",
    marginBottom: 15
  }
});

const NavBar = () => {
  const [active, setActive] = useState("none");

  return (
    <View style={styles.container}>
      <View style={styles.iconCont}>
        <TouchableOpacity
          style={{ height: "85", width: "20%", alignItems: "center" }}
        >
          <View style={[styles.active]} />
          <MdHome size="50" color="#F35B04" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: "85", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <MdPeople size="50" color="#F35B04" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: "85", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <MdEventNote size="50" color="#F35B04" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: "85", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <MdChatBubble size="50" color="#F35B04" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ height: "85", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <MdPerson size="50" color="#F35B04" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
