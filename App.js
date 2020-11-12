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
import NavBar from './comps/navbar';
import Schedule from './pages/schedule';



const App = () => {
  return ( <View>
    
    <NativeRouter>
      <Route path ="/" component={Teams}></Route>
      <Route path ="/teams" component={Teams}></Route>
      <Route path ="/schedule" component={Schedule}></Route>
      <Route path ="/messages" component={Messages}></Route>
      <Route path ="/account" component={Account}></Route>
    </NativeRouter>

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
