import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({ bgcolor, btnText, btnTextColor, Press }) => {
    return (
        <TouchableOpacity onPress={Press} style={{ backgroundColor: bgcolor, borderRadius: 60, width: 350, height: 40, alignItems: 'center', paddingVertical: 8 ,marginVertical:10}}>
            <Text style={{ color: btnTextColor, fontSize: 16, fontWeight: 'bold' }}>{btnText}</Text>

        </TouchableOpacity>
    )
}

export default Btn