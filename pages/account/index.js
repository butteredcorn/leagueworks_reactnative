import React from "react";
import {View, StyleSheet, Text} from "react-native";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import NavBar from "../../comps/navbar"

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative"
    },
    nameCont:{
        marginRight: "50%",
        marginTop: "10%",
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
    }
})


export default function Account(){
return <View style={styles.container}>
    <View>
        <View style={styles.nameCont}>
            <Text style={styles.pageName}>Account</Text>
        </View>
    </View>
    <MyHeader head="Profile Name" />
    <NavBar />
</View>
}