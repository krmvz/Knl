import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { TextInputBase } from 'react-native'

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
        <TextInputBase
            placeholder='Password'
            // value={ }
            // onChangeText={text => }
            style={styles.input}
            secureTextEntry
        />
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