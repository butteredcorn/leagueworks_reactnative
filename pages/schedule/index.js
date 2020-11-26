import React, {useState} from "react";
import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Text, AsyncStorage} from "react-native";
import {CalendarList} from 'react-native-calendars';
import { Link, Redirect} from "react-router-native";
import EventSection from "../../comps/EventSection";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";

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

export default function Schedule(){
    const [page, update] = useState({redirect: false})


    return page.redirect ? <Redirect to={{pathname: page.path, state: page}}></Redirect> : <View>
    <ScrollView contentContainerStyle={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <Text style={styles.pageName}>Schedule</Text>
            </View>
            
            
            {/* <Link to="/createevent" style={styles.edit} component={TouchableOpacity}>
                <Image source={require("../../public/edit.png")}/>
            </Link> */}
            <TouchableOpacity>
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
    <View style={styles.navigation}><NavBar /></View>
</View>
        



    
}