import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import Register from './src/auth/Register';
import Login from './src/auth/Login';
import MainApp from './src/MainApp';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name='register' component={Register}/>
            <Stack.Screen name='login' component={Login} options={{ headerShown:false}}/>
            <Stack.Screen name='mainapp' component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name='profile' component={Profile}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
