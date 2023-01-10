import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Detail from './tabs/Detail';

const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='home' component={Home}/>
            <Tab.Screen name='detail' component={Detail}/>
        </Tab.Navigator>
    )
}

export default MainApp
