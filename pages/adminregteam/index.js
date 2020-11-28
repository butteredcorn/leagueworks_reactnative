import React, {useState, useReducer, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, AsyncStorage} from "react-native";
import {Redirect, useLocation} from 'react-router-native'
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
    }
})

export default function TeamReg(){
    const data = useLocation()
    const leagueID = data.state
    const [page, updatePage] = useState({redirect: false})
    const [user, update] = useState("")

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    const redirect = () => {
        updatePage({redirect: !page.redirect, path: "/teams", leagueID: leagueID})
    }

    useEffect(() => {
        try {
            update(getUser)
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
            captain: true
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
                return team
            case 'thumbnail_link':
                team.thumbnail_link = action.value
                return team
            default:
                throw new Error('Issue with reducer in team registration.')
        }
    }

    const [team, dispatch] = useReducer(reducer, initialState)

    async function createTeam() {
        try {
            const access_token = (user._W.access_token)
            const user_id = user._W.user_id

            dispatch({type: "captain_id", value: user_id})

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

return page.redirect ? <Redirect to={{pathname: page.path, state: page.leagueID}}></Redirect> : <View style={styles.container}>

    <View style={{
        flexDirection:"row",
    }}> 
        {/* Top */}
        <TouchableOpacity>
        <Image style={{
            height:22,
            width:13,
            position:"absolute",
            top:45,
            left:-25
        }}
        source={require ("../../public/backarrow.png")}/>
        </TouchableOpacity>
        <MyProgressBar/>
    </View>

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
        bottom:-87
    }}>
        <TouchableOpacity>
        <MyLargeButton 
        text="Create Team"
        onPress={createTeam}
        />
        </TouchableOpacity>
    </View>    


</View>
}