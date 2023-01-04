import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Background from './Background'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Btn from './Btn'
import { darkGreen } from './Constants'
import { useNavigation } from '@react-navigation/native'

const Mainpage = () => {

  const navigation = useNavigation()

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('USERID')
      if (value !== null) {
        console.log('hi my id is:' + value)
      }
    } catch (e) {
      // error reading value
    }
  }

  const logOut = async () => {
    try {
      await AsyncStorage.clear()
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }

  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    getData()
  },[]);

  return (
    <View>
      <Background>
        <Text style={{ color: 'white' }}>
          Main Page
        </Text>
        <Btn bgcolor={darkGreen} btnText="Logout" btnTextColor='white' Press={() => {
          logOut()
        }} />
      </Background>
    </View>
  )
}

export default Mainpage