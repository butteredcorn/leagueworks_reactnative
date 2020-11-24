import React, { useState, useEffect } from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import Profilepost from "../../comps/profilepost";
import MySwitch from "../../comps/MySwitch";
import MyButton from "../../comps/button";
import { useHistory } from "react-router-native";


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
      marginTop:40
    },
    indivcontentcont:{
      width:300,
      height:40,
      marginBottom:30,
      marginLeft:20,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    
    indivparagraph:{
      width:300,
      height:95,
      marginBottom:45,
      marginLeft:20,
      display:"flex",
      justifyContent:"space-around"
    },
    indivparagraph2:{
      width:300,
      height:105,
      marginBottom:45,
      marginLeft:20,
      display:"flex",
      justifyContent:"space-between"
    },
    textstyle:{
      fontSize:16,

    },
     subhead:{
      fontSize:18,
      fontWeight:"bold"
    }
})


export default function Help(){
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
<MyHeader head="Help"/>
</View>

<View style={styles.contentcont}>

<View style={styles.indivcontentcont}>
<MyHeader head="FAQs" />
</View>

<View style={styles.indivparagraph}>
<Text style={styles.subhead}>What is LeagueWorks?</Text>
<Text style={styles.textstyle}>An all in one sports management app that can update you and your team on the latests news and sports events. </Text>
</View>
<View style={styles.indivparagraph2}>
<Text style={styles.subhead}>Who created this app?</Text>
<Text style={styles.textstyle}>This app is created and developed by second year Digital Design and Development students at the British Columbia Institute of Technology. </Text>
</View>
</View>






  <View style={styles.navbar}>
    <NavBar />
    </View>
    
    </View>
}