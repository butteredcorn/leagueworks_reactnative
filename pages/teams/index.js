import React,{ useState, useEffect } from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, AsyncStorage} from "react-native";
import {Redirect, useLocation} from 'react-router-native'
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import MyPill from "../../comps/Teampill";
import * as axios from 'react-native-axios'

import { globals } from '../../globals'

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
    const league_id = data.state

    const [teams, updateTeams] = useState({loading: true, data: []})
    const [teamsRosters, updateTeamsRoster] = useState({loading: true, teams: {}})
    const [teamsWithRosters, updateTWR] = useState({loading: true, data: []})
    const [user, updateUser] = useState("")
    const [page, reload] = useState({redirect: false})

    const redirectTeamReg = () => {
        //pass on the league_id to the team registration view
        reload({redirect: !page.redirect, path: "/team-registration", leagueID: data.state})
    }

    //need to add jerseyNumber functionality
    async function joinTeam(teamID, players, jerseyNumber) {
        try {
            const updatedPlayers = [...players, {captain: false, jersey_number: null, user_id: user.user_id}]
            const result = await axios.post(`${globals.webserverURL}/database/update/team`, {
                team: {
                    team_id: teamID,
                    updates: {
                        players: updatedPlayers
                    }
                },
                access_token: user.access_token
            })

            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                console.log(result)
                alert("Team Joined!")
            }
        } catch (err) {
            console.log(err)
        } finally {
            loadPage()
        }
    }

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    async function getTeamsByLeague(user) {
        const result = await axios.post(`${globals.webserverURL}/database/read/leagueteams`, {
            league: {
                league_id: league_id
            },
            access_token: user.access_token
        })
        //console.log(result.data)

        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            //sort the array so that the logged-in user's team is at top
            const teams = result.data
            const userTeams = []
            const otherTeams = []

            for(let team of teams) {
                let userTeam = false
                for(let player of team.players) {
                    if(player.user_id == user.user_id) {
                        //signed in user's team
                        team.user_team = true
                        userTeams.push(team)
                        userTeam = true
                        break;
                    }
                }
                if(!userTeam) {
                    otherTeams.push(team)
                }

            }

            // console.log(userTeams)
            // console.log(otherTeams)

            const sortedTeams = userTeams.concat(otherTeams)

            console.log(sortedTeams)

            return sortedTeams
        }
    }

    async function getTeamsRosters(user, teams){
        const result = await axios.post(`${globals.webserverURL}/database/read/teamsplayers`, {
            teams: {
                teams: teams
            },
            access_token: user.access_token
        })
        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            console.log(result.data)
            return result.data
        }
    }

    //one last thing, get roster for each team
    async function loadPage() {
        const user = await getUser()
        updateUser(user)
        const leagueTeams = await getTeamsByLeague(user)
        updateTeams({loading: false, data: leagueTeams})

        //example
        // const rosterExample = leagueTeams[0].players
        // console.log(rosterExample)

        const teamsRosters = await getTeamsRosters(user, leagueTeams)
        updateTeamsRoster({loading: false, teams: teamsRosters})
        //console.log(teamsRosters)

        for (let leagueTeam of leagueTeams) {
            leagueTeam.players = teamsRosters[leagueTeam._id]
        }
        updateTWR({loading: false, data: leagueTeams})

        //example
        // console.log(leagueTeams)
        // console.log(leagueTeams[0].players)
    }

    useEffect(()=> {
        try {
            loadPage()
        } catch (err) {
            console.log(err)
        }
    }, [])

return page.redirect ? <Redirect to={{pathname: page.path, state: page.leagueID}}></Redirect> : <View>
    <ScrollView contentContainerStyles={styles.container}>
    <View style={styles.header}>
        <Text style={styles.pageName}>Teams</Text>
        <TouchableOpacity onPress={redirectTeamReg} >
                <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
        </TouchableOpacity>   
    </View>
    <View style={styles.pillcont}>

    {!teamsWithRosters.loading && Array.isArray(teamsWithRosters.data) ? 
        //<Text>{JSON.stringify(teams.data)}</Text>
        teamsWithRosters.data.map(team => 
            <View style={styles.pillMargin}>
                <MyPill onPress={joinTeam} joined={team.user_team} teamID={team._id} TeamName={team.team_name} email={team.email} phoneNumber={team.phone_number} team_captain={team.team_captain} players={team.players} userTeam={team.user_team} img={require("../../public/girl.jpg")}></MyPill>
            </View>   
        ) 
        : <Text>Loading</Text>}

    </View>
    </ScrollView>
    <View style={styles.navigation}><NavBar /></View>
</View>

}