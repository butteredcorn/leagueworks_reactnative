import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, AsyncStorage} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage'
import {NativeRouter, Route, Link} from "react-router-native";
// import Config from "react-native-config";
import * as axios from 'react-native-axios'
import { globals } from "./globals"

import CreateEvent from "./pages/createevent";
import AdminReg from "./pages/adminreg";
import PlayerReg from "./pages/PlayerReg";
import FinishPlayerReg from "./pages/finishplayerreg";
import PlayerWaiver from "./pages/playerwaiver";
import Teams from "./pages/teams";
import Messages from "./pages/messages"
import NewMsg from "./pages/messages/newmsg"
import Chat from "./pages/messages/chat"
import Account from './pages/account';
import NavBar from './comps/navbar';
import Schedule from './pages/schedule';

import Avatar from "./comps/Avatar";
import Home from './pages/home';
import Login from './pages/login';


const styles = StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
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
  if(!token.loggedin) {
        return (
          <View style={styles.cont}>
            {/* registration page here */}
            <Login />
          </View>)
  } else {
    return ( <View style={styles.cont}> 
      {/* this is how to resize avatar with dim prop*/}
      <Avatar dim={200} /> 
  
      <NativeRouter>
          
        <NavBar />
          
        <Route path ="/" component={Home}></Route>
        <Route path ="/teams" component={Teams}></Route>
        <Route path ="/schedule" component={Schedule}></Route>
        <Route path ="/messages" component={Messages}></Route>
        <Route path ="/account" component={Account}></Route>
      </NativeRouter>
  
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
  
  
    </View>
    )
  }
  
};

export default App;
