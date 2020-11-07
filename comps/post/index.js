import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import Avatar from "../Avatar";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECECEC",
        width:350,
        minHeight:400,
        maxHeight:600,
        borderRadius:25
    }
})

const Post = ()=> {

    

    return(
        <View style={styles.container}>
            <View style={{
                margin:20,
                maxWidth:350,
                flexDirection:"row",
                justifyContent:"center"
            }}>
                <Avatar/>
                <Text style={{
                    position:"relative",
                    left:-170,
                    bottom:-15,
                    fontWeight:"bold",
                    color:"#F35B04"
                }}>username</Text>
            </View>
            <View style={{
                margin:20,
                maxWidth:350,
            }}>
                <Text>Title</Text>
                <Text>Description</Text> 
            </View>
            <View>
                {/* image here */}
            </View>
            <View 
            style={{
                flexDirection:"row",
                position:"relative",
                maxWidth:350,
                bottom:-180,
                right:-32,
                maxWidth:300
            }}
            >
                <TouchableOpacity>
                <Image 
                source={require("../../public/heart.png")}
                style={{
                    width:30,
                    height:30,
                    resizeMode:"center",
                    marginRight:10
                }}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require("../../public/trash.png")}
                    style={{
                        width:30,
                        height:30,
                        resizeMode:"center"
                    }}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

Post.defaultProps = {
    username:"username"
}

export default Post;