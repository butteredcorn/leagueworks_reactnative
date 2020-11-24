import React, { useState, useEffect } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import Profilepost from "../../comps/profilepost";
import MySwitch from "../../comps/MySwitch";
import MyButton from "../../comps/button";
import Input from "../../comps/input";
import { useHistory } from "react-router-native";


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    navbar:{
      position:"absolute",
      bottom:0
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
      marginTop:50
    },
    indivcontentcont:{
      width:325,
      height:85,
      marginBottom:10,
      alignItems:"center",
    },
    buttoncont:{
      position:"absolute",
      display:"flex",
      flexDirection:"row",
      height:50,
      right:25,
      bottom:140
    },
})


export default function Password(){
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
<MyHeader head="Password"/>
</View>

<View style={styles.contentcont}>
<View style={styles.indivcontentcont}>
<Input text="Current Password"/>
</View>

<View style={styles.indivcontentcont}>
<Input text="New Password"/>
</View>

<View style={styles.indivcontentcont}>
<Input text="Confirm Password"/>
</View>
</View>

<View style={styles.buttoncont}>
<MyButton text="Cancel" bgcolor="#333333" />
<MyButton text="Confirm"/>
</View>


  <View style={styles.navbar}>
    <NavBar />
    </View>
    
    </View>
}