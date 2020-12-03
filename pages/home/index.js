import React,{ useState, useEffect } from "react";
import {Redirect} from 'react-router-native'
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, AsyncStorage} from "react-native";
import * as axios from 'react-native-axios';
import { globalStyles } from "../../styles/global";

import { globals } from '../../globals'
import NavBar from "../../comps/navbar";
import Post from "../../comps/post";
import Text from '../../comps/Text';

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
      pageName:{
        fontSize: 36,
        fontWeight: "bold",
        color: "#333333",
        height: 45,
        fontFamily:"Ubuntu-Bold",
    },
    edit:{
        position:"relative",
        right: -13
    },
});


export default function Home(){
    const [page, update] = useState({redirect: false})
    const [posts, updatePosts] = useState({loading: true, data: []})
    const [liked, updateLiked] = useState(false)
    const [fullUser, updateFullUser] = useState({loading: true, user: {}})
    const [user, updateUser] = useState("")

    const getUser = async () => {
        const rawToken = await AsyncStorage.getItem('access_token')  
        const rawID = await AsyncStorage.getItem('user_id')
        return {access_token: rawToken, user_id: rawID}
    }

    async function getFullUser(user) {
        const result = await axios.post(`${globals.webserverURL}/database/read/user`, {
            user: {
                user_id: user.user_id,
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

    async function getAllPosts(user){
        const result = await axios.post(`${globals.webserverURL}/database/read/posts`, {
            access_token: user.access_token
        })
        if(result.data.error) {
            console.log(result.data.error)
            alert(result.data.error)
        } else {
            for (let post of result.data) {
                if (post.user_id == user.user_id) {
                    post.delete_auth = true; //auth to render delete button, still check serverside auth
                }
            }
            return result.data
        }
    }

    async function likePost(user, post_id) {
        const result = await axios.post(`${globals.webserverURL}/database/like/post`, {
            post: {
                user_id: user.user_id,
                post_id: post_id
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

    const redirectCreatePost = (user) => {
        update({redirect: !page.redirect, path: "/create-post", user: user})
    }

    async function loadPage() {
        try {
            const user = await getUser()
            updateUser(user)
            const fullUser = await getFullUser(user)
            updateFullUser(fullUser)
            const posts = await getAllPosts(user)
            console.log(posts[0])
            updatePosts({loading: false, data: posts})
            
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
        <Text style={styles.pageName}>Home</Text>
            <TouchableOpacity onPress={() => redirectCreatePost(user)} style={styles.edit}>
                <Image  source={require("../../public/edit.png")} style={styles.editIcon}/>
            </TouchableOpacity>   
    </View>
    {!posts.loading && Array.isArray(posts.data) && posts.data.map(post => 
        <View style={{alignItems:"center"}}>
        <Post 
        key={post._id}
        user_id={user.user_id}
        user_profile_thumbnail={post.user_profile_thumbnail}
        calllike={() => likePost(user, post._id)}
        likes={post.likes}
        delete_auth={post.delete_auth}
        Username={post.username}
        Title={post.title} 
        Description={post.description}
        img={{uri: post.thumbnail_link}} />
        </View>
    )}
    </ScrollView>
    <View style={styles.navigation}>
        <NavBar active={0} />
    </View>
    </View>
{/* 
    <View  style={styles.navbar}>
        <NavBar />
    </View> */}


}