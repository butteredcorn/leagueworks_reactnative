import React, { useEffect, useState } from 'react';
import {View, StyleSheet} from "react-native"
import {Picker} from '@react-native-picker/picker';

export default function DropDownBox({selectedValue, items, onValueChange}) {

    return (
        <View style={styles.container}>
        <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={onValueChange}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
        </View>
    )
}
