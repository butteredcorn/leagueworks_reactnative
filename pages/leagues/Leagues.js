import React,{ useState, useEffect } from "react";
import {Redirect} from 'react-router-native'
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
    header:{
        flexDirection: "row",
        width: "100%",
        height: 45,
        marginTop: 50,
        marginBottom: 15,
        paddingLeft: "5%"
    },
    editIcon: {
        position: "relative",
        left: -25
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
        
    },
    navigation:{
        zIndex:1,
        position:"absolute",
        bottom:0
      }
});

export default function Leagues(){
    const [page, update] = useState({redirect: false})

    const redirectTeams = () => {
        update({redirect: !page.redirect, path: "/teams"})
    }

    const redirectLeagueReg = () => {
        update({redirect: !page.redirect, path: "/league-registration"})
    }

return page.redirect ? <Redirect to={page.path}></Redirect> : <View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>Leagues</Text>
        <TouchableOpacity onPress={redirectLeagueReg}>
            <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
        </TouchableOpacity>
    </View>
    <View style={styles.pillcont}>

        <View style={styles.pillMargin}>
        <TouchableOpacity onPress={redirectTeams}>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
        </TouchableOpacity>   
        </View>
        
    </View>
    </ScrollView>
    <View style={styles.navigation}><NavBar /></View>
</View>

}