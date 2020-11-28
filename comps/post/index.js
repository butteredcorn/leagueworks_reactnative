import React, { Component } from "react";
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
        minHeight: 100,
        maxHeight: 175,
    },
    img:{
        width: "100%",
        minHeight: 100,
        maxHeight: 175
    },
    buttonCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        position: "absolute",
        bottom: 20
    }
})

const Post = ({Username, Title, Description, img, delete_auth, onPress})=> {

    

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
                    fontWeight:"bold",
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
                    fontWeight:"bold",
                    color:"#333333",
                    marginTop: -10
                }}>{Title}</Text>

                {/* Description */}
                <Text style={{
                    color:"#333333"
                }}>{Description}</Text> 
            </View>


            {/* Image */}
            <View style={styles.imgCont}>
                <Image source={img} style={styles.img} resizeMode="cover"/>
            </View>





                <View style={styles.buttonCont}>
                    <TouchableOpacity>
                    <Image 
                    source={require("../../public/heart.png")}
                    style={{
                        width:30,
                        height:30,
                        resizeMode:"contain",
                    }}
                    />
                    </TouchableOpacity>

                    {delete_auth && <TouchableOpacity onPress={onPress}>
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