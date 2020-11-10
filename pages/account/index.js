import React from "react";
import {View, StyleSheet, Text} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"
import MyTab from "../../comps/Tab";


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
        height: 40,
        marginTop: 50,
        marginBottom: 15
    },
    test:{
        height: 300,
        width: "100%"
    }
})


export default function Account(){
return <View style={styles.container}>
    
    
    <Text style={styles.pageName}>Account</Text>
    <Avatar />
    <MyHeader head="Amanda Austins" />
    <MyTab tab1="Posts" tab2="Profile" tab3="Settings" />
    {/* This is just filler space until figure out how switch between the tabs */}
    <View style={styles.test} />
    <NavBar />
    
    
    </View>
}