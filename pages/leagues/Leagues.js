import React,{ useState, useEffect } from "react";
import {Redirect} from 'react-router-native'
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, AsyncStorage} from "react-native";
import * as axios from 'react-native-axios'
import { globals } from '../../globals'


import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import MyPill from "../../comps/leaguePill";
import MyButton from "../../comps/button";

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
    leagueview:{
        justifyContent:"center",
        flexDirection:"row",
        marginBottom:20
    },
    navigation:{
        zIndex:1,
        position:"absolute",
        bottom:0
      }
});

export default function Leagues(){
    const [page, update] = useState({redirect: false})
    const [user, updateUser] = useState("")
    const [userLeagues, updateUserLeagues] = useState({loading: true, data: []})

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    async function getUserLeagues(user) {
        const result = await axios.post(`${globals.webserverURL}/database/read/userleagues`, {
            user: {
                user_id: user.user_id
            },
            access_token: user.access_token
        })
        return result.data

        // [
        // {"_id": "5fb9cf9965f84d0017928887", "email": "best league", "league_name": null, "phone_number": "best league", "sport_type": "basketball"},
        // {"_id": "5fb9db257bfc86001752d031", "email": "league2@email.com", "league_name": null, "phone_number": "1", "sport_type": "basketball"}
        // ]
    }

    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            console.log(user)
            const userLeagues = await getUserLeagues(user)
            console.log(userLeagues)
            updateUserLeagues({loading: false, data: userLeagues})
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        try {
            loadPage()
        } catch (err) {
            console.log(err)
        }
    }, [])


    const redirectTeams = (league) => {
        update({redirect: !page.redirect, path: "/teams", leagueID: league})
    }

    const redirectLeagueReg = () => {
        update({redirect: !page.redirect, path: "/league-registration"})
    }

return page.redirect ? <Redirect to={{pathname: page.path, state: page.leagueID}}></Redirect> : <View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>Your Leagues</Text>
        <TouchableOpacity onPress={redirectLeagueReg}>
            <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
        </TouchableOpacity>
    </View>

    <View style={styles.leagueview}>
        <MyButton text="All Leagues" bgcolor="#F35B04"/>
        <MyButton text="My Leagues"/>
    </View>
    <View style={styles.pillcont}>

        
        {!userLeagues.loading && Array.isArray(userLeagues.data) ? 
        // <Text>{JSON.stringify(userLeagues.data)}</Text>
        userLeagues.data.map(league => 
            <View style={styles.pillMargin}>
            <TouchableOpacity onPress={() => redirectTeams(league._id)}>
                <MyPill leagueID={league._id} leagueName={league.league_name} email={league.email} phoneNumber={league.phone_number} sportType={league.sport_type} img={require("../../public/girl.jpg")}></MyPill>
            </TouchableOpacity>
            </View>   
        ) 
        : <Text>Loading</Text>}
        
    </View>
    </ScrollView>
    <View style={styles.navigation}><NavBar /></View>
</View>

}