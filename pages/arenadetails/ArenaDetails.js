import React,{ useState, useEffect } from "react";
import {Redirect, useLocation } from 'react-router-native'
import {View, StyleSheet, TouchableOpacity, Image, Text, ScrollView, AsyncStorage} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import * as axios from 'react-native-axios'

import pin from '../../public/location.png'

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
    },
    arenaContainer:{
        backgroundColor:"#ECECEC",
        width:319,
        minHeight:400,
        maxHeight:600,
        borderRadius:25,
        margin: 10,
        position: "relative",
        alignItems: "center"
    },
    imgCont:{
        width: "100%",
        minHeight: 200,
        maxHeight: 250,
        marginBottom:40
    },
    img:{
        width: "100%",
        minHeight: 200,
        maxHeight: 250,
        marginBottom:40
    },
    buttonCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        position: "absolute",
        bottom: 20
    },
    mapCont: {
        height: 300,
        width: 300
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    marker: {
        width: 50,
        height: 50
    }
});



export default function Arenas(){
    const [user, updateUser] = useState("")
    const [arena, updateArena] = useState({loading: true, data: {}})

    const data = useLocation()
    const arenaName = data.state.arena

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    async function getArenaDetails(user, arenaName) {
        console.log(arenaName)
        const result = await axios.post(`${globals.webserverURL}/database/read/arenaByName`, {
            arena: {
                name: arenaName,
            },
            access_token: user.access_token
        })
      
        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            return result.data
        }
    }

    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            const arenaDetails = await getArenaDetails(user, arenaName)
            updateArena({loading: false, data: arenaDetails})
            console.log(arenaDetails)
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

return <View>
    <ScrollView contentContainerStyles={styles.container}>
    
    <View style={styles.header}>
        <Text style={styles.pageName}>Arena Details</Text>
    </View>
    
    {!arena.loading && typeof arena.data == 'object' &&
    <View style={styles.arenaContainer}>
        <Text>{arena.data.name}</Text>
        {/* arena.photos[0] */}
        <Image source={{uri: 'https://s3-media0.fl.yelpcdn.com/bphoto/F8-wSk_FseiYtVShXPw18Q/348s.jpg'}} style={styles.img} resizeMode="cover"/>
        <Text>{arena.data.address}</Text>
        <Text>{arena.data.phone_number}</Text>
        <View style={styles.mapCont}>
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={{latitude: arena.data.location.lat, longitude: arena.data.location.long, latitudeDelta: 0.05, longitudeDelta: 0.05}} showsUserLocation={true}>
            {/* {"lat": 49.2438697, "long": -123.1077187} */}
            <Marker style={styles.marker} coordinate={{latitude: arena.data.location.lat, longitude: arena.data.location.long}}
                title="this is a marker"
                description="this is a marker example"/>
            </MapView>
        </View>
        {/* <Text>lat: {arena.data.location.lat} long: {arena.data.location.long}</Text> */}
    </View>}
    


    </ScrollView>
    <View style={styles.navigation}>
        <NavBar active={0} />
    </View>
    </View>
}