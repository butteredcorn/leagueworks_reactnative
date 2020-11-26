import React, {useState, useEffect} from "react";
import useSocket from 'use-socket.io-client'
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
        width: "100%",
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
    chat: {
        width: "100%"
    }
})


export default function Chat(){

    const [socket, updateSocket] = useState("http://localhost:5000")
    //const [socket] = useSocket('http://localhost:5000')
    const [message, updateMessage] = useState("")
    const [messages, updateMessages] = useState({loading: true, data: []})


    // socket.connect()
    // console.log(`Socket connected: ${socket.connected}`)
    // socket.on('connection', message => {
    //     console.log(message)
    // })
    // socket.on('message', message => {
    //     console.log(message)
    // })

    function socketInit(){
        return new Promise(async (resolve, reject) => {
            try {
                const s = io("http://localhost:5000", { transports: ['websocket'], query: { token: "" } })
                await updateSocket(s)
                resolve(s)
            } catch (err) {
                reject(err)
            }
        })
    }

    function setupSocket(socket) {

        console.log(socket)

        socket.on('connect', () => {
            socket.emit("message", "hello from react native.")
        })

        socket.on("connection message", (message) => {
            console.log(message)
        })

    }

    useEffect(() => {
        try {
            socketInit()
            .then((socket) => {
                console.log(`Socket connected: ${socket.connected}`)
                setupSocket(socket)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])


return <View style={styles.container}>
    
    <View style={styles.contactCont}>
        <View style={styles.contact}>
            <Avatar dim={40} style={styles.avatar}/>
            <Header head="James Harden" />
        </View>
    </View>


    <ScrollView style={styles.chat}>

        <MyBubble bgcolor="#ECECEC" textcolor="#333333" text="Hello" leftposition={15}/>
        <MyBubble text="Hi." rightposition={-105}/>
        <MyBubble bgcolor="#ECECEC" textcolor="#333333" text="What are you up to on this fine evening Monsieur? 😝" leftposition={15}/>
        <MyBubble text="ça ne vous concerne pas!! 😤😤😤" rightposition={-105}/>

    </ScrollView>



    <View style={styles.bottomCont}>
    <MsgInput />
    </View>
    <View style={styles.navigation}><NavBar socket={socket}/></View>
    </View>
}