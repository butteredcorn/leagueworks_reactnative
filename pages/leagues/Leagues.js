import React,{ useState, useEffect } from "react";
import {Redirect} from 'react-router-native'
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, AsyncStorage} from "react-native";
import * as axios from 'react-native-axios'
import { globals } from '../../globals'


import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import MyPill from "../../comps/leaguePill";
import Button from '../../comps/button'

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
    const [fullUser, updateFullUser] = useState("")
    const [userLeaguesOnly, updateSettings] = useState({setting: false, filter: true})
    const [allLeagues, updateAllLeagues] = useState({loading: true, data: []})

    const userLeagueFilter = userLeaguesOnly.setting ? (league) => league.user_league : () => true

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    async function joinLeague(leagueID) {
        try {
            const currentUserLeagues = fullUser.leagues
            const newUserLeagues = [...currentUserLeagues, leagueID]
            const result = await axios.post(`${globals.webserverURL}/database/update/user`, {
                user: {
                    user_id: user.user_id,
                    updates: {
                        leagues: newUserLeagues
                    }
                },
                access_token: user.access_token
            })
    
            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                console.log(result)
                alert("League Joined!")
            }
        } catch (err) {
            console.log(err)
        } finally {
            //reload after joining
            loadPage()
        }
    }

    async function getAllLeagues(user) {
        const fullUser = await axios.post(`${globals.webserverURL}/database/read/user`, {
            user: {
                user_id: user.user_id
            },
            access_token: user.access_token
        })
        updateFullUser(fullUser.data)
        const result = await axios.post(`${globals.webserverURL}/database/read/leagues`, {
            access_token: user.access_token
        })
        //somehow sort so user joined leagues are at the top
        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            //sort the array so that the logged-in user's team is at top...
            const leagues = result.data
            const userData = fullUser.data
            const userLeagueArray = userData.leagues
            // console.log(leagues)
            // console.log(fullUser.data)
            // console.log(userLeagueArray)

            const userLeagues = []
            const otherLeagues = []

            for(let league of leagues) {
                let userLeague = false
                for(let leagueID of userLeagueArray) {
                    if(league._id == leagueID) {
                        //signed in user's team
                        league.user_league = true
                        userLeagues.push(league)
                        userLeague = true
                        break;
                    }
                }
                if(!userLeague) {
                    league.user_league = false
                    otherLeagues.push(league)
                }

            }

            const sortedLeagues = userLeagues.concat(otherLeagues)

            console.log(sortedLeagues)
            return sortedLeagues
        }
    }

    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            // console.log(user)

            if (userLeaguesOnly.setting) {
                // const userLeagues = await getUserLeagues(user)
                // // console.log(userLeagues)
                // updateUserLeagues({loading: false, data: userLeagues})
            } else {
                const leagues = await getAllLeagues(user)
                updateAllLeagues({loading: false, data: leagues})
            }
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

    const redirectSchedule = (league) => {
        update({redirect: !page.redirect, path: "/league-schedule", leagueID: league})
    }

return page.redirect ? <Redirect to={{pathname: page.path, state: page.leagueID}}></Redirect> : <View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>{!userLeaguesOnly.setting ? "All Leagues" : "Your Leagues"}</Text>
        <TouchableOpacity onPress={redirectLeagueReg}>
            <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
        </TouchableOpacity>
    </View>
    <Button text={`${!userLeaguesOnly.setting ? "Your Leagues" : "All Leagues"}`} onPress={ () => updateSettings({setting: !userLeaguesOnly.setting, filter: !userLeaguesOnly.filter})}/>
    <View style={styles.pillcont}>

        {!allLeagues.loading && Array.isArray(allLeagues.data) ? 
        //these are already filtered for league joined by the user
        allLeagues.data.filter(userLeagueFilter).map(league => 
            <View style={styles.pillMargin}>
            <TouchableOpacity key={league._id} onPress={() => redirectTeams(league._id)}>
                <MyPill onPress={joinLeague} joined={league.user_league} redirect={redirectSchedule}  leagueID={league._id} leagueName={league.league_name} email={league.email} phoneNumber={league.phone_number} sportType={league.sport_type} headline={league.headline} img={require("../../public/girl.jpg")}></MyPill>
            </TouchableOpacity>
            </View>   
        ) 
        : <Text>Loading</Text>}
    </View>
    </ScrollView>
    <View style={styles.navigation}><NavBar /></View>
</View>

}