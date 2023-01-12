import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Assignment from './Assignment';
import Task from './Task';
import Notes from './Notes';

const Tab = createMaterialTopTabNavigator();

const TaskTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='assignment' component={Assignment}/>
            <Tab.Screen name='task' component={Task}/>
            <Tab.Screen name='Notes' component={Notes}/>
        </Tab.Navigator>
    )
}

export default TaskTabs
