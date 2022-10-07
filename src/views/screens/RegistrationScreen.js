import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView,Text,ScrollView,View, Keyboard, Alert} from 'react-native'
import COLORS from '../../consts/colors'
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';

const RegistrationScreen = ({navigation})=>{
    const[loading,setLoading] = React.useState(false)
    const[input,setInput] = React.useState({
        email:'',
        fullname:'',
        password:'',
        phone:''
    })
    const handleOnChange = (text, input) => {
        setInput(prevState => ({ ...prevState, [input]: text }));
    }
    const [errors, setErrors] = React.useState({
        email: '',
        fullname: '',
        password: '',
        phone: ''
    })

    const handleError = (errorMessage, input) => {
        setErrors((prevState) => ({ ...prevState, [input]: errorMessage }))
    }
    const validateInputs = ()=>{
 Keyboard.dismiss()
 let valid = true
 if(!input.email){
     handleError("Please enter email address","email")
     valid = false
 } else if (!input.email.match(/\S+@\S+\.\S+/)){
     handleError("Please enter a valid email address", "email")
     valid = false
 }
        if (!input.fullname) {
            handleError("Please enter fullname", "fullname")
            valid = false
        }
        if (!input.phone) {
            handleError("Please enter phone number", "phone")
            valid = false
        }
        if (!input.password) {
            handleError("Please enter password", "password")
            valid = false
        }else if(input.password.length < 5){
            handleError("Password should not be less than 5 characters", "password")
            valid = false 
        }

        if(valid){
      register()
        }
    }
    const register = ()=>{
        setLoading(true)
        setTimeout(() => {
            try {
            AsyncStorage.setItem('user',JSON.stringify(input)) 
            navigation.navigate("LoginScreen")
        } catch (error) {
                Alert.alert("Error","Something went wrong")
            }
        }, 1000);
    }
 
    return (
    <SafeAreaView style={{ backgroundColor:COLORS.white,flex:1 }}>
            <Loader visible={loading}/>
            <ScrollView contentContainerStyle={{ paddingTop:50,paddingHorizontal:20 }}>
                <Text style={{ color:COLORS.black,fontSize:40,fontWeight:'bold' }}>Register</Text>
                <Text style={{ color:COLORS.grey,fontSize:18,marginVertical:10 }}>Enter Your Details to Register</Text>
                <View style={{ marginVertical:20 }}>
                <Input
                 placeholder="Enter your fullname" iconName="account-outline" 
                 label="Full name"
                error={errors.fullname}
                onFocus={() => {
                    handleError(null, "fullname")
                }}
                 onChangeText={(text)=>handleOnChange(text,'fullname') }
                />
                 <Input 
                keyboardType="email-address"
                 placeholder="Enter your email address" iconName="email-outline" 
                 label="Email"
                 error={errors.email}
                 onFocus={()=>{
                     handleError(null,"email")
                 }}
                onChangeText={(text) => handleOnChange(text, 'email')}
                />
                <Input 
                 keyboardType="numeric"
                 placeholder="Enter your phone number" iconName="phone-outline" 
                 label="Phone Number"
                        error={errors.phone}
                        onFocus={() => {
                            handleError(null, "phone")
                        }}
                onChangeText={(text) => handleOnChange(text, 'phone')}
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
                    <Button onPress={validateInputs} title="Register" />
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