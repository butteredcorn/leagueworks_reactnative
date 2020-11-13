import React from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import MyProgressBar from "../../comps/progress_bar";
import MyHeader from "../../comps/header";
import MyLargeButton from "../../comps/buttonlarge";
import Input from "../../comps/input";
import PlayerAdminInput from "../../comps/playeradmininput";
import Addbutton from "../../comps/addbutton";

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
    }
})

export default function AdminRegTeam(){
return<View style={styles.container}>

    <View style={{
        flexDirection:"row",
    }}> 
        {/* Top */}
        <TouchableOpacity>
        <Image style={{
            height:22,
            width:13,
            position:"absolute",
            top:45,
            left:-25
        }}
        source={require ("../../public/backarrow.png")}/>
        </TouchableOpacity>
        <MyProgressBar/>
    </View>

    <View style={[{
        position:"absolute",
        top:78
    },styles.container]}>
        {/* Header */}
        <MyHeader 
        head="Team Registration"
        />
    </View>

    <View style={{ marginBottom:15}}>
        <Input 
        text="Team Name"
        placeholder="Team Name"
        />

    </View>

    <View>
        {/* Switches */}
    </View>

    <View>
        <PlayerAdminInput text="Admin" number="1.   "/>
        <PlayerAdminInput text="Coach" number="2.   "/>
        <PlayerAdminInput text="Player #" number="3.   "/>
    </View>

    <View style={{justifyContent:"center"}}>
        <TouchableOpacity>
        <Addbutton />
        </TouchableOpacity>
        <TouchableOpacity>
        <Addbutton text="Add Coach"/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Addbutton text="Add Player"/>
        </TouchableOpacity>
    </View>

    <View style={{
        position:"absolute",
        bottom:-87
    }}>
        <TouchableOpacity>
        <MyLargeButton 
        text="Next"
        />
        </TouchableOpacity>
    </View>    


</View>
}