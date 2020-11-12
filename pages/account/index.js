import React, { useState, useEffect } from "react";
import {View, StyleSheet, Text} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import Profilepost from "../../comps/profilepost";

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
      width:300,
      height:50
    },
    profilecont:{
      width:325,
      height:200,
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      // backgroundColor:"green"
    },
    avatarcont:{
      // backgroundColor:"blue",
      height:50
    },
    postcont:{
      marginBottom:15
    },
    none:{
      display:"none"
    }
})


export default function Account(){
const [selected, setSelected] = useState(0);
return <View style={styles.container}>

<View style={styles.headercont}>
<MyHeader  head="Account"/>
</View>
    
<View style={styles.profilecont}>

<View style={styles.avatarcont}>
<Avatar/>
</View>

<View>
<MyHeader  head="Profile"/>
</View>

<View>
<MyTab tab1="Posts" tab2="Profile" tab3="Settings" 
onPress={(tab) => {
  setSelected(0)
   }}/>
</View>
</View>

<View>
<View style={[selected === 0 ? styles.postcont : styles.none]}>
<Profilepost />
</View>
<View style={[selected === 0 ? styles.postcont : styles.none]}>
<Profilepost />
</View><View style={[selected === 0 ? styles.postcont : styles.none]}>
<Profilepost />
</View>
</View>



  
  <View style={styles.navbar}>
    <NavBar />
    </View>
    
    </View>
}