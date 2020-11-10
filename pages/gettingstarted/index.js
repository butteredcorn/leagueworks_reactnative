import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:540,
        justifyContent:"space-between",
        top:70
    },

})

export default function Gettingstarted(){
return <View style={styles.container}>

    <Image source={require("../../public/Logo1.png")}></Image>

    <View>
    <MyHeader head="Let's sign you in"/>
    <Text>Welcome back, we missed you!</Text>
    </View>

    <MyLargeButton text="Login" />

    <View>
    <MyHeader head="New to the app?"/>
    <Text>Tell us who you are to register</Text>
    </View>

    <MyLargeButton text="Admin / Coach" />

    <MyLargeButton text="Player" />

</View>
}