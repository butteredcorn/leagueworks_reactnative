import React, {useState} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import MyHeader from "../../comps/header";
import NavBar from "../../comps/navbar";
import Input from "../../comps/input";
import MyButton from "../../comps/button";
import {Calendar} from 'react-native-calendars';
import {useHistory} from "react-router-native";

const styles = StyleSheet.create({
    container:{
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
    buttons:{
        position:"absolute",
        bottom:100,
        flexDirection:"row"
    },
    navbar:{
        position:"absolute",
        width:"100%",
        bottom:0
    },
    calendar:{
        position:"absolute",
        bottom:150,
        width:320,
        height:320,
        zIndex:1
    }
})

export default function CreateEvent(){
    const [selected, setSelected] = useState(true);
    const history = useHistory();

    return<View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <View style={styles.pagetitle}>
                <MyHeader  head="Create Event"/>
            </View>
        </View>

        {/* Inputs */}
        <View style={styles.date}>
            <Input text="Pick a Date"placeholder="00/00/0000" width={200}/>
            <TouchableOpacity onPress={()=> setSelected(!selected)}>
            <Image style={styles.drop} source={require("../../public/drop.png")}/>
            </TouchableOpacity>
        </View>

        {selected ? (
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
            fontWeight:"bold"
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
        ) : null}

        <View style={styles.info}>
            <View style={styles.timerange}>
                <Input width={150} text="Start Time" placeholder="Enter Start Time"/>
                <Input width={150} text="End Time" placeholder="Enter End Time"/>
            </View>
            <Input text="Pick a Place" placeholder="Enter Location"/>
            <Input text="Event Title" placeholder="Enter Event Name"/>
            <Input text="Event Description" placeholder="Enter Description"/>


        </View>

        {/* Button */}

        <View style={styles.buttons}>
        
        <TouchableOpacity onPress={() => {history.push("/");}}>
            <MyButton text="Cancel" bgcolor="#333"/>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <MyButton text="Create"/>
        </TouchableOpacity>


        </View>

        {/* Nav Bar */}

        <View style={styles.navbar}>
            <NavBar />
        </View>

    </View>
}