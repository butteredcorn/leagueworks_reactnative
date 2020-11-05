import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const MyCalendar = () => {
    return(
        <CalendarList
        style={{
            width:"100%",
            height:307,
            backgroundColor:"#ECECEC",
            borderRadius:31,
        }}
        theme={{
            calendarBackground:"#ECECEC",
            todayTextColor:"#F35B04",
            textDayFontWeight:"bold",
            textMonthFontWeight:"bold",
            textDayHeaderFontWeight:"bold",
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
  showScrollIndicator={true}
/>
    )
}

export default MyCalendar;