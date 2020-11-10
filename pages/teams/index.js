import React from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import MyHeader from "../../comps/header";


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
    
});

export default function Teams(){
return<View style= {styles.header}>
    <MyHeader head="Teams"></MyHeader>
</View>
}