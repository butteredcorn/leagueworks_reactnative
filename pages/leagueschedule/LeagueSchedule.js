import React, {useState} from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import Input from "../../comps/input";
import MyButton from "../../comps/button";
import {CalendarList} from 'react-native-calendars';
import DatePicker from '../../comps/datepicker/DatePicker'


const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-around",
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
        width:"100%",
        bottom:0
    },
    calendar:{
        position:"absolute",
        bottom:150,
        width:370,
        height:294,
        backgroundColor:"#ECECEC",
        borderRadius:31,
        zIndex:1
    },
    datePicker: {
        width: 150,
        // display: "flex",
        // flexDirection: "row"
    },
    bodycontainer: {
        position: "relative",
        top: 100,
    }
})

export default function LeagueSchedule(){


    return<View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <MyHeader  head="League Schedule"/>
            </View>
        </View>

        {/* Inputs */}
        <ScrollView style={styles.bodycontainer}>
            <View>
                <DatePicker title={"Start Date"} style={styles.datePicker}/>
            </View>

            

            <View>
                <DatePicker title={"End Date"} style={styles.datePicker}/>
            </View>

        </ScrollView>

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