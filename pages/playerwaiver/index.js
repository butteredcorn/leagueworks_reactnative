import React from "react";
import {View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import MyCheck from "../../comps/Check";
import MyLargeButton from "../../comps/buttonlarge";

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    form:{
        backgroundColor:"#F6F6F6",
        width:291,
        height:309,
        padding:30,
        paddingTop:20,
        borderRadius:25
    },
    agree:{
        flexDirection:"row",
        justifyContent:"center",
        margin:20
    },
    waiverBox: {
        width: "75%",
        height: "55%",
        borderRadius: 25,
        backgroundColor: "#F6F6F6",
        marginTop: 20,

    },
    waiverText: {
        maxWidth:"80%",
        maxHeight: "80%",
        marginLeft: 10,
        marginTop: 10
    }
});

export default function PlayerWaiver(){
return<View style={styles.container}>

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
        source={require ("../../public/arrow.svg")}/>
        </TouchableOpacity>
        <MyProgressBar/>
    </View>

    <View style={[{
        position:"absolute",
        top:78,
    },styles.container]}>
        {/* Header */}
        <MyHeader 
        head="Create Waiver Form"
        />
    </View>

    <View style={styles.waiverBox}><Text style={styles.waiverText}>Waiver that is written by admin goes here.</Text></View>

    <View style={styles.agree}>
        <MyCheck />
        <Text style={{
            fontSize:10,
            position:"relative",
            bottom:-10
        }}>
                Yes, I read and agreed to all of the terms and conditions.
        </Text>
    </View>

    <View style={{
        position:"absolute",
        bottom:"-15%"
    }}>
        <MyLargeButton 
        text="Finish Registration"
        />
    </View>


</View>
}