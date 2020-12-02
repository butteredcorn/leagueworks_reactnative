import React, { useState, useReducer, useEffect } from "react";
import {View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, Image, AsyncStorage} from "react-native";
import { Redirect, useLocation, useHistory } from 'react-router-native'
import * as axios from 'react-native-axios'

import { globals } from '../../globals'

import MyHeader from "../../comps/header";
import Avatar from "../../comps/Avatar";
import Input from "../../comps/input";
import MyLargeButton from "../../comps/buttonlarge";


const styles = StyleSheet.create({

    Cont:{
        height:"100%",
    },
    topCont: {
        justifyContent: "center",
        textAlign:"left",
        width:"100%", 
        paddingTop:7
    },
    container:{
        alignItems:"center",
        position: "relative",
        height: "100%",
    },
    topCont: {
        alignItems: "center",
    },
    bottomCont: {
        alignItems: "center",
        marginTop: 10
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
        height: 45,
        fontFamily:"Ubuntu-Bold"
    },
    headercont:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-evenly",
        width: "90%",
        height: 45,
        marginTop: 50,
        marginBottom: 15,
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
    }
})

export default function CreatePost ({}) {
    const [page, update] = useState({redirect: false})
    const data = useLocation()
    const user = data.state.user
    const fullUser = data.state.fullUser

    const initialState = {
        user_id: user.user_id,
        username: `${fullUser.first_name} ${fullUser.last_name}`,
        user_profile_thumbnail: fullUser.thumbnail_link,
        title: "",
        description: "",
        thumbnail_link: "",
        league_id: ""//need to get reference for this
    }

    const [post, dispatch] = useReducer(reducer, initialState)
    

    function reducer(post, action) {
        switch(action.type) {
            case 'title':
                post.title = action.value
                return post
            case 'description':
                post.description = action.value
                return post
            case 'thumbnail_link':
                post.thumbnail_link = action.value
                return post
            default:
                throw new Error('Issue with reducer in create post.')
        }
    }

    //also need reference to league_id
    async function createPost(user) {
        try {
            //${globals.webserverURL}
            const access_token = user.access_token
            const result = await axios.post(`${globals.webserverURL}/database/create/post`, {
                post: post,
                access_token: access_token
            })
            if(result.data.error) {
                console.log(result.data.error)
                alert(result.data.error)
            } else {
                console.log(result.data)
                redirectHome()
            }
        } catch (err) {
            console.log(err)
        }
    } 

    const redirectHome = () => {
        update({redirect: !page.redirect, path: "/"})
    }

    const loadPage = async () => {

        console.log(user)
    }

    const history = useHistory();


    useEffect(() => {
        try {
            loadPage()
        } catch (err) {
            console.log(err)
        }
    }, [])

    return page.redirect ? <Redirect to={'/'}></Redirect> : <View style={styles.container}>
    <ScrollView>
        <View style={styles.headercont}>
            <TouchableOpacity 
                onPress={() => {
                history.push("/");
                }}>
            <Image source={require("../../public/backarrow.png")} />
        </TouchableOpacity>
        <Text style={styles.pageName}>Create Post</Text>
    </View>

        <View style={styles.topCont}>
            <Avatar img={require("../../public/girl2.png")}></Avatar>
        </View>
        <View style={styles.bottomCont}>
            

            <View style={styles.inputMargin}>
            <Input
            text="Title"
            placeholder="Title"
            setValue={(text) => dispatch({type: "title", value: text})}
            />
            </View>  

            <View style={styles.inputMargin}>
            <Input
            text="Description"
            placeholder="Description"
            setValue={(text) => dispatch({type: "description", value: text})}
            />
            </View>   

            <View style={styles.inputMargin}>
            <Input
            text="Image Link"
            placeholder="Image Link"
            setValue={(text) => dispatch({type: "thumbnail_link", value: text})}
            />
            </View>   
                   
            
            <View style={styles.buttonMargin}>
                <MyLargeButton text="Post Now!" onPress={() => createPost(user)}></MyLargeButton>
            </View>

        </View>
    </ScrollView>
    </View>
}
