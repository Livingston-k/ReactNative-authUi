import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView,Text,ScrollView,View} from 'react-native'
import COLORS from '../../consts/colors'
import Input from '../components/Input';

const RegistrationScreen = ({navigation})=>{
    return (
    <SafeAreaView style={{ backgroundColor:COLORS.white,flex:1 }}>
            <ScrollView contentContainerStyle={{ paddingTop:50,paddingHorizontal:20 }}>
                <Text style={{ color:COLORS.black,fontSize:40,fontWeight:'bold' }}>Register</Text>
                <Text style={{ color:COLORS.grey,fontSize:18,marginVertical:10 }}>Enter Your Details to Register</Text>
                <View style={{ marginVertical:20 }}>
                 <Input 
                 placehoder="Enter your email address" iconName="email-outline" 
                 label="Email"
                />
                  <Input 
                  password
                 placehoder="Enter your password" iconName="lock-outline" 
                 label="Password"
                />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RegistrationScreen