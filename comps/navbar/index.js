import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link, useHistory } from "react-router-native";

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
    // width: "100%",
    backgroundColor: "#F35B04",
    marginBottom: 15
  },
  icon: {
    height: 85,
    width: "20%",
    alignItems: "center"
  },
  iconImg: {
    height: 50,
    width: 50
  },
  none: {
    display: "none"
  }
});

const NavBar = ({socket, active}) => {
  const [selected, setSelected] = useState(0);
  const history = useHistory();
  useEffect(()=>{
    setSelected(active)
    },[active]);
  
  return (
    <View style={styles.container}>
      {/* Home */}
        <View style={styles.iconCont}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSelected(0);
              if(socket) {
                console.log("disconnecting socket")
                socket.disconnect();
                console.log("socket disconnected: " + !socket.connected)
              }
           
              history.push("/");

            }}
            // style={{ height: "85pt", width: "20%", alignItems: "center" }}
          >
            <View style={[styles.active]} />
            <Image
              source={require("../../public/home.png")}
              style={[selected === 0 ? styles.iconImg : styles.none]}
            />
            <Image
              source={require("../../public/home2.png")}
              style={styles.iconImg}
            />
            {/* <MdHome size="50" color="#F35B04" /> */}
          </TouchableOpacity>
        
        {/* Teams */}
        {/* <Link to="/teams"> */}
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSelected(1);

              if(socket) {
                socket.disconnect();
              }              history.push("/leagues");
            }}
            // style={{ height: "85pt", width: "20%", alignItems: "center" }}
          >
            <View style={styles.active} />

            <Image
              source={require("../../public/team.png")}
              style={[selected === 1 ? styles.iconImg : styles.none]}
            />
            <Image
              source={require("../../public/team2.png")}
              style={styles.iconImg}
            />
            {/* <MdPeople size="50" color="#F35B04" /> */}
          </TouchableOpacity>
        {/* </Link> */}

        {/* Schedule */}
        {/* <Link to="/schedule"> */}
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSelected(2);
              if(socket) {
                socket.disconnect();
              }              history.push("/schedule");
            }}
            // style={{ height: "85pt", width: "20%", alignItems: "center" }}
          >
            <View style={styles.active} />
            <Image
              source={require("../../public/schedule.png")}
              style={[selected === 2 ? styles.iconImg : styles.none]}
            />
            <Image
              source={require("../../public/schedule2.png")}
              style={styles.iconImg}
            />
            {/* <MdEventNote size="50" color="#F35B04" /> */}
          </TouchableOpacity>
        {/* </Link> */}

        {/* Messages */}
        {/* <Link to="/messages"> */}
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSelected(3);
              if(socket) {
                socket.disconnect();
              }              
              history.push("/messages");
            }}
            // style={{ height: "85pt", width: "20%", alignItems: "center" }}
          >
            <View style={styles.active} />
            <Image
              source={require("../../public/messages.png")}
              style={[selected === 3 ? styles.iconImg : styles.none]}
            />
            <Image
              source={require("../../public/messages2.png")}
              style={styles.iconImg}
            />
            {/* <MdChatBubble size="50" color="#F35B04" /> */}
          </TouchableOpacity>
        {/* </Link> */}

        {/* Account */}
        {/* <Link to="/account"> */}
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              setSelected(4);
              if(socket) {
                socket.disconnect();
              }              history.push("/account");
            }}
            // style={{ height: "85pt", width: "20%", alignItems: "center" }}
          >
            <View style={styles.active} />
            <Image
              source={require("../../public/account.png")}
              style={[selected === 4 ? styles.iconImg : styles.none]}
            />
            <Image
              source={require("../../public/account2.png")}
              style={styles.iconImg}
            />
            {/* <MdPerson size="50" color="#F35B04" /> */}
          </TouchableOpacity>
        {/* </Link> */}
      </View>
    </View>
  );
};

export default NavBar;