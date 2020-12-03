import React from 'react'
import {Text, StyleSheet} from 'react-native'

const MyText = ({style, ...props})=>{
    return <Text style={[style, styles.fontBold]} {...props}>{props.children}</Text>
}

const styles= StyleSheet.create({
    fontBold:{
        fontFamily:"Ubuntu"
    }
})

export default MyText