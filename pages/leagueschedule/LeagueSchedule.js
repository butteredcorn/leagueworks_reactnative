import React, {useState, useReducer, useEffect} from "react";
import {Redirect, useLocation} from 'react-router-native'
import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, AsyncStorage} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import Input from "../../comps/input";
import MyButton from "../../comps/button";
import {CalendarList} from 'react-native-calendars';
import DatePicker from '../../comps/datepicker/DatePicker'
import CheckBox from '@react-native-community/checkbox'
import * as axios from 'react-native-axios'
import { globals } from '../../globals'

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

    //ToDO
    //create a view/create template, based on whether data from server is null
    
    const data = useLocation()
    const [user, update] = useState("")
    const {_id, league_name, email, phone_number, sport_type, headline} = data.state

    //get the teams information on the server side*
    const initialState = {
        league_id: _id,
        season_start: new Date(Date.now()),
        //season_end: "", //optional hardstop
        match_number: 0,
        match_days: {monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false},
        skip_holidays: true,
        season_arenas: []
    }

    const [season, dispatch] = useReducer(reducer, initialState)

    function reducer(season, action) {
        switch(action.type) {
            case 'season_start':
                season.season_start = action.value
                console.log(season.season_start)
                return season
            //optional hard stop
            // case 'season_end':
            //     season.season_end = action.value
            //     return season
            case 'match_number':
                season.match_number = action.value
                return season
            case 'match_days': //ie. monday
                season.match_days[action.value] = !season.match_days[action.value]
                //console.log(season.match_days)
                return season
            case 'skip_holidays':
                season.skip_holidays = action.value
                return season
            case 'season_arenas':
                season.season_arenas = action.value
                return season
            default:
                throw new Error('Issue with reducer in season creation.')
        }
    }

    async function createLeagueSchedule(user, season) {
        try {
            //${globals.webserverURL}
            const access_token = user._W.access_token
            const result = await axios.post(`http://localhost:5000/database/create/schedule`, {
                season: season,
                access_token: access_token
            })
            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                console.log(result.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

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

    return<View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <MyHeader  head="League Schedule"/>
                {league_name && <MyHeader  head={league_name}/>}
            </View>
        </View>

        {/* Inputs */}
        <ScrollView style={styles.bodycontainer}>
            <View>
                <DatePicker title={"Start Date"} style={styles.datePicker} setValue={(date) => dispatch({type: "season_start", value: date})}/>
            </View>
            {/* <View>
                <DatePicker title={"End Date"} style={styles.datePicker} setValue={(date) => dispatch({type: "season_end", value: date})}/>
            </View> */}
            <View>
                <Input 
                text="Number of matches against each team"
                setValue={(text) => dispatch({type: "match_number", value: text})}
                /> 
            </View>
            <View>
                <View>
                    <Text>Play on which days?</Text>
                    <Text>Monday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.monday}
                        onValueChange={() => dispatch({type: "match_days", value: "monday"})}
                    />
                </View>  
                <View>
                    <Text>Tuesday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.tuesday}
                        onValueChange={() => dispatch({type: "match_days", value: "tuesday"})}
                    />
                </View>
                <View>
                    <Text>Wednesday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.wednesday}
                        onValueChange={() => dispatch({type: "match_days", value: "wednesday"})}
                    />
                </View>
                <View>
                    <Text>Thursday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.thursday}
                        onValueChange={() => dispatch({type: "match_days", value: "thursday"})}
                    />
                </View>    
                <View>
                    <Text>Friday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.friday}
                        onValueChange={() => dispatch({type: "match_days", value: "friday"})}
                    />
                </View>    
                <View>
                    <Text>Saturday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.saturday}
                        onValueChange={() => dispatch({type: "match_days", value: "saturday"})}
                    />
                </View>  
                <View>
                    <Text>Sunday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.sunday}
                        onValueChange={() => dispatch({type: "match_days", value: "sunday"})}
                    />
                </View>  
            </View>
            {/* weekdays end */}
            <View>
                <Text>Play On Holidays?</Text>
                <CheckBox
                    disabled={false}
                    value={!season.skip_holidays}
                    onValueChange={() => dispatch({type: "skip_holidays", value: !season.skip_holidays})}
                />
            </View>  

        </ScrollView>

        {/* Button */}
        <TouchableOpacity style={styles.button}>
            <MyButton text="Create" onPress={() => createLeagueSchedule(user, season)}/>
        </TouchableOpacity>

       

        {/* Nav Bar */}
        <View style={styles.navbar}>
            <NavBar />
        </View>

    </View>
}