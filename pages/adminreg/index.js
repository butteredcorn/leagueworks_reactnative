//DEPRECATED... player registration page merged with admin registration page --> UserReg


// import React from "react";
// import {View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
// import MyProgressBar from "../../comps/progress_bar";
// import MyHeader from "../../comps/header";
// import Avatar from "../../comps/Avatar";
// import Input from "../../comps/input";
// import MyLargeButton from "../../comps/buttonlarge";

// const styles = StyleSheet.create({
//     container:{
//         alignItems:"center"
//     },
//     scrollview:{
//         alignItems:"center",
//         height:"100%"
//     },
//     input:{
//         position:"absolute",
//         top:250,
//         alignItems:"center"
//     },
//     name:{
//         flexDirection:"row"
//     },
//     next:{
//         position:"relative",
//         bottom:0
//     }
// })


// export default function AdminReg(){
// return<ScrollView contentContainerStyle={styles.scrollview}>
//     <View>
//         {/* Top */}
//         <MyProgressBar/>
//     </View>
//     <View style={styles.container}>
//         {/* Header and Avatar */}
//         <MyHeader 
//         head="Admin Registration"
//         />
//         <Avatar />
//     </View>

//     <View style={styles.input}>
//         {/* First and Last Name */}
//         <View style={styles.name}>
//         <Input 
//         text="First Name"
//         placeholder="First Name"
//         width={130}
//         />
//         <Input 
//         text="Last Name"
//         placeholder="Last Name"
//         width={130}/>
//         </View>
        
//         <Input 
//         text="Email"
//         placeholder="Email"
//         />
//         <Input 
//         text="Phone"
//         placeholder="Phone"
//         />
//         {/* <Input 
//         text="ID"
//         placeholder="ID"
//         /> */}
//         <Input 
//         text="Password"
//         placeholder="Password"
//         />
//     <TouchableOpacity style={styles.next}>
//     <MyLargeButton text="Next"/>
//     </TouchableOpacity>
//     </View>

//     </ScrollView>
// }