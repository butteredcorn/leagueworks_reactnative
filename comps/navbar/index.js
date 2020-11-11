import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import {Link} from 'react-router-native';

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
  },
  icon:{
    height: 85,
    width: "20%",
    alignItems: "center"
  },
  iconImg:{
    height: 50,
    width: 50
  }
});

const NavBar = () => {
  const [active, setActive] = useState("none");

  return (
    <View style={styles.container}>

        {/* Home */}
        <View style={styles.iconCont}>
  
        <TouchableOpacity style={styles.icon}
          // style={{ height: "85pt", width: "20%", alignItems: "center" }}
        >

          <View style={[styles.active]} />
         
          <Image source={require('../../public/home.png')} style={styles.iconImg} />
          {/* <MdHome size="50" color="#F35B04" /> */}
          </TouchableOpacity>
       

        {/* Teams */}
        <Link to="/teams">
        <TouchableOpacity style={styles.icon}
          // style={{ height: "85pt", width: "20%", alignItems: "center" }}
        >
          
          <View style={styles.active} />
          <Image source={require('../../public/team.png')} style={styles.iconImg} />
          {/* <MdPeople size="50" color="#F35B04" /> */}
        </TouchableOpacity>
        </Link>


        {/* Schedule */}
        <Link to='/schedule'>
        <TouchableOpacity style={styles.icon}
          // style={{ height: "85pt", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <Image source={require('../../public/schedule.png')} style={styles.iconImg} />
          {/* <MdEventNote size="50" color="#F35B04" /> */}
        </TouchableOpacity>
        </Link>


        {/* Messages */}
        <TouchableOpacity style={styles.icon}
          // style={{ height: "85pt", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <Image source={require('../../public/messages.png')} style={styles.iconImg} />
          {/* <MdChatBubble size="50" color="#F35B04" /> */}
        </TouchableOpacity>


        {/* Account */}
        <Link to="/account">
        <TouchableOpacity style={styles.icon}
          // style={{ height: "85pt", width: "20%", alignItems: "center" }}
        >
          <View style={styles.active} />
          <Image source={require('../../public/account.png')} style={styles.iconImg}  />
          {/* <MdPerson size="50" color="#F35B04" /> */}
        </TouchableOpacity>
        </Link>
      </View>


    </View>
  );
};

export default NavBar;
