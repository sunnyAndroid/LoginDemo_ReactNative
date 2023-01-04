import { Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import Background from './Background'
import { baseURL, darkGreen, green } from './Constants'
import Field from './Field'
import Btn from './Btn'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Config from 'react-native-config'

const Login = () => {
    
    //const apiKey = process.env['BASEURL'];
    console.log(Config.BASE_URL)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userId, setUserId] = useState("")

    const navigation = useNavigation()

    const saveEmailPass = async () => {
        try {
            console.log('dd' + userId)
            await AsyncStorage.setItem('USERID', userId);

            navigation.navigate('Mainpage')
        } catch (error) {
            console.log(error)
        }

    }



    // for calling login API
    const postAPI = () => {
        console.log(process.env.BASEURL)
        axios({
            method: 'POST',
            url: `${baseURL}bar-login`,
            headers: { "content-type": "multipart/form-data" },
            responseType: "json",
            data: {
                email: email,
                password: password,
                login_platform: '12',
                os_version: '12',
                application_version: '1.0',
                fcm_token: '123456789'
            }
        }).then(res => {
            console.log(res);
             setUserId(res.data.response.login_platform.toString());

            saveEmailPass()

        }).catch(error => {
            const { message, success } = error.response.data;
            alert(message)
            console.log(message);

        })
    }
    return (
        
        <View>
            <Background>
                <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>

                    <Text style={{
                        fontSize: 40,
                        color: "white",
                        marginVertical: 10,
                        fontWeight: 'bold'
                    }}>Login</Text>

                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        height: 700,
                        width: 430,
                        marginTop: 20,
                        marginBottom: 100,
                        borderTopLeftRadius: 100

                    }}>

                        <Text style={{ color: green, fontSize: 36, fontWeight: 'bold', marginTop: 20, marginBottom: 50 }}>Welcome Back</Text>

                        <Field placeholder="Email Address" value={email} onChangeText={(text) => setEmail(text)} keyboardType={"email-address"} />
                        <Field placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />

                        <Btn btnText="Login" bgcolor={darkGreen} btnTextColor="white" Press={postAPI} />

                    </View>
                </View>
            </Background>
        </View>
    )
}


export default Login