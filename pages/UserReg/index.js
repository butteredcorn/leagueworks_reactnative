import React, { useState, useReducer, useEffect } from "react";
import {View, ScrollView, StyleSheet, TextInput, Image, AsyncStorage} from "react-native";
import { Redirect, useLocation } from 'react-router-native'
import DatePicker from '../../comps/datepicker/DatePicker'

import * as axios from 'react-native-axios'

import { globals } from '../../globals'


import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";
import Text from '../../comps/Text';


const styles = StyleSheet.create({
    Cont:{
        height:"100%"
    },
    topCont: {
        justifyContent: "center",
        alignItems: "center",
    },
    bottomCont: {
        alignItems: "center",
        marginTop: 50
    },
    inputMargin: {
        marginBottom: 20
    },
    buttonMargin: {
        margin:20
    },
    name: {
        marginBottom: 20,
        flexDirection: "row"
    },
    passwordInput:{
        backgroundColor:"#F8F8F8",
        height:37,
        width:280,
        padding:12,
        borderRadius: 33
    },
    datePicker: {
        width: 280
    }
})

export default function UserReg ({token, setToken}) {

    const data = useLocation()
    //data.state holds player/admin context

    const initialState = {
        first_name: "",
        last_name: "",
        birth_date: "",
        thumbnail_link: "",
        phone_number: "",
        email: "",
        password: "",
        user_type: data.state
    }

    function reducer(user, action) {
        switch(action.type) {
            case 'first_name':
                user.first_name = action.value
                // console.log(user.first_name)
                return user
            case 'last_name':
                user.last_name = action.value
                return user
            case 'birth_date':
                user.birth_date = action.value
                return user
            case 'thumbnail_link':
                user.thumbnail_link = action.value
                console.log(action.value)
                return user
            case 'email':
                user.email = action.value
                return user
            case 'password':
                user.password = action.value
                return user
            default:
                throw new Error('Issue with reducer in userreg.')
        }
    }

    const [user, dispatch] = useReducer(reducer, initialState)

    async function signup() {
        try {
            // console.log('attempting to connect...' ${globals.webserverURL})
            const result = await axios.post(`${globals.webserverURL}/auth/signup`, {
                user: user
            })
            if(result.data.error) {
                if(result.data.error == "Email already taken.") alert(result.data.error)
                console.log(result.data.error)
            } else {
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
                await AsyncStorage.setItem("user_type", result.data.user_type, (err) => {
                    if(err) console.log(err)
                })
                //update state and rerender
                setToken({token: result.data.access_token, loggedin: true})
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(user)
    },[user])

    return token && token.token && token.loggedin ? <Redirect to="/"/> : <ScrollView>
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
            setValue={(text) => dispatch({type: "first_name", value: text})}
            />  
            <Input 
            text="Last Name"
            placeholder="Last Name"
            width={130}
            setValue={(text) => dispatch({type: "last_name", value: text})}

            />
            </View>

            {/* change to date picker */}
            <View style={styles.inputMargin}>
            <Text style={{fontWeight: "bold", marginBottom: 0}}>Birth Date</Text>
            <DatePicker
            style={styles.datePicker}
            title=""
            setValue={(date) => dispatch({type: "birth_date", value: date})}
            />
            </View> 

            <View style={styles.inputMargin}>
            <Input
            text="Photo Link"
            placeholder="Photo Link"
            setValue={(text) => dispatch({type: "thumbnail_link", value: text})}
            />
            </View>           

            <View style={styles.inputMargin}>
                <Input text="Email"
                    setValue={(text) => dispatch({type: "email", value: text})}
                ></Input>
            </View>
            <View style={styles.inputMargin}>
                {/* <Input text="Password"
                    setValue={(text) => dispatch({type: "password", value: text})}
                ></Input> */}
                <Text style={{ fontWeight:"bold"}}>Password</Text>
                <TextInput  secureTextEntry={true} placeholder="Password" style={styles.passwordInput}   setValue={(text) => dispatch({type: "password", value: text})}/>
            </View>
            <View style={styles.buttonMargin}>
                <MyLargeButton text="Sign Up" onPress={signup}></MyLargeButton>
            </View>

        </View>
    </ScrollView>
}
