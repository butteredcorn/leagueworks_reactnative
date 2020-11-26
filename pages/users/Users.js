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

import Button from '../../comps/button'

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


export default function AllUsers(){

    const [page, update] = useState({redirect: false})
    const [otherUsers, updateOtherUsers] = useState({loading: true, data: []})
    const [user, updateUser] = useState("")
    
    async function getUser() {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    const redirectChat = (otherUserID) => {
        update({redirect: !page.redirect, path: "/chat", user: user, otherUserID: otherUserID})
    }

    const redirectMessages = () => {
        update({redirect: !page.redirect, path: "/messages", user: user})
    }

    async function getOtherUsers(user) {
        const result = await axios.post(`${globals.webserverURL}/database/read/users`, {
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
            updateOtherUsers(result.data)
        }
    }

    async function loadPage() {
        const user = await getUser()
        updateUser(user)
        getOtherUsers(user)
    }

    useEffect(() => {
        loadPage()
    }, [])

return page.redirect ? <Redirect to={
    {pathname: page.path,
     state: {
        user: page.user,
        otherUserID: page.otherUserID
     }
     }}></Redirect>

    : <View style={styles.container}>
    <ScrollView>
            <Text style={styles.pageName}>All Users</Text>

        <SearchInput />

        <Button text={"Messages"} onPress={redirectMessages}></Button>

        {/* map function here, get params from map function, so you will have param from that */}
        {!otherUsers.loading && Array.isArray(otherUsers) && otherUsers.map((otherUser) => 
            <MessageSection
            onPress={() => redirectChat(otherUser._id)}
            otherUserID={otherUser._id}
            name={`${otherUser.first_name} ${otherUser.last_name}`}
            messageContent={"Message them now!"}
            time={null}
            key={otherUser._id}
            />
        )}

    </ScrollView>

        
    <View style={styles.navigation}><NavBar active={3}/></View>


    </View>
}