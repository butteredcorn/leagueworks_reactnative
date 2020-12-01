import React, { Component, useEffect, useState } from "react";
import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import Avatar from "../Avatar";

const styles = StyleSheet.create({
    container:{
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
    }
})

const Post = ({Username, Title, Description, img, delete_auth, calllike, calldelete, likes, user_id})=> {
    const [userLikes, updateUserLikes] = useState(false)
    
    useEffect(() => {
        if(likes.includes(user_id)) {
            updateUserLikes(true)
        }
    },[])

    return(
        <View style={styles.container}>
            <View style={{
                margin:20,
                maxWidth:350,
                flexDirection:"row",
                justifyContent:"center",
                position: "relative",
                left: -80
            }}>
                <Avatar dim={45} style={styles.topCont}/>
                <Text style={{
                    position:"relative",
                    left:0,
                    bottom:-15,
                    marginLeft: 20,
                    fontFamily:"Ubuntu-Bold",
                    color:"#F35B04"
                }}>{Username}</Text>
            </View>
            <View style={{
                margin:20,
                maxWidth:350,
                position: "relative",
                left: -38
            }}>


                {/* Title */}
                <Text style={{
                    fontFamily:"Ubuntu-Bold",
                    color:"#333333",
                    marginTop: -10,
                    paddingLeft:30
                }}>{Title}</Text>

                {/* Description */}
                <Text style={{
                    color:"#333333",
                    paddingLeft:30,
                    fontFamily:"Ubuntu-Light"
                }}>{Description}</Text> 
            </View>


            {/* Image */}
            <View style={styles.imgCont}>
                <Image source={img} style={styles.img} resizeMode="cover"/>
            </View>





                <View style={styles.buttonCont}>
                    <TouchableOpacity onPress={calllike}>
                    <Image 
                    source={userLikes ? require("../../public/redheart.png") : require("../../public/heart.png")}
                    style={{
                        width:30,
                        height:30,
                        resizeMode:"contain",
                    }}
                    />
                    </TouchableOpacity>

                    {delete_auth && <TouchableOpacity onPress={calldelete}>
                        <Image 
                        source={require("../../public/trash.png")}
                        style={{
                            width:30,
                            height:30,
                            resizeMode:"contain"
                        }}
                        />
                    </TouchableOpacity>}
                </View>

        </View>
    )
}

Post.defaultProps = {
    username:"username"
}

export default Post;