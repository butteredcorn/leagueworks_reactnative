import React, {useState, useReducer, useEffect} from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, AsyncStorage, ScrollView} from "react-native";
import {Redirect, useLocation, useHistory} from 'react-router-native'
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";
import Input from "../../comps/input";
import PlayerAdminInput from "../../comps/playeradmininput";
import Addbutton from "../../comps/addbutton";
import NavBar from "../../comps/navbar"
import * as axios from 'react-native-axios'
import { globals } from '../../globals'


const styles = StyleSheet.create({
    container:{
        // position: "relative",
        height: "100%",
        width:  380,
        justifyContent:"center",
        alignItems: "center"
        
    },
    edits:{
        fontFamily:"Ubuntu-Light"
    }
})

export default function MatchEdit(){
    const data = useLocation()
    const history = useHistory()
    const match_id = data.state
    const [page, updatePage] = useState({redirect: false})
    const [user, update] = useState("")

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    useEffect(() => {
        try {
            update(getUser)
        } catch (err) {
            console.log(err)
        }
    }, [])

    const initialState = {
        
    }

    function reducer(event, action) {
        switch(action.type) {
            case 'team_name':
                team.team_name = action.value
                // console.log(user.first_name)
                return event
            
            default:
                throw new Error('Issue with reducer in team registration.')
        }
    }

    const [event, dispatch] = useReducer(reducer, initialState)

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

return page.redirect ? <Redirect to={{pathname: page.path, state: page}}></Redirect> : <View style={styles.container}>


    {/* <View style={{
        // flexDirection:"row",
    }}>  */}
        {/* Top */}
        {/* <TouchableOpacity>
        <Image style={{
            height:22,
            width:13,
            position:"absolute",
            top:45,
            left:-25
        }}
        source={require ("../../public/backarrow.png")}/>
        </TouchableOpacity> */}
    {/* </View> */}
    <ScrollView contentContainerStyle={styles.container}>
    <View style={[{
        position:"absolute",
        top:-80
    },styles.container]}>
        {/* Header */}
        <View>

        
        <TouchableOpacity onPress={() => {
                history.push("/schedule");
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

        <MyHeader 
        head="Match Edit"
        />
        </View>
    </View>

    <View style={{ marginBottom:15}}>
        {/* need reference to winning team/losing team, home team/away team */}
        <Text style={styles.edits}>Set Winner</Text>
        
    </View>

    <View style={{ marginBottom:15}}>
        <Text style={styles.edits}>Change Start Date</Text>

    </View>

    <View style={{ marginBottom:15}}>
        <Text style={styles.edits}>Change Event Location</Text>
        {/* <Input 
        text="Phone Number"
        placeholder="Phone Number"
        setValue={(text) => dispatch({type: "phone_number", value: text})}
        /> */}
    </View>

    <View>
        {/* Switches */}
    </View>

    <View style={{justifyContent:"center"}}>
        
    </View>

    <View style={{
        position:"absolute",
        bottom:20
    }}>
        <TouchableOpacity>
        <MyLargeButton 
        text="Update Match"
        onPress={null}
        />
        </TouchableOpacity>
    </View>    
    </ScrollView>
    <View style={styles.navigation}>
        <NavBar active={0} />
    </View>
</View>
}