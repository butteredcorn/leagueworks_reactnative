import React, {useEffect, useState} from "react";
import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Text, AsyncStorage} from "react-native";
import {Calendar} from 'react-native-calendars';
import { Link, useHistory, Redirect } from "react-router-native";
import EventSection from "../../comps/EventSection";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import * as axios from 'react-native-axios'
import { globals } from '../../globals'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        maxHeight:"500%"
    },
    header:{
        position:"relative",
        top:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width: "90%"
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
        height: 45,
        fontFamily:"Ubuntu-Bold",
    },
    edit:{
        position:"relative",
    },
    calendar:{
        position:"relative",
        bottom:-75,
        width:320,
        height:320,
    },
    event:{
        position:"relative",
        bottom:-107
    },
    navigation:{
        zIndex:1,
        position:"absolute",
        bottom:0
    },
    spacer: {
        // Adds space to the bottom so you can see the content on the bottom of the scroll view without it being cutoff
        height: 120
    },
})

/* //user schedule example, note that it is an array of schedules, could contain more than one.
[
  {
    _id: 5fc19e8ac7c409d3f32b2b25,
    league_id: '5fb9cf9965f84d0017928887',
    start_date: '2020-11-26T00:09:00.000Z',
    end_date: 2020-12-30T00:09:00.000Z,
    game_days: [ 'monday', 'tuesday' ],
    match_sets: {
      match_set_1: [Array],
      match_set_2: [Array],
      match_set_3: [Array],
      match_set_4: [Array],
      match_set_5: [Array]
    },
    game_dates: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    events: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    season_arenas: {
      monday: 'Hillcrest Community and Aquatics Centre',
      tuesday: 'Hillcrest Community and Aquatics Centre',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: ''
    },
    skip_holidays: false
  }
]

where each event looked like:
{
    summary: 'BC BBALL TEAM vs. BIG <DIV> ENERGY',
    home_team: 5fbf3ca3d82e7600171a073e,
    home_team_players: [ [Object] ],
    away_team: 5fbf3d1ed82e7600171a0740,
    away_team_players: [ [Object] ],
    start_date: '2020-12-29',
    arena: 'Hillcrest Community and Aquatics Centre',
    match_id: 5fc210c1c322d0eb0e4b1d04
  }
*/

export default function Schedule(){
    const history = useHistory()
    const [user, updateUser] = useState("")
    const [userSchedule, updateUserSchedule] = useState({loading: true, data: []})
    const [unifiedEvents, updateUnifiedEvents] = useState({loading: true, data: []})
    const [page, update] = useState({redirect: false})

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    //TODO
    //this currently returns whole league schedule for the user's leagues
    //also add a filter to reduce to just teams that the user is in
    async function getUserSchedule(user) {
        try {
            //${globals.webserverURL}
            const access_token = user.access_token
            const result = await axios.post(`${globals.webserverURL}/database/read/userSchedules`, {
                user: {
                    user_id: user.user_id
                },
                access_token: access_token
            })
            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                let unifiedEvents = []
                for(let schedule of result.data) {
                    if(schedule.events && schedule.events.length > 0) {
                        if(unifiedEvents.length == 0) {
                            unifiedEvents = schedule.events
                        } else {
                            unifiedEvents.concat(schedule.events)
                        }
                    }
                }
                unifiedEvents.sort((eventA, eventB) => {
                    const upcomingEvent = new Date(eventA.start_date) < new Date(eventB.start_date) ? eventA : eventB
                    return upcomingEvent
                })
                return {userSchedule: result.data, unifiedEvents: unifiedEvents}
            }
        } catch (err) {
            console.log(err)
        }
    }

    const redirectArenas = (arena) => {
        update({redirect: !page.redirect, path: "/arenas", arena: arena})
    }

    const redirectMatchEdit = (match_id) => {
        update({redirect: !page.redirect, path: "/match-edit", match_d: match_id})
    }

    const loadPage = async() => {
        const user = await getUser()
        updateUser(user)
        const {userSchedule, unifiedEvents} = await getUserSchedule(user)
        updateUserSchedule({loading: false, data: userSchedule})
        updateUnifiedEvents({loading: false, data: unifiedEvents})
        console.log(unifiedEvents.slice(0, 3))
    }

    useEffect(() => {
        loadPage()
        setTimeout(() => {
            console.log(unifiedEvents.data.slice(0,2))
        }, 2500)
    }, [])

    return page.redirect ? <Redirect to={{pathname: page.path, state: page}}></Redirect> : <View>

    <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <Text style={styles.pageName}>Schedule</Text>
            </View>

            
            

            <TouchableOpacity style={styles.edit}  onPress={() => {history.push("/createevent");}}>
            {/* <Link to="/createevent" style={styles.edit} component={TouchableOpacity}>
                <Image source={require("../../public/edit.png")}/>
            </Link> */}
                <Image source={require("../../public/edit.png")}/>
            </TouchableOpacity>


        
        </View>

        {/* Calendar */}

        <View style={styles.calendar}>
        <Calendar
        
        theme={{
            calendarBackground: '#F8F8F8',
            textDayFontFamily:"Ubuntu-Bold",
            todayTextColor:"#F35B04",
            textMonthFontFamily:"Ubuntu-Bold",
            textDayHeaderFontFamily:"Ubuntu-Bold",
            selectedDayBackgroundColor:"#F35B04",
            arrowColor:"#F35B04",
        }}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}/>
        </View>

        {/* Event List */}

        {!unifiedEvents.loading && Array.isArray(unifiedEvents.data) && unifiedEvents.data.slice(0, 10).map(event =>
        <View style={styles.event}>
            <EventSection key={event.match_id} match_id={event.match_id} redirect={redirectArenas} redirect2={redirectMatchEdit} key={`${event.home_team} ${event.away_team}`} eventName={event.summary} eventTime={event.start_date} eventLocation={event.arena} editable={true}/>
        </View>
        )}

        <View style={styles.spacer} />
        <View style={styles.spacer} />

        

    </ScrollView>
    
  <View style={styles.navigation}><NavBar active={2}/></View>
</View>
        



    
}