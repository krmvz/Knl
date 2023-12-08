import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler'
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    >
      <View style={styles.inputContainer}>
        <TextInput
            placeholder='Email'
            // value={ }
            // onChangeText={text => }
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            // value={ }
            // onChangeText={text => }
            style={styles.input}
            secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
        onPress={() => { }}
        style={styles.button}
        >
            <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => { }}
        style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttono}>Register</Text>
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
    }
})