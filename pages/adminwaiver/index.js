import React from "react";
import {TextInput, View, StyleSheet, TouchableOpacity, Image, Text} from "react-native";
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
    }
});

export default function AdminWaiver(){
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
        source={require ("../../public/backarrow.png")}/>
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

    <View>
        <TextInput multiline style={styles.form} placeholder="Type here..."/>
    </View>

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
        bottom:-120
    }}>
        <MyLargeButton 
        text="Finish Registration"
        />
    </View>


</View>
}