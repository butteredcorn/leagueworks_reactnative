import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from "react-native";
import SendToInput from "../../../comps/sendtoinput";
import Avatar from "../../../comps/Avatar";
import Header from "../../../comps/header";
import Button from "../../../comps/button";
import MyHeader from "../../../comps/header";
import MyButton from "../../../comps/button";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
        width: "90%",
        height: 45,
        marginTop: 50,
        marginBottom: 15
    },
    person:{
        width: "90%",
        height: 80,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonCont:{
        width: "90%",
        flexDirection: "row-reverse",
        paddingBottom: "5%"
    }
})


export default function NewMsg(){
return <View style={styles.container}>
    
    <Text style={styles.pageName}>New Messages</Text>
    <SendToInput />

    <ScrollView>
        <TouchableOpacity style={styles.person}>
            <Avatar />
            <Header head="James Harden" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.person}>
            <Avatar />
            <Header head="Russell Westbrook" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.person}>
            <Avatar />
            <Header head="Danuel House Jr" />
        </TouchableOpacity>
    </ScrollView>

    <View style={styles.buttonCont}>
        <MyButton text="Next" />
    </View>
    
    </View>
}