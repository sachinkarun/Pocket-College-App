import React,{ useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    const [user, setUser] = useState({
        email:'',
        password:''
    })

    const login = () => {

    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#1d242f" />
            <View style={styles.boxWithShadow}>

                <View style={styles.heading}>
                    <Text style={{fontSize:25, color:'#009394', fontWeight:'bold'}}> {'<SignIn/>'} </Text>
                </View>

                <View style={styles.inputBox}>
                    <TextInput placeholder="Email" placeholderTextColor="#a6a6a6" style={styles.input} value={user.email} onChangeText={(txt) => setUser({...user, email:txt})} />
                    <TextInput placeholder="Password" placeholderTextColor="#a6a6a6" style={styles.input} value={user.password} onChangeText={(txt) => setUser({...user, password:txt})} />
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('mainapp')}>
                        <Text style={{fontWeight:'bold', color:'#131820', fontSize:17}}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('register')}>
                        <Text style={{fontWeight:'bold', color:'#009394', fontSize:15}}>Don't have an Account?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1d242f',
        justifyContent:'center',
        alignItems:'center'
    },
    boxWithShadow: {
        width:'90%',
        backgroundColor:'#131820',
        borderRadius:20,
        alignItems:'center',
    },
    input: {
        width:"90%",
        height:50,
        borderRadius:15,
        paddingLeft:20,
        color:'white',
        marginVertical:10,
        backgroundColor:'#0a0c10'
    },
    inputBox: {
        marginVertical:20,
        width:"100%",
        alignItems:'center'
    },
    heading: {
        width:'100%',
        height:60,
        backgroundColor:'#0a0c10',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer: {
        marginBottom:10,
        width:"100%",
        alignItems:'center'
    },
    btn: {
        width:"90%",
        height:50,
        backgroundColor:'#009394',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    btn2: {
        width:"90%",
        height:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#009394',
        borderWidth:2,
        marginBottom:20
    }
})

export default Login
