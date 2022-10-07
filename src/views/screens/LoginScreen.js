import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, Text, ScrollView, View, Keyboard, Alert } from 'react-native'
import COLORS from '../../consts/colors'
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';

const LoginScreen = ({navigation})=>{
    const [loading, setLoading] = React.useState(false) 
    const [input, setInput] = React.useState({
        email: '',
        password: '',
    })
    const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }));
    }
    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
    })

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }
    const validateInputs = () => {
        Keyboard.dismiss()
        let valid = true
        if (!input.email) {
            handleError("Please enter email address", "email")
            valid = false
        } 
        if (!input.password) {
            handleError("Please enter password", "password")
            valid = false
        }
       if(valid){
     login()
       }
    }
    const login = ()=>{
        setLoading(true)
        setTimeout( async () => {
            let userData = await AsyncStorage.getItem('user')
            if (userData){
     
               let userData = JSON.parse(userData)
                if (input.email == userData.email && input.password == userData.password){
                    AsyncStorage.setItem("user", { ...userData,loggedIn:true })
                    navigation.navigate("HomeScreen")
                }else{
                    setLoading(false)
                    Alert.alert("Error", "Invalid credentials")
                }
            }else{
                setLoading(false)
                Alert.alert("Error", "User does not exist")
            }
        }, 1000);
    }
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <Loader visible={loading} />
            <ScrollView contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
                <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>Login</Text>
                <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>Enter Your Details to Login</Text>
                <View style={{ marginVertical: 20 }}>
                    
                    <Input
                        keyboardType="email-address"
                        placeholder="Enter your email address" iconName="email-outline"
                        label="Email"
                        error={errors.email}
                        onFocus={() => {
                            handleError(null, "email")
                        }}
                        onChangeText={(text) => handleOnChange(text, 'email')}
                    />
                  

                    <Input
                        password
                        placeholder="Enter your password" iconName="lock-outline"
                        label="Password"
                        error={errors.password}
                        onFocus={() => {
                            handleError(null, "password")
                        }}
                        onChangeText={(text) => handleOnChange(text, 'password')}
                    />
                    <Button onPress={validateInputs} title="Login" />
                    <Text
                        onPress={() => navigation.navigate("RegistrationScreen")}
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: COLORS.black,
                            textAlign: 'center'
                        }}>Don't have an account? Register</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LoginScreen