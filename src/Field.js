import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { darkGreen } from './Constants'

const Field = (props) => {
    return (
        <TextInput {...props} style={{ borderRadius: 100, color: darkGreen,width:350,backgroundColor:'yellow', paddingHorizontal: 20 ,marginVertical:10}} placeholderTextColor={darkGreen}>

        </TextInput>
    )
}

export default Field