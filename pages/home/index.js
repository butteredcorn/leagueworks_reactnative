import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from "react-native";

import NavBar from "../../comps/navbar";
import Post from "../../comps/post"

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        alignItems: "center",
    },
    navbar: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    }, 
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
        width: "90%",
        height: 45,
        marginTop: 50,
        marginBottom: 15,
        paddingLeft: "5%"
    },
});

export default function Home(){
return<View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>Home</Text>
    </View>
    
    <View style={{alignItems:"center"}}>
        <Post Username="Ally Lee" 
        Title="BC SR Volleyball Provincials" 
        Description="Bring your A-game this Saturday!" />
        <Post />
        <Post />
    </View>

    </ScrollView>

    <View  style={styles.navbar}>
        <NavBar />
    </View>
</View>

}