import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/auth/Register';
import Login from './src/auth/Login';
import MainApp from './src/MainApp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name='register' component={Register}/>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='mainapp' component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
