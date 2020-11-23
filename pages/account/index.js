import React, { useState, useEffect } from "react";
import {View, StyleSheet, Text, Image, AsyncStorage, TouchableOpacity} from "react-native";
import {Redirect} from 'react-router-native'
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import Profilepost from "../../comps/profilepost";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    navbar:{
      position:"absolute",
      bottom:0,
      width:"100%"
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
    profiletabcont: {
      width:275,
      height:230,
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      position:"relative",
      top:30
    },
    avatarcont:{
      // backgroundColor:"blue",
      height:50
    },
    arrowcont:{
      height:20,
      width:13
    },
    bellcont:{
      height:18,
      width:18
    },
    postcont:{
      marginBottom:15
    },
    settingscont:{
      width:275,
      height:160,
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      position:"relative",
      top:40
    },
    indivsettingscont:{
      width:275,
      height:10,
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",

    },
    infosettingscont:{
      width:135,
      height:21,
      display:"flex",
      flexDirection:"row",
      alignContent:"center",
      justifyContent:"space-between"
    },
    borderline: {
      width:330,
      borderWidth:3,
      borderColor:"#ECECEC"
    },
    textstyle:{
      fontSize:16,
      fontWeight:"bold",
    },
    textcont:{
      width:100,
      height:20
    },
    logout:{
      
    },
    none:{
      display:"none"
    },
    navigation:{
      zIndex:1,
      position:"absolute",
      bottom:0
    }
})


export default function Account({setToken}){

const [selected, setSelected] = useState(0);

async function logout() {
  try {
    await AsyncStorage.removeItem('access_token')
    await AsyncStorage.removeItem('access_token_expiry')
    await AsyncStorage.removeItem('user_id')
    await AsyncStorage.removeItem('user_type')
    console.log('logged out')
    setToken({token: null, loggedin: false})
  } catch(err) {
    console.log(err)
  }
}

return <View style={styles.container}>

<View style={styles.headercont}>
<MyHeader  head="Account"/>
</View>
    
<View style={styles.profilecont}>

<View style={styles.avatarcont}>
  <Avatar />
</View>

<View>
<MyHeader  head="Profile"/>
</View>

<View>
<MyTab tab1="Posts" tab2="Profile" tab3="Settings" 
press1={(tab) => {
  setSelected(0);
        }}
  press2={(tab) => {
  setSelected(1);
  }}
  press3={(tab) => {
  setSelected(2);
  }}/>
</View>
</View>

<View>
{/* POSTS START */}
<View style={[selected === 0 ? styles.postcont : styles.none]}>
<Profilepost />
</View>
<View style={[selected === 0 ? styles.postcont : styles.none]}>
<Profilepost />
</View><View style={[selected === 0 ? styles.postcont : styles.none]}>
<Profilepost />
</View>
{/* POSTS END */}
{/* Profile Start */}
<View style={[selected === 1 ? styles.profiletabcont : styles.none]}>
<View style={[selected === 1 ? styles.postcont : styles.none]}>
<Input text="Name" />
</View>
<View style={[selected === 1 ? styles.postcont : styles.none]}>
<Input text="Email" />
</View>
<View style={[selected === 1 ? styles.postcont : styles.none]}>
<Input text="ID Number" />
</View>
</View>
{/* Profile End */}
{/* SETTINGS START */}
<View style={[selected === 2 ? styles.settingscont : styles.none]}>

<View style={[selected === 2 ? styles.indivsettingscont : styles.none]}>
<View style={[selected === 2 ? styles.infosettingscont : styles.none]}>
<Image source={require("../../public/bell.png")} style={styles.bellcont}></Image>
<View style={styles.textcont}>
<Text style={styles.textstyle}>Notifications</Text>
</View>
</View>
<View style={styles.iconcont}>
<Image source={require("../../public/farrow.png")} style={styles.arrowcont}>
</Image>
</View>
</View>

<View style={[selected === 2 ? styles.borderline : styles.none]}>
</View>

<View style={[selected === 2 ? styles.indivsettingscont : styles.none]}>
<View style={[selected === 2 ? styles.infosettingscont : styles.none]}>
<Image source={require("../../public/lock.png")} style={styles.bellcont}></Image>
<View style={styles.textcont}>
<Text style={styles.textstyle}>Password</Text>
</View>
</View>
<View style={styles.iconcont}>
<Image source={require("../../public/farrow.png")} style={styles.arrowcont}>
</Image>
</View>
</View>

<View style={[selected === 2 ? styles.borderline : styles.none]}>
</View>

<View style={[selected === 2 ? styles.indivsettingscont : styles.none]}>
<View style={[selected === 2 ? styles.infosettingscont : styles.none]}>
<Image source={require("../../public/question.png")} style={styles.bellcont}></Image>
<View style={styles.textcont}>
<Text style={styles.textstyle}>Help</Text>
</View>
</View>
<View style={styles.iconcont}>
<Image source={require("../../public/farrow.png")} style={styles.arrowcont}>
</Image>
</View>
</View>

<View style={[selected === 2 ? styles.borderline : styles.none]}></View>

<View style={styles.logout}>
  <MyLargeButton text="Log out" onPress={logout}/>
</View>



</View>
{/* SETTINGS End */}
</View>





  
<View style={styles.navigation}><NavBar /></View>

    
    </View>
}