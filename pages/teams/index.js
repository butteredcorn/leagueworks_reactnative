import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import MyPill from "../../comps/Teampill";

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        alignItems: "center"
    },
    pillcont: {
        alignItems: "center"
    },
    pillMargin: {
        marginBottom: 30
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

export default function Teams(){
return<View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>Teams</Text>
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
</View>

}