import React, {useState, useEffect, useRef} from "react";
import { useLocation } from 'react-router-native'
//import useSocket from 'use-socket.io-client'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, AsyncStorage} from "react-native";
import io from "socket.io-client";

import { globals } from '../../../globals'

import Avatar from "../../../comps/Avatar";
import Header from "../../../comps/header";
import MsgInput from "../../../comps/msginput"
import MyBubble from "../../../comps/msg_bubble";

import NavBar from '../../../comps/navbar'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    contactCont:{
        height: 130,
        width: "100%",
        backgroundColor: "#ECECEC",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    contact:{
        flexDirection: "row",
        width: "70%",
        alignItems: "center"
    },
    bottomCont:{
        paddingBottom: "5%"
    },
    leftCont:{
        width: "90%",
        flexDirection: "row",
    },
})


export default function Chat(){
    //useSocket Hook
    const useSocket = (...args) => {
        const { current: socket } = useRef(io(...args));
        useEffect(() => {
          return () => {
            socket && socket.removeAllListeners();
            socket && socket.close();
          };
        }, [socket]);
        return [socket];
      };
      
    const data = useLocation()
    const user = data.state.user
    console.log(user)
    const access_token = user.access_token
    const user_id = user.user_id
    const otherUserID = data.state.otherUserID

    //`${globals.webserverURL}` //'http://localhost:5000'
    const [socket] = useSocket(`${globals.webserverURL}`, { query: { token: access_token, user_id: user_id, other_user_id: otherUserID } }) //useSocket('http://localhost:5000', { query: { token: "" } }) //transports: ['websocket'], 
    const [message, updateMessage] = useState(null)
    const [messages, updateMessages] = useState({loading: true, data: []})

    //initialize web socket
    function socketInit() {
        socket.connect()
        socket.on('connection', (message) => {
            console.log(message)
        })
        socket.on('message', (message) => {
            console.log("Standard message: " + message)
        })
        socket.on('old messages', (history) => {
            console.log(history)
            if(history && history[0] && history[0].history == "no history") {
                updateMessages({loading: false, data: []})
            } else {
                updateMessages({loading: false, data: history})
            }
        })
    }

    function emitMessage(socket, message) {
        updateMessages({loading: false, data: [...messages.data, {sender_id: user_id, receivers: [otherUserID], message: message}]})
        socket.emit("new message", {sender_id: user_id, receivers: [otherUserID], message: message})
    }    

    useEffect(() => {
        try {
            socketInit()
        } catch (err) {
            console.log(err)
        }
    },[])

return <View style={styles.container}>
    
    <View style={styles.contactCont}>
        <View style={styles.contact}>
            <Avatar dim={40} style={styles.avatar}/>
            <Header head={otherUserID} />
        </View>
    </View>

    <ScrollView>
        {!messages.loading && Array.isArray(messages.data) && messages.data.map(message =>
            //textcolor and position need to be dynamically determined within MyBubble
            <MyBubble messageID={message._id} userID={user_id} senderID={message.sender_id} receivers={message.receivers} text={message.message}/>
        )}
        {/* <MyBubble bgcolor="#ECECEC" textcolor="#333333" text="Hello" leftposition={-45}/>
        <MyBubble text="Hi." rightposition={-45}/>
        <MyBubble bgcolor="#ECECEC" textcolor="#333333" text="What are you up to on this fine evening Monsieur? 😝" leftposition={-40}/>
        <MyBubble text="ça ne vous concerne pas!! 😤😤😤" rightposition={-45}/> */}
        
    </ScrollView>

    <View style={styles.bottomCont}>
    <MsgInput onPress={emitMessage} socket={socket}/>
    </View>
    <View style={styles.navigation}><NavBar socket={socket}/></View>
    </View>
}