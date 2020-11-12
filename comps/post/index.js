import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import Avatar from "../Avatar";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ECECEC",
        width:"90%",
        minHeight:400,
        maxHeight:600,
        borderRadius:25,
        margin: 10
    }
})

const Post = ({Username, Title, Description})=> {

    

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
                }}>{Username}</Text>
            </View>
            <View style={{
                margin:20,
                maxWidth:350,
            }}>

                {/* Title */}
                <Text style={{
                    fontWeight:"bold",
                    color:"#333333"
                }}>{Title}</Text>

                {/* Description */}
                <Text style={{
                    color:"#333333"
                }}>{Description}</Text> 
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


                <View style={{flexDirection:"row", justifyContent:"space-between", width:"90%"}}>
                    <TouchableOpacity>
                    <Image 
                    source={require("../../public/heart.png")}
                    style={{
                        width:30,
                        height:30,
                        resizeMode:"contain",
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
                            resizeMode:"contain"
                        }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

Post.defaultProps = {
    username:"username"
}

export default Post;