import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import Avatar from "../../../comps/Avatar";
import Header from "../../../comps/header";
import MsgInput from "../../../comps/msginput"
import MyBubble from "../../../comps/msg_bubble";

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
    }
})


export default function Chat(){
return <View style={styles.container}>
    
    <View style={styles.contactCont}>
        <View style={styles.contact}>
            <Avatar />
            <Header head="James Harden" />
        </View>
    </View>

    <ScrollView>
        <MyBubble bgcolor="#ECECEC" textcolor="#333333" />
        <MyBubble />
        <MyBubble bgcolor="#ECECEC" />
        <MyBubble />
    </ScrollView>

    <View style={styles.bottomCont}>
    <MsgInput />
    </View>

    </View>
}