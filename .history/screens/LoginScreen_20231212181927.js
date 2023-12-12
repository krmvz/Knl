import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { auth } from './firebase';
// import {AsyncStorage} from "react-native"
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         if(user){
    //             navigation.replace("Home")
    //         }
    //     })

    //     return unsubscribe;
    // }, [])

    // const handleSignUp = () => {
    //     console.log('registred')
    //     auth
    //     .createUserWithEmailAndPassword(email, password)
    //     .thend(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log('Registred with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }

    // const handleLogin = () => {
    //     auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //         const user = userCredentials.user;
    //         console.log('Logged in with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }
    const handleLogin = () => {
        navigation.navigate("Home");
        // if(email =="a@gmail.com" && password == "123456"){
        //     navigation.navigate("Home");
        // }else{
        //     console.log("error")
        // }
    }

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    >
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text) }
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            value={password }
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("Home");}
        style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },

})