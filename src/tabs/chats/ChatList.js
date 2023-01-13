import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ChatList = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <View>
            <Text>Chat list</Text>
            <Text>{user}</Text>
        </View>
    )
}

export default ChatList
