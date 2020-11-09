import React from "react";
import {View, TextInput, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity} from "react-native";
import MyButton from "../../comps/button";

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ECECEC",
        width: 350,
        height:531,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:30,
    },
    text:{
        color:"#FD8700",
        fontWeight:"bold",
        marginBottom:15
    },
    icons:{
        height:30,
        width:30,
        resizeMode:"center",
        marginLeft:30,
        marginRight:30
    }
})

const PostNew = () => {
    return(
        <View style={styles.container}>
            
            <TextInput style={{
                backgroundColor:"#FFF",
                width:300,
                padding:10,
                borderRadius:7,
                marginBottom:20,
            }}
            placeholder="Title" />
            <TextInput style={{
                backgroundColor:"#FFF",
                width:300,
                height:262,
                padding:10,
                borderRadius:7,
            }}            
            multiline
            numberOfLines={5}
            placeholder="Type here..." />
            <View style={{flexDirection:"row", maxWidth:350, marginTop:20}}>
                {/* Icon 1 */}
                <TouchableOpacity>
                    <Image style={styles.icons} source={require("../../public/postbutton1.png")}/>

                </TouchableOpacity>
                
                {/* Icon 2 */}
                <TouchableOpacity>
                <Image style={styles.icons} source={require("../../public/postbutton2.png")}/>

                </TouchableOpacity>
                
                {/* Icon 3 */}
                <TouchableOpacity>
                <Image style={styles.icons} source={require("../../public/postbutton3.png")}/>

                </TouchableOpacity>
                
                {/* Icon 4 */}
                <TouchableOpacity>
                <Image style={styles.icons} source={require("../../public/postbutton4.png")}/>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:"row",
                maxWidth:350
            }}>
                <MyButton 

                text="Cancel"
                bgcolor="#333"
                />
                <MyButton 
                text="Post"
                />
            </View>
            



        </View>
    )
}

export default PostNew; 