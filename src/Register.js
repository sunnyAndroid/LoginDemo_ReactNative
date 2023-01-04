import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Background from './Background'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Register = () => {

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('USERID')
      if(value !== null) {
        console.log('hi my id is:'+value)
      }
    } catch(e) {
      // error reading value
    }
  }

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
    // Update the document title using the browser API
    getData()
  });
  
  return (
    <View>
      <Background>
        <Text style={{color:'white'}}>
          hi i am register
        </Text>
      </Background>
    </View>
  )
}

export default Register