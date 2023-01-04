import { View, Text } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen, green } from './Constants'
import { useNavigation } from '@react-navigation/native'

const Home = (props) => {
    const navigation=useNavigation()
    console.log('navigation');
    return (
        <Background>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>

                <Text style={{ color: 'white', fontSize: 60 }}>Let's Start</Text>

                <Text style={{ color: 'white', fontSize: 60, marginBottom: 30 }}>Coding</Text>

                <Btn bgcolor={darkGreen} btnText="Login" btnTextColor='white' Press={() => props.navigation.navigate("Login")} />
                <Btn bgcolor={green} btnText="Register" btnTextColor='white' Press={() => props.navigation.navigate("Register")} />


            </View>
        </Background>
    )
}

export default Home