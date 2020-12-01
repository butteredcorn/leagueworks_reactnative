import React,{ useState, useEffect } from "react";
import {Redirect} from 'react-router-native'
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, AsyncStorage} from "react-native";
import * as axios from 'react-native-axios'

import { globals } from '../../globals'
import NavBar from "../../comps/navbar";
import Post from "../../comps/post"

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        justifyContent:"center"
    },
    // navbar: {
    //     position: "absolute",
    //     bottom: 0,
    //     width: "100%"
    // }, 
    header:{
        flexDirection: "row",
        width: "100%",
        height: 45,
        marginTop: 50,
        marginBottom: 15,
        // justifyContent: "space-between",
        paddingLeft: "5%"
    },
    pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
    },
    editIcon: {
        position: "relative",
        left: 170
    },
    navigation:{
        zIndex:1,
        // Not sure why but the position made everything on the page off-center
        // position:"absolute",
        bottom:0
      }
});


export default function Arenas(){
    const [page, update] = useState({redirect: false})
    const [user, updateUser] = useState("")

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }


    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            
            
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        try {
            loadPage()
        } catch (err) {
            console.log(err)
        }
    }, [])

return page.redirect ? <Redirect to={{pathname: page.path, state: {user: page.user, fullUser: fullUser}}}></Redirect> : <View>
    <ScrollView contentContainerStyles={styles.container}>
    
    <View style={styles.header}>
        <Text style={styles.pageName}>Arena Details</Text>
            <TouchableOpacity onPress={() => redirectCreatePost(user)}>
                <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
            </TouchableOpacity>   
    </View>
    
    </ScrollView>
    <View style={styles.navigation}>
        <NavBar active={0} />
    </View>
    </View>
}