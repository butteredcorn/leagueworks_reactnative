import React from "react";
import {View, StyleSheet, Image} from "react-native";
import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";

const styles = StyleSheet.create({
    bigCont: {
        alignItems: "center",
        height: "100%"
    },
    logo: {
        marginTop: 100,
        width: 120,
        height: 120,
    },
    buttonMargin: {
        marginTop: 70
    },
    headerMargin: {
        marginTop: 70
    }
    
})


export default function FinishPlayerReg() {
    return <View style={styles.bigCont}>
        <Image style={styles.logo}
              source={require("../../public/logo.png")}
        ></Image>
        <View style={styles.headerMargin}>
            <MyHeader head="You’re all signed up!"></MyHeader>
        </View>
        <View style={styles.buttonMargin}>
            <MyLargeButton text="Log in"></MyLargeButton>
        </View>
        <View style={styles.buttonMargin}>
            <MyLargeButton text="Back to Getting Started"></MyLargeButton>
        </View>
    </View>
}