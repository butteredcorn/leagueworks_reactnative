import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import MyPill from "../../comps/Teampill";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%"
    },
    
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
        position: "absolute",
        bottom: 0
    }, 
    pillcont: {
        alignItems: "center"
    },
    pillMargin: {
        marginBottom: 30
    }
});

export default function Teams(){
return<View>
    <ScrollView contentContainerStyles={styles.container}>
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
    </ScrollView>
    <View  style={styles.navbar}>
        <NavBar></NavBar>
    </View>
</View>

}