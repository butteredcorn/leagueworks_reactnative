import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import MyPill from "../../comps/Teampill";

const styles = StyleSheet.create({
    
    header: {
            fontSize: 36,
            fontWeight: "bold",
            color: "#333333",
            width: "90%",
            height: 40,
            marginTop: 50,
            marginBottom: 15
    },
    navbar: {

    }, 
    pillcont: {
        alignItems: "center"
    },
    pillMargin: {
        marginBottom: 30
    }
});

export default function Teams(){
return<ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <MyHeader head="Teams"></MyHeader>
    </View>
    <View style={styles.pillcont}>
        <View style={styles.pillMargin}>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
        </View>
        <View style={styles.pillMargin}>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
        </View>
        <View style={styles.pillMargin}>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
        </View>
        <View style={styles.pillMargin}>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
        </View>
        <View style={styles.pillMargin}>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
        </View>
    </View>
    <View style={styles.navbar}>
        <NavBar></NavBar>
    </View>
</ScrollView>
}