import React from "react";
import {StyleSheet, Text, View } from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";



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
import Schedule from './pages/schedule';
import Home from './pages/home'


const App = () => {
  return ( <View>
    
    <NativeRouter>
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
};


export default App;
