import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, AsyncStorage} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage'
import {NativeRouter, Route, Link} from "react-router-native";
// import Config from "react-native-config";
import * as axios from 'react-native-axios'
import { globals } from "./globals"

import CreateEvent from "./pages/createevent";
import AdminReg from "./pages/adminreg";
import UserReg from "./pages/UserReg";
import FinishPlayerReg from "./pages/finishplayerreg";
import PlayerWaiver from "./pages/playerwaiver";
import Teams from "./pages/teams";
import Messages from "./pages/messages"
import NewMsg from "./pages/messages/newmsg"
import Chat from "./pages/messages/chat"
import Account from './pages/account';
import NavBar from './comps/navbar';
import Schedule from './pages/schedule';
import Password from './pages/password';

import Avatar from "./comps/Avatar";
import Home from './pages/home';
import Login from './pages/login';
import GettingStarted from './pages/gettingstarted';


const styles = StyleSheet.create({
  cont:{
    flex:1
  },
  pages:{
    flex:5,
    justifyContent:"center",
    alignItems:"center"
  },
  navigation:{
    zIndex:1,
    position:"absolute",
    bottom:0
  }

})

const App = () => {

  //load the heroku web server
  useEffect(()=> {
    async function loadWebServer() {
      try {
        //console.log(JSON.stringify(globals.webserverURL))
        const result = await axios.get(`${globals.webserverURL}/database`)
        console.log(result.data.error)
        //setState({loading: false})
      } catch (err) {
        console.log(err.message)
      } 
    }
    loadWebServer()
  }, [])

  //check for JWT
  const [token, setToken] = useState({token: null, loggedin: false})

  //authentication
  useEffect(() => {
    async function run () {
      const token = await AsyncStorage.getItem('access_token')
      //alert(token) //ie. null if not exist
      if (token) {
        setToken({token: token, loggedin: true})
      }
    }
    run()
  }, [])



  //currently check true, change to check false to enable authentication
  if(token.loggedin) {
        return (
          <NativeRouter>
          <View style={styles.cont}>
            {/* registration page here */}
            <Route exact path ="/" component={GettingStarted}/>
            <Route path ="/login" component={Login}/>
            <Route path ="/signup" component={UserReg}/>
          </View>
          </NativeRouter>)
  } else {
    return ( <NativeRouter style={styles.cont}> 
      {/* this is how to resize avatar with dim prop*/}
      {/* <Avatar dim={200} />  */}
  
      <View style={styles.pages}>
        <Route exact path ="/" component={Home}></Route>
        <Route path ="/teams" component={Teams}></Route>
        <Route path ="/schedule" component={Schedule}></Route>
        <Route path ="/messages" component={Messages}></Route>
        <Route path ="/account" component={Account}></Route>
      </View>
      
      <View style={styles.navigation}> 
      <NavBar />
      </View>
  
      {/* <Home /> */}
      {/* <AdminReg /> */}
      {/* <PlayerReg /> */}
      {/* <FinishPlayerReg /> */}
      {/* <PlayerWaiver/> */}
      {/* <Teams /> */}
      {/* <Messages /> */}
      {/* <NewMsg /> */}
      {/* <Chat /> */}
      {/* <Teams /> */}
      {/* <CreateEvent /> */}
      {/* <Account /> */}
  
  
    </NativeRouter>
    )
  }
  
};

export default App;
