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
        marginBottom: 15,
        fontFamily:"Ubuntu-Bold"
    },
    newGroupCont:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    newGroup:{
        fontSize: 16,
        fontFamily:"Ubuntu-Bold",
        color: "#F35B04",
        paddingTop: 20,
        paddingBottom: 15,
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
    const [userMessages, updateUserMessages] = useState({loading: true, data: []})
    const [user, updateUser] = useState("")

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

            for (let key in result.data) {
                //change on server side to get only other user's profile picture
                const otherUser = await axios.post(`${globals.webserverURL}/database/read/user`, {
                    user: {
                        user_id: key
                    },
                    access_token: user.access_token
                })
                if(result.data.error) {
                    console.log(result.data.error)
                    alert(result.data.error)
                } else {
                    //console.log(otherUser.data)
                    result.data[key].thumbnail_link = otherUser.data.thumbnail_link
                }

            }
            console.log(result.data)
            return result.data
        }
    }

    const redirectChat = (otherUserID, otherUserFirstName, otherUserLastName) => {
        update({redirect: !page.redirect, path: "/chat", user: user, otherUserID: otherUserID, otherUserFirstName: otherUserFirstName, otherUserLastName: otherUserLastName})
    }

    const redirectUsers = () => {
        update({redirect: !page.redirect, path: "/users", user: user})
    }

    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            const userMessages = await getUserMessages(user)
            updateUserMessages({loading: false, data: userMessages})
            console.log(userMessages)
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
        otherUserID: page.otherUserID,
        otherUserFirstName: page.otherUserFirstName,
        otherUserLastName: page.otherUserLastName
     }
     }}></Redirect>

    : <View style={styles.container}>
    <ScrollView>
            <Text style={styles.pageName}>Messages</Text>

        <SearchInput />

        <View style={styles.newGroupCont}>
            <TouchableOpacity>
                <Text style={styles.newGroup} onPress={redirectUsers}>All Users</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.newGroup}>New Group</Text>
            </TouchableOpacity>
        </View>


        {/* map function here, get params from map function, so you will have param from that */}
        {!userMessages.loading && Array.isArray(Object.keys(userMessages.data)) && Object.keys(userMessages.data).map((otherUserID, index) => 
            <MessageSection
            onPress={() => redirectChat(otherUserID, userMessages.data[otherUserID].other_user_first_name, userMessages.data[otherUserID].other_user_last_name)}
            otherUserID={otherUserID}
            name={`${userMessages.data[otherUserID].other_user_first_name} ${userMessages.data[otherUserID].other_user_last_name}`}
            messageContent={userMessages.data[otherUserID].message}
            time={new Date(userMessages.data[otherUserID].timeStamp).toTimeString()}
            key={index}
            userAvatar={userMessages.data[otherUserID].thumbnail_link}
            />
        )}

    </ScrollView>

        
    <View style={styles.navigation}><NavBar active={3} /></View>


    </View>
}