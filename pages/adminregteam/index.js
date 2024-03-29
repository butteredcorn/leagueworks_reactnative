import React, {useState, useReducer, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, AsyncStorage, ScrollView} from "react-native";
import {Redirect, useLocation, useHistory} from 'react-router-native'
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";
import Input from "../../comps/input";
import PlayerAdminInput from "../../comps/playeradmininput";
import Addbutton from "../../comps/addbutton";
import * as axios from 'react-native-axios'
import { globals } from '../../globals'


const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        paddingTop: 15
    }
})

export default function TeamReg(){
    const history = useHistory()
    const data = useLocation()
    const leagueID = data.state
    const [page, updatePage] = useState({redirect: false})
    const [user, update] = useState("")
    const [fullUser, updateFullUser] = useState({loading: true, data: {}})

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    const getFullUser = async (user) => {
        const result = await axios.post(`${globals.webserverURL}/database/read/user`, {
            user: {
                user_id: user.user_id
            },
            access_token: user.access_token
        })
        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            return result.data
        }
    }

    const redirect = () => {
        updatePage({redirect: !page.redirect, path: "/teams", leagueID: leagueID})
    }

    async function loadPage() {
        const user = await getUser()
        update(user)
        const fullUser = await getFullUser(user)
        updateFullUser(fullUser)
    }

    useEffect(() => {
        try {
            loadPage()
        } catch (err) {
            console.log(err)
        }
    }, [])

    const initialState = {
        league_id: leagueID,
        team_name: "",
        phone_number: "",
        email: "",
        captain_id: "",
        players: [{
            user_id: "",
            jersey_number: "",
            captain: true,
            first_name: "",
            last_name: "",
            thumbnail_link: ""
        }],
        thumbnail_link: ""
    }

    function reducer(team, action) {
        switch(action.type) {
            case 'team_name':
                team.team_name = action.value
                // console.log(user.first_name)
                return team
            case 'phone_number':
                team.phone_number = action.value
                return team
            case 'email':
                team.email = action.value
                return team
            case 'jersey_number':
                team.players[0].jersey_number = action.value
                return team
            case 'captain_id':
                team.captain_id = action.value
                team.players[0].user_id = action.value
                team.players[0].first_name = action.thisUser.first_name
                team.players[0].last_name = action.thisUser.last_name
                team.players[0].thumbnail_link = action.thisUser.thumbnail_link
                return team
            case 'thumbnail_link':
                team.thumbnail_link = action.value
                return team
            default:
                throw new Error('Issue with reducer in team registration.')
        }
    }

    const [team, dispatch] = useReducer(reducer, initialState)

    async function createTeam(user, fullUser) {
        try {
            const access_token = (user.access_token)
            const user_id = user.user_id

            dispatch({type: "captain_id", value: user_id, thisUser: fullUser})

            //console.log(team)

            const result = await axios.post(`${globals.webserverURL}/database/create/team`, {
                team: team,
                access_token: access_token
            })

            console.log(result.data)

            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                //result.data[0]._id //teammID
                redirect()
            }
        } catch (err) {
            console.log(err)
        }
    }

return page.redirect ? <Redirect to={{pathname: page.path, state: page.leagueID}}></Redirect> : <ScrollView><View style={styles.container}>

    <View style={{
        flexDirection:"row",
        width: "80%",
    }}> 
        {/* Top */}
        <TouchableOpacity onPress={() => {
                history.push("/leagues");
                }}>
        <Image style={{
            height:22,
            width:13,
            position:"absolute",
            top:45,
            left:-25
        }}
        source={require ("../../public/backarrow.png")}/>
        
        </TouchableOpacity>

    </View>
    <MyProgressBar/>
    <View style={[{
        position:"absolute",
        top:78
    },styles.container]}>
        {/* Header */}
        <MyHeader 
        head="Team Registration"
        />
    </View>

    <View style={{ marginBottom:15}}>
        <Input 
        text="Team Name"
        placeholder="Team Name"
        setValue={(text) => dispatch({type: "team_name", value: text})}
        />

    </View>

    <View style={{ marginBottom:15}}>
        <Input 
        text="Email"
        placeholder="Email"
        setValue={(text) => dispatch({type: "email", value: text})}
        />

    </View>

    <View style={{ marginBottom:15}}>
        <Input 
        text="Phone Number"
        placeholder="Phone Number"
        setValue={(text) => dispatch({type: "phone_number", value: text})}
        />
    </View>

    <View style={{ marginBottom:15}}>
        <Input 
        text="Photo Link"
        placeholder="Photo Link"
        setValue={(text) => dispatch({type: "thumbnail_link", value: text})}
        />
    </View>

    <View>
        {/* Switches */}
    </View>

    <View style={{ marginBottom:15}}>
        <Input 
        text="Your Jersey Number"
        placeholder="Jersey Number"
        setValue={(text) => dispatch({type: "jersey_number", value: text})}
        />

    </View>

    {/* <View>
        <PlayerAdminInput text="Your Jersey #"/>
        <PlayerAdminInput text="Player Jersey #"/>
    </View> */}

    <View style={{justifyContent:"center"}}>
        {/* <TouchableOpacity>
        <Addbutton text="Add Coach"/>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
        <Addbutton text="Add Another Player"/>
        </TouchableOpacity> */}
    </View>

    <View style={{
        position:"absolute",
        bottom:-80,
    }}>
        <TouchableOpacity>
        <MyLargeButton 
        text="Create Team"
        onPress={() => createTeam(user, fullUser)}
        />
        </TouchableOpacity>
    </View>    


</View>
</ScrollView>
}