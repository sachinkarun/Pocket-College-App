import React from 'react';
import { View, Text, Button } from 'react-native';

const Register = ({ navigation }) => {
    return (
        <View>
            <Text>Register</Text>
            <Button title='Go to Login' onPress={() => navigation.navigate('login')}/>
        </View>
    )
}

export default Register
