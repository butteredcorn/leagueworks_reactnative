import React, { useState, useEffect } from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import Profilepost from "../../comps/profilepost";
import MySwitch from "../../comps/MySwitch";
import MyButton from "../../comps/button";
import { useHistory } from "react-router-native";
import Text from '../../comps/Text';


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    navbar:{
      position:"absolute",
      bottom:0,
    },
    headercont:{
      marginTop:50,
      textAlign:"left",
      width:300,
      height:50,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
    },
    headerspace:{
      marginRight:20
    },
    contentcont:{
      width:325,
      height:200,
      marginTop:85
    },
    indivcontentcont:{
      width:325,
      height:40,
      marginBottom:45,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    switchcont:{
      height:30
    },
    buttoncont:{
      position:"absolute",
      height:50,
      right:25,
      bottom:140
    },
    textstyle:{
      fontSize:18,
      fontWeight:"700"
    }
})


export default function Notifications(){
const history = useHistory();
return <View style={styles.container}>

<View style={styles.headercont}>
  <TouchableOpacity 
        onPress={() => {
          history.push("/account");
          }}     
  >
    <Image source={require("../../public/backarrow.png")} style={styles.headerspace} />
  </TouchableOpacity>
  <MyHeader head="Notifications"/>
</View>

<View style={styles.contentcont}>
<View style={styles.indivcontentcont}>
<Text style={styles.textstyle}>Allow push notifications</Text>
<View style={styles.switchcont}>
<MySwitch/>
</View>
</View>
<View style={styles.indivcontentcont}>
<Text style={styles.textstyle}>Chat banner notifications</Text>
<View style={styles.switchcont}>
<MySwitch/>
</View>
</View>
<View style={styles.indivcontentcont}>
<Text style={styles.textstyle}>Email notifications</Text>
<View style={styles.switchcont}>
<MySwitch/>
</View>
</View>
</View>

<View style={styles.buttoncont}>
<MyButton text="Confirm"/>
</View>


  <View style={styles.navbar}>
    <NavBar active={4} />
    </View>
    
    </View>
}