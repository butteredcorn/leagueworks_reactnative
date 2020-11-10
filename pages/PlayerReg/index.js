import React from "react";
import {View, StyleSheet, Image} from "react-native";
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
    }
})

export default function PlayerReg () {
    return <View>
        <View style={styles.topCont}>
            <MyProgressBar></MyProgressBar>
            <MyHeader head="Player Registration"></MyHeader>
            <Avatar img={require("../../public/girl2.png")}></Avatar>
        </View>
        <View style={styles.bottomCont}>
            <View style={styles.inputMargin}>
                <Input text="Name"></Input>
            </View>
            <View style={styles.inputMargin}>
                <Input text="Email or ID Number"></Input>
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
