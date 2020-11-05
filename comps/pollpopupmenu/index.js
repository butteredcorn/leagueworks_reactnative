import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

import MyButton from "../button";

const styles = StyleSheet.create({
    container: {
      position: "relative",
      width: "100%",
      height: "100%",
    },

    pollView: {
        alignItems: "center",
        backgroundColor: "#ececec",
        width: "100%",
        height: 540,
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50   
    },

    line: {
        backgroundColor: "#333333",
        width: 65,
        height: 10,
        borderRadius: 10,
        marginTop: 25
    },

    header: {
        marginTop: 40,
        // font stuff is just for testing... 
        fontSize: 18,
        fontWeight: "bold"
    },

    optionCont: {
        marginTop: 20,
        width: 295,
        height: 250,
        justifyContent: "space-evenly"

    },

    btnCont: {
        flexDirection: "row",
        width: 230,
        justifyContent: "space-between"
    }

  })

const PollPopUp = () => {
    
    return <View style={styles.container}>
        <View style={styles.bottomView, styles.pollView}>
            <View style={styles.line} />
            <Text style={styles.header}>Create Poll</Text>
             {/* Ask a question */}
            <TextInput style={{marginTop: 40, width: 295, height: 40, borderBottomWidth: 1, borderBottomColor: "#333333", fontWeight: "200"}}>Ask a question...</TextInput>
            {/* Options */}
            <View style={styles.optionCont}>
                <TextInput style={{width: "100%", backgroundColor: "#f8f9fa", height: 50, borderRadius: 50, padding: 20}} >Option 1...</TextInput>
                <TextInput style={{width: "100%", backgroundColor: "#f8f9fa", height: 50, borderRadius: 50, padding: 20}} >Option 2...</TextInput>
                <TextInput style={{width: "100%", backgroundColor: "#f8f9fa", height: 50, borderRadius: 50, padding: 20}} >Option 3...</TextInput>
            </View>
            {/* Buttons */}
            <View style={styles.btnCont}>
                <MyButton text="Cancel" cancel="true" />
                <MyButton text="Create" />
            </View>
        </View>
    </View>
}

export default PollPopUp;