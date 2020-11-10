import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";



const styles = StyleSheet.create({
    container:{

    },
    header: {
            fontSize: 36,
            fontWeight: "bold",
            color: "#333333",
            width: "90%",
            height: 40,
            marginTop: 50,
            marginBottom: 15
    }
});

export default function Teams(){
return<View style={styles.container}>
    <View style={styles.header}>
        <MyHeader head="Teams"></MyHeader>
    </View>
    <View>
    <View>
        <NavBar></NavBar>
    </View>
    </View>
</View>
}