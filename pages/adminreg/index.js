import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    }
})


export default function AdminReg(){
return <View style={styles.container}>

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
        top:78
    },styles.container]}>
        {/* Header */}
        <MyHeader 
        head="Admin Registration"
        />
    </View>

    <Avatar />

    <View style={{
        position:"relative",
        bottom:-55,
        flexDirection:"row"
    }}>
        {/* First and Last Name */}
        <Input 
        text="Last Name"
        placeholder="Last Name"
        width={130}
        />
        <Input 
        text="First Name"
        placeholder="First Name"
        width={130}
        />
    </View>
    
    <View style={{
        position:"relative",
        bottom:-70,
        }}>
        <Input 
        text="Email"
        placeholder="Email"
        />
        <Input 
        text="Phone"
        placeholder="Phone"
        />
        <Input 
        text="ID"
        placeholder="ID"
        />
        <Input 
        text="Password"
        placeholder="Password"
        />
    </View>
    <View style={{
        position:"absolute",
        bottom:-170
    }}>
        <Link to="/adminregteam">
        <MyLargeButton 
        text="Next"
        />
        </Link>
    </View>

</View>
}