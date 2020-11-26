import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from "react-native";

import NavBar from "../../comps/navbar";
import Post from "../../comps/post"

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        justifyContent:"center"
    },
    // navbar: {
    //     position: "absolute",
    //     bottom: 0,
    //     width: "100%"
    // }, 
    header:{
        flexDirection: "row",
        width: "100%",
        height: 45,
        marginTop: 50,
        marginBottom: 15,
        // justifyContent: "space-between",
        paddingLeft: "5%"
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
    },
    editIcon: {
        position: "relative",
        left: 170
    },
    navigation:{
        zIndex:1,
        // Not sure why but the position made everything on the page off-center
        // position:"absolute",
        bottom:0
      }
});


export default function Home(){
return<View>
    <ScrollView contentContainerStyles={styles.container}>
    
    <View style={styles.header}>
        <Text style={styles.pageName}>Home</Text>
            <TouchableOpacity >
                <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
            </TouchableOpacity>   
    </View>
    
    <View style={{alignItems:"center"}}>
        <Post Username="Ally Lee" 
        Title="BC SR Volleyball Provincials" 
        Description="Bring your A-game this Saturday!"
        img={require("../../public/girl.jpg")} />

        <Post Username="Ally Lee" 
        Title="Just another post!!!" 
        Description="And another description 😇"
        img={require("../../public/girl2.png")} />

        <Post Username="Ally Lee" 
        Title="BC SR Volleyball Provincials" 
        Description="Bring your A-game this Saturday!"
        img={require("../../public/girl.jpg")} />
    </View>
    </ScrollView>
    <View style={styles.navigation}>
        <NavBar active={0} />
    </View>
    </View>
{/* 
    <View  style={styles.navbar}>
        <NavBar />
    </View> */}


}