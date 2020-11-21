import React, { Component, useState } from "react";
import {Redirect} from 'react-router-native';
import { Button, Image, StyleSheet, Text, TextInput, View, AsyncStorage } from "react-native";

import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";
import Input from "../../comps/input";

import { globals } from '../../globals'
//const { webserverURL } = globals
import * as axios from 'react-native-axios'


import Logo from "../../public/Logo1.png";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:455,
        justifyContent:"space-between",
        top:70
    },

})

export default function Login({setToken}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //test@test.com, //best_password
    async function login() {
        try {
            const result = await axios.post(`${globals.webserverURL}/auth/login`, {
                user: {
                    email: email,
                    password: password
                }
            })
            if (result.data.error) {
                console.log(result.data.error)
                alert("Incorrect email/password combination.")
            } else {
                //take _id, access_token, expiry and save it somewhere useful
                console.log(result.data)
                await AsyncStorage.setItem("user_id", result.data._id, (err) => {
                    if(err) console.log(err)
                })
                await AsyncStorage.setItem("access_token", result.data.access_token, (err) => {
                    if(err) console.log(err)
                })
                await AsyncStorage.setItem("access_token_expiry", result.data.expiry, (err) => {
                    if(err) console.log(err)
                })
                //console.log(setToken)
                //update state and rerender
                setToken({token: result.data.access_token, loggedin: true})
            }
        } catch (err) {
            console.log(JSON.stringify(err.message))
        }
    }


    return <View style={styles.container}>

        <Image source={Logo}></Image>

        <View>
        <Input text="Email" value={email} setValue={setEmail}/>
        </View>


        <View>
        <Input text="Password" value={password} setValue={setPassword}/>
        </View>


        <MyLargeButton text="Login" onPress={login}/>

    </View>
}