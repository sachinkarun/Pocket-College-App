import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../../redux/action';

const Feed = () => {
    const [name, setName] = useState("");
    const user = useSelector(state => state.user.currentUser);

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(name.length === 0) return;

        dispatch(changeName(name));
    }

    return (
        <View>
            <Text>Feeds</Text>
            <Text>{user}</Text>
            <Text>Name: {name}</Text>
            <TextInput placeholder="Name" value={name} onChangeText={(txt) => setName(txt)} />
            <Button title='Change Name' onPress={() => handleSubmit()}/>
        </View>
    )
}

export default Feed
