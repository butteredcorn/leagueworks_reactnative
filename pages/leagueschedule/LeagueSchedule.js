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
import {Picker} from '@react-native-picker/picker';


import * as axios from 'react-native-axios'
import { globals } from '../../globals'

const styles = StyleSheet.create({
    container:{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-around",
        alignItems:"center",
        justifyContent:"center",
        height:"100%"
    },
    header:{
        // position:"relative",
        // top:50,
        // flexDirection:"row",
        // alignItems:"center",
        // justifyContent:"center"
        flexDirection: "row",
        width: "100%",
        height: 45,
        marginTop: 50,
        marginBottom: 15,
    },
    pagetitle:{
        position:"relative",
        // left:-85
    },
    date:{
        // position:"absolute",
        // width: "100%",
        // bottom:450,
        backgroundColor:"#F8F8F8",
        // width:325,
        // padding:7,
        borderRadius:30,
        // flexDirection:"row",
        justifyContent:"center",
    },
    selectdate_cont:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
    },
    datePicker: {
        width: "50%",
        margin: 30
        // display: "flex",
        // flexDirection: "row"
    },
    drop:{
        position:"relative",
        // bottom:-20
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
        // position:"absolute",
        bottom:100,
        // right:45
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
    bodycontainer: {
        position: "relative",
        // top: 100,
    },
    day_check:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 15
    },
    spacer: {
        // Adds space to the bottom so you can see the content on the bottom of the scroll view without it being cutoff
        height: 120
    },
    boldtext:{
        fontWeight: "bold"
    },
    inputMargins:{
        marginBottom: 20
    },
    picker: {
        // alignSelf: "center",
        height: 50,
        width: 120,
        position: "relative",
        top: -85
    }
})

