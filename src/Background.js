import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View style={{width:'100%',alignItems:'center'}}>
      <ImageBackground source={require("./assets/bg1.png")} style={{height:"100%",width:"100%"}}/>
      <View style={{position:"absolute"}}>
        {children}
      </View>

   
    </View>
  )
}

export default Background

