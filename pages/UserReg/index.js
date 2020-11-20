import React from "react";
import {View, StyleSheet, Image} from "react-native";
import { useLocation } from 'react-router-native'
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";


const styles = StyleSheet.create({
    topCont: {
        justifyContent: "center",
        alignItems: "center",
    },
    bottomCont: {
        alignItems: "center",
        marginTop: 130
    },
    inputMargin: {
        marginBottom: 20
    },
    buttonMargin: {
        marginTop: 20
    },
    name: {
        marginBottom: 20,
        flexDirection: "row"
    }
})

export default function UserReg (props) {

    const data = useLocation()
    //data.state holds player/admin context

    return <View>
        <View style={styles.topCont}>
            <MyProgressBar></MyProgressBar>
            <MyHeader head={`${data.state == "admin" ? "Admin" : "Player"} Registration`}></MyHeader>
            <Avatar img={require("../../public/girl2.png")}></Avatar>
        </View>
        <View style={styles.bottomCont}>
            <View style={styles.name}>
            <Input 
            text="First Name"
            placeholder="First Name"
            width={130}
            />  
            <Input 
            text="Last Name"
            placeholder="Last Name"
            width={130}
            />          
            </View>
            <View style={styles.inputMargin}>
                <Input text="Email"></Input>
            </View>
            <View style={styles.inputMargin}>
                <Input text="Password"></Input>
            </View>
            <View style={styles.buttonMargin}>
                <MyLargeButton text="Next"></MyLargeButton>
            </View>

        </View>
    </View>
}
