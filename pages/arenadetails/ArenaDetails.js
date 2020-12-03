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
        justifyContent:"center",
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
        fontFamily:"Ubuntu-Bold"
    },
    navigation:{
        zIndex:1,
        // Not sure why but the position made everything on the page off-center
        // position:"absolute",
        bottom:0
    },
    arenaContainer:{
        backgroundColor:"#ECECEC",
        borderRadius:25,
        margin: "5%",
        alignItems: "center",
        justifyContent: "center"
    },
    imgCont:{
        width: "100%",
        minHeight: 200,
        maxHeight: 250,
        marginBottom:40
    },
    img:{
        width: "80%",
        minHeight: 200,
        maxHeight: 250,
        marginBottom:40,
        borderRadius: 25,
        margin: 10
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
        width: 300,
        margin: 10,
        marginBottom: 25
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 25,
    },
    marker: {
        width: 50,
        height: 50
    },
    heading: {
        width: "80%",
        fontSize: 24,
        marginTop: 25,
        fontFamily:"Ubuntu-Light"
    },
    address: {
        width: "80%",
        textAlign: "center",
        marginTop: 25,
        marginBottom: 5,
        fontFamily:"Ubuntu-Light"
    },
    spacer: {
        // Adds space to the bottom so you can see the content on the bottom of the scroll view without it being cutoff
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
            console.log(data.state)
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
    <View>
        <View style={styles.arenaContainer}>
            <Text style={styles.heading}>{arena.data.name}</Text>
            {/* arena.photos[0] */}
            <Image source={{uri: arena.data.photos[0]}} style={styles.img} resizeMode="cover"/>
        </View>

        <View style={styles.arenaContainer}>
        <Text style={styles.address}>{arena.data.address}</Text>
        <Text style={{fontFamily:"Ubuntu-Light"}}>{arena.data.phone_number}</Text>
        <View style={styles.mapCont}>
            <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={{latitude: arena.data.location.lat, longitude: arena.data.location.long, latitudeDelta: 0.05, longitudeDelta: 0.05}} showsUserLocation={true}>
            {/* {"lat": 49.2438697, "long": -123.1077187} */}
            <Marker style={styles.marker} coordinate={{latitude: arena.data.location.lat, longitude: arena.data.location.long}}
                title="this is a marker"
                description="this is a marker example"/>
            </MapView>
            </View>
        </View>
        {/* <Text>lat: {arena.data.location.lat} long: {arena.data.location.long}</Text> */}
    </View>}
    
    <View style={styles.spacer} />


    </ScrollView>
    <View style={styles.navigation}>
        <NavBar active={2} />
    </View>
    </View>
}