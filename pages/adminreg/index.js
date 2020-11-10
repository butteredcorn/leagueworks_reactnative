import React from "react";
import {View, StyleSheet} from "react-native";
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    }
})


export default function AdminReg(){
return <View style={styles.container}>
    <View>
        {/* Top */}
        <MyProgressBar/>
    </View>
    <View style={styles.container}>
        {/* Header and Avatar */}
        <MyHeader 
        head="Admin Registration"
        />
        <Avatar />
    </View>

    <View>
        {/* First and Last Name */}
        <Input 
        text="Last Name"
        placeholder="Name Name"
        />
    </View>

</View>
}