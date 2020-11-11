import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import Input from "../../comps/input";
import MyButton from "../../comps/button";

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
    date:{
        position:"absolute",
        bottom:450,
        backgroundColor:"#F8F8F8",
        width:325,
        padding:7,
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"center"
    },
    drop:{
        position:"relative",
        bottom:-20
    },
    info:{
        position:"absolute",
        bottom:170,
        alignItems:"center",
        justifyContent:"center"
    },
    timerange:{
        flexDirection:"row"
    },
    button:{
        position:"absolute",
        bottom:100,
        right:45
    },
    navbar:{
        position:"absolute",
        bottom:0
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
        <View style={styles.date}>
            <Input text="Pick a Date"placeholder="00/00/0000" width={200}/>
            <TouchableOpacity>
            <Image style={styles.drop} source={require("../../public/drop.png")}/>
            </TouchableOpacity>
        </View>

        <View style={styles.info}>
            <View style={styles.timerange}>
                <Input width={150} text="Start Time" placeholder="Enter Start Time"/>
                <Input width={150} text="End Time" placeholder="Enter End Time"/>
            </View>
            <Input text="Pick a Place" placeholder="Enter Location"/>
            <Input text="Event Title" placeholder="Enter Event Name"/>
            <Input text="Event Description" placeholder="Enter Description"/>


        </View>

        {/* Button */}

        <TouchableOpacity style={styles.button}>
            <MyButton text="Create"/>
        </TouchableOpacity>


        {/* Nav Bar */}

        <View style={styles.navbar}>
            <NavBar />
        </View>

    </View>
}