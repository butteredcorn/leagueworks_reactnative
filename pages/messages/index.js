import React, {useState, useEffect} from "react";
import { Redirect } from 'react-router-native'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, AsyncStorage} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import SearchInput from "../../comps/searchinput"
import MessageSection from "../../comps/MessageSection"
import * as axios from 'react-native-axios'

import { globals } from '../../globals'


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
        width: "90%",
        height: 45,
        marginTop: 50,
        marginBottom: 15
    },
    newGroupCont:{
        width: "90%",
        flexDirection: "row-reverse",
    },
    newGroup:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#F35B04",
        paddingTop: 10,
        paddingBottom: 10,
    },
        navbar: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    }, 
    navigation:{
        zIndex:1,
        position:"absolute",
        bottom:0
      }
})


export default function Messages(){

    const [page, update] = useState({redirect: false})
    //all other users in an array
    //const [otherUsers, updateOtherUsers] = useState("")
    const [userMessages, updateUserMessages] = useState({loading: true, data: []})
    const [user, updateUser] = useState("")
    
    //need to get reference to other user here
    //get messages where either the senderID or receivers == user_id\   


    async function getUser() {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    async function getUserMessages(user) {
        const result = await axios.post(`${globals.webserverURL}/database/read/userMessages`, {
            user: {
                user_id: user.user_id,
            },
            access_token: user.access_token
        })

        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            console.log(result.data)
            const sortedUniqueMessages = sortMessages(user.user_id, result.data)
            updateUserMessages({loading: false, data: sortedUniqueMessages})
            console.log(sortedUniqueMessages)
        }
    }

    function sortMessages(user_id, messages) {
        const uniqueOtherUsers = {}

        //for timestamp, larger date is newer
        for (let message of messages) {
            if(message.sender_id != user_id) {
                if (!uniqueOtherUsers[message.sender_id] && message.timeStamp) {
                    uniqueOtherUsers[message.sender_id] = message
                } else {
                    if (new Date(uniqueOtherUsers[message.sender_id].timeStamp) < new Date(message.timeStamp)) {
                        //bind the latest message
                        uniqueOtherUsers[message.sender_id] = message
                    }
                }
            } else if (!message.receivers.includes(user_id)) {
                //if private message, ignore broadcasts here
                if(!uniqueOtherUsers[message.receivers[0]] && message.timeStamp) {
                    uniqueOtherUsers[message.receivers[0]] = message
                } else {
                    if(message.timeStamp && new Date(uniqueOtherUsers[message.receivers[0]].timeStamp) < new Date(message.timeStamp)) {
                        uniqueOtherUsers[message.receivers[0]] = message
                    }
                }
            }
        }
        //now we have a map of uniqueOtherUserIDs to the most recent message
        return uniqueOtherUsers
    }

    const redirectChat = (otherUserID) => {
        update({redirect: !page.redirect, path: "/chat", user: user, otherUserID: otherUserID})
    }

    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            await getUserMessages(user)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        try {
            loadPage()
        } catch (err) {
            console.log(err)
        } 
    },[])

return page.redirect ? <Redirect to={
    {pathname: page.path,
     state: {
        user: page.user,
        otherUserID: page.otherUserID
     }
     }}></Redirect>

    : <View style={styles.container}>
    <ScrollView>
            <Text style={styles.pageName}>Messages</Text>

        <SearchInput />

        <TouchableOpacity style={styles.newGroupCont}>
            <Text style={styles.newGroup}>New Group</Text>
        </TouchableOpacity>

        {/* map function here, get params from map function, so you will have param from that */}
        {!userMessages.loading && Array.isArray(Object.keys(userMessages.data)) && Object.keys(userMessages.data).map((otherUserID, index) => 
            <MessageSection
            onPress={() => redirectChat(otherUserID)}
            otherUserID={otherUserID}
            name={otherUserID}
            messageContent={userMessages.data[otherUserID].message}
            time={new Date(userMessages.data[otherUserID].timeStamp).toTimeString()}
            key={index}
            />
        )}
        {/* // <MessageSection 
        // onPress={() => redirectChat("5fbc6140ad13df00172f6eca")}
        // name="James Harden" 
        // otherUserID="5fbc6140ad13df00172f6eca" //for example
        // messageContent="Yo bro, when's the game?" 
        // time="5:01 PM" /> */}

    </ScrollView>

        
    <View style={styles.navigation}><NavBar /></View>


    </View>
}