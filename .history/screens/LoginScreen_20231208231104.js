import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    >
      <View style={styles.}>

      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})