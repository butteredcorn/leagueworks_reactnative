import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";
import Input from "../../comps/input";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:455,
        justifyContent:"space-between",
        top:70
    },

})

export default function Login(){
return <View style={styles.container}>

    <Image source={require("../../public/Logo1.png")}></Image>

    <View>
    <Input text="Email or ID Number" />
    </View>


    <View>
    <Input text="Password" />
    </View>


    <MyLargeButton text="Login" />

</View>
}