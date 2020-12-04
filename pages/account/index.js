import React, { useState, useEffect } from "react";
import {View, StyleSheet, Image, AsyncStorage, TouchableOpacity, ScrollView} from "react-native";
import {Redirect} from 'react-router-native'
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import Profilepost from "../../comps/profilepost";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";
import MySection from "../../comps/settings_section";
import { Link, useHistory } from "react-router-native";
import * as axios from 'react-native-axios'
import Text from '../../comps/Text';

import { globals } from '../../globals'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    headercont:{
      marginTop:50,
      width:300,
      height:50
    },
    profilecont:{
      height: 130,
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom: 10
      // backgroundColor:"green"
    },
    profiletabcont: {
      // width:275,
      height:230,
      alignItems:"center",
      justifyContent:"space-between",
      // position:"relative",
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
      marginBottom:10
    },
    settingscont:{
      height:160,
      alignItems:"center",
      justifyContent:"space-between",
      position:"relative",
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
      margin: 20
    },
    none:{
      display:"none"
    },
    navigation:{
      zIndex:1,
      position:"absolute",
      bottom:0
    },
    header:{
      flexDirection: "row",
      width: "100%",
      height: 45,
      marginTop: 50,
      marginBottom: 15,
      // justifyContent: "space-between",
      paddingLeft: "5%"
  },
    pageName:{
      fontSize: 36,
      fontFamily:"Ubuntu-Bold",
      color: "#333333",
      fontWeight:"bold"
  },
})


export default function Account({setToken}){
const [user, updateUser] = useState("")
const [fullUser, updateFullUser] = useState({loading: true, user: {}})
const [userPosts, updateUserPosts] = useState({loading: true, data: []})
const [selected, setSelected] = useState(0);
const history = useHistory();

async function getUser() {
  const rawToken = await AsyncStorage.getItem('access_token')  
  const rawID = await AsyncStorage.getItem('user_id')
  return {access_token: rawToken, user_id: rawID}
}

async function getFullUser(user) {
  const result = await axios.post(`${globals.webserverURL}/database/read/user`, {
      user: {
          user_id: user.user_id,
      },
      access_token: user.access_token
  })

  if(result.data.error) {
      console.log(result.data.error)
      alert(result.data.error)
  } else {
      return result.data
  }
}

async function getUserPosts(user){
  const result = await axios.post(`${globals.webserverURL}/database/read/userposts`, {
      user: {
        user_id: user.user_id
      },
      access_token: user.access_token
  })
  if(result.data.error) {
      console.log(result.data.error)
      alert(result.data.error)
  } else {
      return result.data
  }
}

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

async function loadPage() {
  try {
    const user = await getUser()
    updateUser(user)
    const fullUser = await getFullUser(user)
    updateFullUser({loading: false, user: fullUser})
    const userPosts = await getUserPosts(user)
    updateUserPosts({loading: false, data: userPosts})
    console.log(userPosts)
    console.log(fullUser)
  } catch (err) {
    console.log(err)
  }
}

useEffect(() => {
  loadPage()
}, [])

return <View style={styles.container}>
      <ScrollView contentContainerStyles={styles.container}>

      <View style={styles.header}>
          <Text style={styles.pageName}>Account</Text>
      </View>
                
            <View style={styles.profilecont}>
              <View style={styles.avatarcont}>
                {!fullUser.loading && fullUser.user.thumbnail_link && <Avatar thumbnail_link={fullUser.user.thumbnail_link}/>}
              </View>
              <View>
{fullUser.user && fullUser.user.first_name && <MyHeader  head={fullUser.user.first_name}/>}
              </View>
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

            <View>
            {/* POSTS START */}
                {!userPosts.loading && Array.isArray(userPosts.data) && userPosts.data.map(post => 
                <View key={post._id} style={[selected === 0 ? styles.postcont : styles.none]}>
                  <Profilepost post_id={post._id} title={post.title} description={post.description} thumbnail={post.thumbnail_link} timeStamp={post.timeStamp}/>
                </View>)}
            {/* POSTS END */}
            {/* Profile Start */}
                <View style={[selected === 1 ? styles.profiletabcont : styles.none]}>
                  <View style={[selected === 1 ? styles.postcont : styles.none]}>
                    <Text style={{fontFamily:"Ubuntu-Light", margin:10, textAlign:"center"}}>{`${fullUser.user.first_name} ${fullUser.user.last_name}`}</Text>
                    <Text style={{fontFamily:"Ubuntu-Light", margin:10, textAlign:"center"}}>{`${fullUser.user.email}`}</Text>
                    <Text style={{fontFamily:"Ubuntu-Light", margin:10, textAlign:"center"}}>{`${fullUser.user.phone_number}`}</Text>
                  </View>
                  <View style={[selected === 1 ? styles.postcont : styles.none]}>
                    <Input text="Email" />
                  </View>
                </View>
            {/* Profile End */}
            {/* SETTINGS START */}

                <View style={[selected === 2 ? styles.settingscont : styles.none]}>
                  <MySection />
                  <View style={styles.logout}>
                    <MyLargeButton text="Log out" onPress={logout}/>
                  </View>

                  {/* <View style={[selected === 2 ? styles.indivsettingscont : styles.none]}>
                    <View style={[selected === 2 ? styles.infosettingscont : styles.none]}>
                      <Image source={require("../../public/bell.png")} style={styles.bellcont} />
                    <View style={styles.textcont}>
                      <Text style={styles.textstyle}>Notifications</Text>
                    </View>
                    </View>
                    <View style={styles.iconcont}>
                    <Image source={require("../../public/farrow.png")} style={styles.arrowcont} />
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

            <View style={[selected === 2 ? styles.borderline : styles.none]}></View> */}






            </View>
            {/* SETTINGS End */}
            </View>



</ScrollView>

  
<View style={styles.navigation}><NavBar active={4}/>

    
    </View>
    </View>
}