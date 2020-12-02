import React from 'react'
import {Text, StyleSheet} from 'react-native'

const MyText = ({style, ...props})=>{
    return <Text style={[style, styles.font]} {...props}>{props.children}</Text>
}

const styles= StyleSheet.create({
    font:{
        fontFamily:"Ubuntu"
    }
})

export default MyText