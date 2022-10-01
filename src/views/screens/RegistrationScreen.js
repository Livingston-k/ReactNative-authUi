import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView,Text,ScrollView,View} from 'react-native'
import COLORS from '../../consts/colors'
import Input from '../components/Input';
import Button from '../components/Button';

const RegistrationScreen = ({navigation})=>{
    const[input,setInput] = React.useState({
        email:'',
        fullname:'',
        password:'',
        phone:''
    })
    const validate = ()=>{}
    return (
    <SafeAreaView style={{ backgroundColor:COLORS.white,flex:1 }}>
            <ScrollView contentContainerStyle={{ paddingTop:50,paddingHorizontal:20 }}>
                <Text style={{ color:COLORS.black,fontSize:40,fontWeight:'bold' }}>Register</Text>
                <Text style={{ color:COLORS.grey,fontSize:18,marginVertical:10 }}>Enter Your Details to Register</Text>
                <View style={{ marginVertical:20 }}>
                <Input
                 placeholder="Enter your fullname" iconName="account-outline" 
                 label="Full name"
                />
                 <Input 
                 placeholder="Enter your email address" iconName="email-outline" 
                 label="Email"
                />
                <Input 
                 keyboardType="numeric"
                 placeholder="Enter your phone number" iconName="phone-outline" 
                 label="Phone Number"
                />
                
                  <Input 
                 password
                 placeholder="Enter your password" iconName="lock-outline" 
                 label="Password"
                />
                <Button onPress={validate} title="Register" />
                <Text 
                onPress={()=>navigation.navigate("LoginScreen")}
                style={{ 
                    fontSize:18,
                    fontWeight:"bold",
                    color:COLORS.black,
                    textAlign:'center'
                     }}>Already have an account? Login</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RegistrationScreen