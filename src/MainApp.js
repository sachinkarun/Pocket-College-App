import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './tabs/feeds/Feed';
import ChatList from './tabs/chats/ChatList';
import TaskTabs from './tabs/tasks/TaskTabs';
import Attendence from './tabs/attendence/Attendence';

const Tab = createBottomTabNavigator();

const MainApp = ({ navigation }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='feed' component={Feed} options={{ headerRight: () => (
            <Button
              onPress={() => navigation.navigate('profile')} title="Profile" color="tomato"/>), }}/>
            <Tab.Screen name='chats' component={ChatList}/>
            <Tab.Screen name='tasktabs' component={TaskTabs} options={{headerShown:false}}/>
            <Tab.Screen name='Attendence' component={Attendence}/>
        </Tab.Navigator>
    )
}

export default MainApp
