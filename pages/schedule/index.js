import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {CalendarList} from 'react-native-calendars';
import EventSection from "../../comps/EventSection";
import MyHeader from "../../comps/header";

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
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
        left:-78
    },
    edit:{
        position:"relative",
        right:-90
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
    }
})

export default function Schedule(){
    return<View style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <MyHeader  head="Schedule"/>
            </View>
            <TouchableOpacity style={styles.edit}>
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
            <EventSection />
        </View>



    </View>
}