import React, { Component } from "react";
import {View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from "react-native";


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
            <View>
            </View>
            <View>
                {/* <Text>Title</Text>
                <Text>Description</Text> */}
            </View>
            <View>
                {/* image here */}
            </View>
            <View 
            style={{
                flexDirection:"row",
                position:"relative",
                bottom:-343,
                right:-32,
                maxWidth:350
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