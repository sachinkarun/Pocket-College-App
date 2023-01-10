import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home screen</Text>
            <Button title="Go to detail" onPress={() => navigation.navigate('detail')} />
        </View>
    )
}

export default Home
