import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from './Background'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Intro = () => {
    const navigation = useNavigation()
    console.clear()
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 3000)
    }, [])

    const getData = async () => {
        try {
            const userId = await AsyncStorage.getItem('USERID')
            console.log('My final' + userId)

            if (userId != null || userId != undefined) {
                console.log('My Mainpage')
                navigation.navigate('Mainpage')
            } else {
                console.log('My Home')
                navigation.navigate('Home')
            }

        } catch (e) {
            // error reading value
        }
    }





    return (
        <Background>

        </Background>
    )
}

export default Intro