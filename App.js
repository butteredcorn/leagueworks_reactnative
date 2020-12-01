import React, { useEffect, useState } from "react";
import {StyleSheet, Text, View, AsyncStorage} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeRouter, Route, Link} from "react-router-native";
// import Config from "react-native-config";
import * as axios from 'react-native-axios';
import { globals } from "./globals";

import * as Font from 'expo-font';
import  { AppLoading } from "expo";

import ProtectedRoute from './comps/protectedRoute/ProtectedRoute';
import CreateEvent from "./pages/createevent";
import TeamRegistration from './pages/adminregteam'
import UserReg from "./pages/UserReg";
import FinishPlayerReg from "./pages/finishplayerreg";
import PlayerWaiver from "./pages/playerwaiver";
import Teams from "./pages/teams";
import Messages from "./pages/messages";
import NewMsg from "./pages/messages/newmsg";
import Chat from "./pages/messages/chat";
import Account from './pages/account';
import NavBar from './comps/navbar';
import Schedule from './pages/schedule';
import Password from './pages/password';
import Notifications from "./pages/notifications";
import Help from "./pages/help";
import AllUsers from './pages/users/Users';
import CreatePost from './pages/createpost/CreatePost';


import Avatar from "./comps/Avatar";
import Home from './pages/home';
import Login from './pages/login';
import GettingStarted from './pages/gettingstarted';
import Leagues from "./pages/leagues/Leagues";
import LeagueReg from "./pages/leagueregistration/LeagueRegistration"
import LeagueSchedule from "./pages/leagueschedule/LeagueSchedule"
import Arenas from './pages/arenadetails/ArenaDetails'
import MatchEdit from './pages/matchedit/MatchEdit'

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

});

const getFonts = ()=> Font.loadAsync({
    'ubuntu-light' : require('./public/fonts/Ubuntu-Light.ttf'),
    'ubuntu-regular' : require('./public/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold' : require('./public/fonts/Ubuntu-Bold.ttf')

  });


const App = () => {

  //load the heroku web server
  // useEffect(()=> {
  //   async function loadWebServer() {
  //     try {
  //       //console.log(JSON.stringify(globals.webserverURL))
  //       const result = await axios.get(`${globals.webserverURL}/database`)
  //       console.log(result.data.error)
  //       //setState({loading: false})
  //     } catch (err) {
  //       console.log(err.message)
  //     } 
  //   }
  //   loadWebServer()
  // }, [])

  //check for JWT
  const [token, setToken] = useState({token: null, loggedin: false});

  const [fontsLoaded, setFontsLoaded] = useState(false);



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


  if(fontsLoaded){

  
    return ( <NativeRouter style={styles.cont}> 
      {/* this is how to resize avatar with dim prop*/}
      {/* <Avatar dim={200} />  */}
  
      <View style={styles.pages}>
        <Route path="/gettingstarted" component={GettingStarted}/>
        <Route path="/login" render={
          () => <Login token={token} setToken={setToken}></Login>
        }/>
        <Route path="/signup" render={
          () => <UserReg token={token} setToken={setToken}></UserReg>
        }/>

        {/*protected routes need to use <ProtectedRoute>*/}
        <ProtectedRoute token={token} exact={true} path ={"/"} component={Home}/>
        <ProtectedRoute token={token} path={"/leagues"} component={Leagues}/>
        <ProtectedRoute token={token} path={"/league-registration"} component={LeagueReg}/>
        <ProtectedRoute token={token} path={"/league-schedule"} component={LeagueSchedule}/>
        <ProtectedRoute token={token} path={"/teams"} component={Teams}/>
        <ProtectedRoute token={token} path={"/team-registration"} component={TeamRegistration}/>
        <ProtectedRoute token={token} path={"/create-post"} component={CreatePost}/>
        <ProtectedRoute token={token} path={"/schedule"} component={Schedule}/>
        <ProtectedRoute token={token} path={"/match-edit"} component={MatchEdit}/>
        <ProtectedRoute token={token} path={"/arenas"} component={Arenas}/>
        <ProtectedRoute token={token} path={"/messages"} component={Messages}/>
        <ProtectedRoute token={token} path={"/users"} component={AllUsers}/>
        <ProtectedRoute token={token} path={"/chat"} component={Chat}/>
        <ProtectedRoute token={token} path={"/notifications"} component={Notifications}/>
        <ProtectedRoute token={token} path={"/password"} component={Password}/>
        <ProtectedRoute token={token} path={"/help"} component={Help}/>
        <ProtectedRoute token={token} path={"/createevent"} component={CreateEvent}/>
        <ProtectedRoute token={token} path={"/account"} render={
          () => <Account setToken={setToken}/>
        }/>
      </View> 
       
  
      {/* <TeamRegistration/> */}
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
    );
    }
    else{
      return(
          <AppLoading 
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />
      );
    }
  }


export default App;
