import React, { Component } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { Link, useHistory } from "react-router-native";
import Text from '../../comps/Text';


import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:540,
        justifyContent:"space-between",
        top:20
    },

})

export default function Gettingstarted(){
return <View style={styles.container}>

    <Image source={require("../../public/Logo1.png")}></Image>

    <View>
    <MyHeader head="Let's sign you in"/>
    <Text style={{fontFamily:"Ubuntu-Light"}}>Welcome back, we missed you!</Text>
    </View>

    <Link to={"./login"}><MyLargeButton text="Login"></MyLargeButton></Link>

    <View>
    <MyHeader head="New to the app?"/>
    <Text style={{fontFamily:"Ubuntu-Light"}}>Tell us who you are to register</Text>
    </View>

    <Link to={{pathname: "./signup", state: "admin"}}><MyLargeButton text="Admin" /></Link>

    <Link to={{pathname: "./signup", state: "player"}}><MyLargeButton text="Player" /></Link>

</View>
}