export default function LeagueSchedule(){

    //ToDO
    //create a view/create template, based on whether data from server is null
    
    const data = useLocation()
    const [user, update] = useState("")
    const [arenas, updateArenas] = useState({loading: true, data: []})
    const [numSetsPerweek, updateSetsPerWeek] = useState(false)
    const [numSetsPerOpponent, updateSetsPerOpponent] = useState(false)
    //if i didn't have to do the following, and could combine it into a reducer i would have. but after 4 hours of trying, i've determined it isn't possible.
    const [mondayArena, updateMonday] = useState('')
    const [mondayPicker, updateMondayPicker] = useState(false)
    const [tuesdayArena, updateTuesday] = useState('')
    const [tuesdayPicker, updateTuesdayPicker] = useState(false)
    const [wednesdayArena, updateWednesday] = useState('')
    const [wednesdayPicker, updateWednesdayPicker] = useState(false)
    const [thursdayArena, updateThursday] = useState('')
    const [thursdayPicker, updateThursdayPicker] = useState(false)
    const [fridayArena, updateFriday] = useState('')
    const [fridayPicker, updateFridayPicker] = useState(false)
    const [saturdayArena, updateSaturday] = useState('')
    const [saturdayPicker, updateSaturdayPicker] = useState(false)
    const [sundayArena, updateSunday] = useState('')
    const [sundayPicker, updateSundayPicker] = useState(false)

    const {_id, league_name, email, phone_number, sport_type, headline} = data.state

    //get the teams information on the server side*
    const initialState = {
        league_id: _id,
        season_start: new Date(Date.now()),
        //season_end: "", //optional hardstop
        match_number: 0,
        match_sets_per_week: 1,
        match_days: {monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false},
        skip_holidays: true,
        match_day_arenas: {monday: "", tuesday: "", wednesday: "", thursday: "", friday: "", saturday: "", sunday: ""}
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
                updateSetsPerOpponent(action.value)
                return season
            case 'match_sets_per_week':
                season.match_sets_per_week = action.value
                updateSetsPerWeek(action.value)
                return season
            case 'match_days': //ie. monday
                action.callpicker(!season.match_days[action.value]) //render state
                season.match_days[action.value] = !season.match_days[action.value] //actual data form
                console.log(season.match_days)
                return season
            case 'skip_holidays':
                season.skip_holidays = action.value
                return season
            case 'match_day_arenas':
                action.callarena(action.arena)//render state
                season.match_day_arenas[action.value] = action.arena //actual data form
                return season
            default:
                throw new Error('Issue with reducer in season creation.')
        }
    }

    async function createLeagueSchedule(user, season) {
        try {
            console.log(season)
            //console.log(user)
            //${globals.webserverURL}
            const access_token = user.access_token
            const result = await axios.post(`${globals.webserverURL}/database/create/schedule`, {
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

    async function getArenas(user) {
        try {
            //${globals.webserverURL}
            const access_token = user.access_token
            const result = await axios.post(`${globals.webserverURL}/database/read/arenas`, {
                access_token: access_token
            })
            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                return result.data
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

    const loadPage = async() => {
        const user = await getUser()
        update(user)
        const arenas = await getArenas(user)
        //console.log(arenas)
        updateArenas({loading: false, data: arenas})
    }

    useEffect(() => {
        try {
            loadPage()
            
        } catch (err) {
            console.log(err)
        }
    }, [])

    return<View style={styles.container}>

        {/* Inputs */}
        <ScrollView style={styles.bodycontainer}>
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <MyHeader  head="League Schedule"/>
                {league_name && <MyHeader  head={league_name}/>}
            </View>
        </View>

            <View>
            <View style={styles.selectdate_cont}>
                <DatePicker title={"Season Start Date"} style={styles.datePicker} setValue={(date) => dispatch({type: "season_start", value: date})}/>
            </View>
            {/* <View>
                <DatePicker title={"End Date"} style={styles.datePicker} setValue={(date) => dispatch({type: "season_end", value: date})}/>
            </View> */}
            <View style={styles.inputMargins}>
                <Input 
                text="Number of matches against each team"
                setValue={(text) => dispatch({type: "match_number", value: text})}
                />
            </View>
            <View style={styles.inputMargins}>
                <Input 
                text="Number of match sets played each week"
                setValue={(text) => dispatch({type: "match_sets_per_week", value: text})}
                /> 
            </View>
            <View style={styles.day_check}>
                <Text>Play On Holidays?</Text>
                <CheckBox
                    disabled={false}
                    value={!season.skip_holidays}
                    onValueChange={() => dispatch({type: "skip_holidays", value: !season.skip_holidays})}
                />
            </View> 
            </View>

            {<View>
            <Text style={styles.boldtext}>Play on which days?</Text>
                
                <View style={styles.day_check}>
                    <Text>Monday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.monday}
                        onValueChange={() => dispatch({type: "match_days", value: "monday", callpicker: updateMondayPicker})}
                    />
                </View>

                <View>
                    {mondayPicker && <Picker style={styles.picker}
                        selectedValue={mondayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "monday", callarena: updateMonday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>

                <View style={styles.day_check}>
                    <Text>Tuesday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.tuesday}
                        onValueChange={() => dispatch({type: "match_days", value: "tuesday", callpicker: updateTuesdayPicker})}
                    />
                </View>
                <View>
                    {tuesdayPicker && <Picker style={styles.picker}
                        selectedValue={tuesdayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "tuesday", callarena: updateTuesday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>
                <View style={styles.day_check}>
                    <Text>Wednesday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.wednesday}
                        onValueChange={() => dispatch({type: "match_days", value: "wednesday", callpicker: updateWednesdayPicker})}
                    />
                    
                </View>
                <View>
                    {wednesdayPicker && <Picker style={styles.picker}
                        selectedValue={wednesdayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "wednesday", callarena: updateWednesday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>
                <View style={styles.day_check}>
                    <Text>Thursday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.thursday}
                        onValueChange={() => dispatch({type: "match_days", value: "thursday", callpicker: updateThursdayPicker})}
                    />
                    
                </View>    
                <View>
                    {thursdayPicker && <Picker style={styles.picker}
                        selectedValue={thursdayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "thursday", callarena: updateThursday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>
                <View style={styles.day_check}>
                    <Text>Friday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.friday}
                        onValueChange={() => dispatch({type: "match_days", value: "friday", callpicker: updateFridayPicker})}
                    />
                    
                </View>    
                <View>
                    {fridayPicker && <Picker style={styles.picker}
                        selectedValue={fridayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "friday", callarena: updateFriday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>
                <View style={styles.day_check}>
                    <Text>Saturday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.saturday}
                        onValueChange={() => dispatch({type: "match_days", value: "saturday", callpicker: updateSaturdayPicker})}
                    />
                    
                </View>  
                <View>
                    {saturdayPicker && <Picker style={styles.picker}
                        selectedValue={saturdayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "saturday", callarena: updateSaturday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>
                <View style={styles.day_check}>
                    <Text>Sunday</Text>
                    <CheckBox
                        disabled={false}
                        value={season.match_days.sunday}
                        onValueChange={() => dispatch({type: "match_days", value: "sunday", callpicker: updateSundayPicker})}
                    />
                    
                </View>  
                <View>
                    {sundayPicker && <Picker style={styles.picker}
                        selectedValue={sundayArena}
                        onValueChange={(arena, index) => dispatch({type: "match_day_arenas", value: "sunday", callarena: updateSunday, index: index, arena: arena})}
                    >
                            <Picker.Item label="Pick Arena" value={""}></Picker.Item>
                    {!arenas.loading && Array.isArray(arenas.data) && arenas.data.map(arena =>
                            <Picker.Item key={arena._id} label={arena.name} value={arena.name} />
                    )}
                    </Picker>}
                </View>
                {/* weekdays end */}
            </View>}

            <View style={styles.spacer} />

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