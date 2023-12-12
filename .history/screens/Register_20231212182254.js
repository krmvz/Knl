import React from 'react'
import { Text } from 'react-native'

const Register = () => {
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
        onPress={() => navigation.navigate("Register")}
        style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    
     
 
  )
}

export default Register
