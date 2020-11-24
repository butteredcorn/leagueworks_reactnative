import React, {useState} from "react";
import { Redirect } from 'react-router-native'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";
import SearchInput from "../../comps/searchinput"
import MessageSection from "../../comps/MessageSection"

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
    const [otherUser, updateOtherUser] = useState("")
    const [userMessages, updateUserMessages] = useState({loading: true, data: []})

    const redirectChat = (league) => {
        update({redirect: !page.redirect, path: "/chat", otherUserID: ""})
    }


return page.redirect ? <Redirect to={
    {pathname: page.path,
     state: {
        otherUserID: otherUser
     }
     }}></Redirect>

    : <View style={styles.container}>
    <ScrollView>
            <Text style={styles.pageName}>Messages</Text>

        <SearchInput />

        <TouchableOpacity style={styles.newGroupCont}>
            <Text style={styles.newGroup}>New Group</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => redirectChat()}>
        <MessageSection 
        name="James Harden" 
        otherUserID=""
        messageContent="Yo bro, when's the game?" 
        time="5:01 PM" />
        </TouchableOpacity>

        {/* <MessageSection 
        name="Russell Westbrook" 
        messageContent="Do you even wanna win??? >:(" 
        time="4:29 PM" />
        <MessageSection 
        name="Danuel House" 
        messageContent="😂😂😂" 
        time="4:28 PM" />
        <MessageSection 
        name="Robert Covington" 
        messageContent="Coach is gon kill me 🥺" 
        time="3:03" />
        <MessageSection 
        name="P.J. Tucker" 
        messageContent="Who you calling a grandpa 😤" 
        time="3:01" />
        <MessageSection 
        name="Mike D'Antoni" 
        messageContent="Keep an eye out for Rob..." 
        time="2:51" /> */}
    </ScrollView>

        
    <View style={styles.navigation}><NavBar /></View>


    </View>
}