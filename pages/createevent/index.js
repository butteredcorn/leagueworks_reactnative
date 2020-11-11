import React from "react";
import {View, StyleSheet, TextInput} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import Input from "../../comps/input";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:"100%"
    },
    header:{
        position:"relative",
        top:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    pagetitle:{
        position:"relative",
        left:-85
    },
    timerange:{

    },
    navbar:{
        position:"absolute",
        bottom: 0
    }
})

export default function CreateEvent(){
    return<View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <MyHeader  head="Create Event"/>
            </View>
        </View>

        {/* Inputs */}
        <View style={styles.timerange}>

        </View>




        {/* Nav Bar */}

        <View style={styles.navbar}>
            <NavBar />
        </View>

    </View>
}