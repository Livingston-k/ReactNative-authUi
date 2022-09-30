import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/views/screens/LoginScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import RegistrationScreen from './src/views/screens/RegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
           <Stack.Screen name="LoginScreen" component={LoginScreen} />
           <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
