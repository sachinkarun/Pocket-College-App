import React from 'react';
import { View, Text, Button } from 'react-native';

const Detail = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default Detail
