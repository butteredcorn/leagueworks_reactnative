import React, {useState, useEffect, useRef} from "react";
//import useSocket from 'use-socket.io-client'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import io from "socket.io-client";


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

    //const [socket, updateSocket] = useState("http://192.168.1.147:5000")
    const [socket] = useSocket('http://localhost:5000', { query: { token: "" } }) //transports: ['websocket'], 
    const [message, updateMessage] = useState("")
    const [messages, updateMessages] = useState({loading: true, data: []})

    //initialize web socket
    useEffect(() => {
        socket.connect()
        socket.on('connection', (message) => {
            console.log(message)
        })
        socket.on('message', (message) => {
            console.log("Standard message: " + message)
        })
        socket.emit("react message", "hello from react native")
    })

    function emitMessage(socket, message) {
        socket.emit("react message", message)
    }

return <View style={styles.container}>
    
    <View style={styles.contactCont}>
        <View style={styles.contact}>
            <Avatar dim={40} style={styles.avatar}/>
            <Header head="James Harden" />
        </View>
    </View>

    <ScrollView>
        <MyBubble bgcolor="#ECECEC" textcolor="#333333" text="Hello" leftposition={-45}/>
        <MyBubble text="Hi." rightposition={-45}/>
        <MyBubble bgcolor="#ECECEC" textcolor="#333333" text="What are you up to on this fine evening Monsieur? 😝" leftposition={-40}/>
        <MyBubble text="ça ne vous concerne pas!! 😤😤😤" rightposition={-45}/>
    </ScrollView>

    <View style={styles.bottomCont}>
    <MsgInput onPress={emitMessage} socket={socket}/>
    </View>
    <View style={styles.navigation}><NavBar socket={socket}/></View>
    </View>
}