import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView} from "react-native";
import {Redirect, useLocation} from 'react-router-native'
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



export default function Teams(){

    const data = useLocation()
    //console.log(data.state) //league_id

    const [page, reload] = useState({redirect: false})

    const redirectTeamReg = () => {
        //pass on the league_id to the team registration view
        reload({redirect: !page.redirect, path: "/team-registration", leagueID: data.state})
    }

return page.redirect ? <Redirect to={{pathname: page.path, state: page.leagueID}}></Redirect> : <View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>Teams</Text>
        <TouchableOpacity onPress={redirectTeamReg} >
                <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
        </TouchableOpacity>   
    </View>
    <View style={styles.pillcont}>
        <View style={styles.pillMargin}>
            <TouchableOpacity>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
            </TouchableOpacity>
        </View>
        <View style={styles.pillMargin}>
            <TouchableOpacity>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
            </TouchableOpacity>
        </View>
        <View style={styles.pillMargin}>
            <TouchableOpacity>
            <MyPill img={require("../../public/girl.jpg")}></MyPill>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
    <View style={styles.navigation}><NavBar /></View>
</View>

}