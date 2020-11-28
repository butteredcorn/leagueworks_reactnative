import React, {useEffect, useState} from "react";
import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Text, AsyncStorage} from "react-native";
import {CalendarList} from 'react-native-calendars';
import { Link, useHistory, Redirect } from "react-router-native";
import EventSection from "../../comps/EventSection";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import * as axios from 'react-native-axios'
import { globals } from '../../globals'

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:"120%"
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
    },
    edit:{
        position:"relative",
    },
    calendar:{
        position:"relative",
        bottom:-75,
        width:370,
        height:294,
        backgroundColor:"#ECECEC",
        borderRadius:31,
    },
    event:{
        position:"relative",
        bottom:-107
    },
    navigation:{
        zIndex:1,
        position:"absolute",
        bottom:0
      }
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
*/

export default function Schedule(){
    const history = useHistory()
    const [user, updateUser] = useState("")
    const [userSchedule, updateUserSchedule] = useState({loading: true, data: []})
    const [page, update] = useState({redirect: false})

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

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
                console.log(result.data)
                return result.data
            }
        } catch (err) {
            console.log(err)
        }
    }

    const loadPage = async() => {
        const user = await getUser()
        updateUser(user)
        const userSchedule = await getUserSchedule(user)
        updateUserSchedule({loading: false, data: userSchedule})
    }

    useEffect(() => {
        loadPage()
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
        <CalendarList 

        theme={{
            calendarBackground: '#F8F8F8',
            textDayFontWeight:"bold",
            todayTextColor:"#F35B04",
            textMonthFontWeight:"bold",
            textDayHeaderFontWeight:"bold"
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

        <View style={styles.event}>
            <EventSection eventName="Game at BCIT" eventTime="9:00AM - 11:00AM" eventLocation="Burnaby, BC" eventDesc="Don't forget the ID!"/>
        </View>
    </ScrollView>
    <View style={styles.navigation}><NavBar active={2}/></View>
</View>
        



    
}