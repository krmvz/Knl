import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP } from '../../FirebaseConfig';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("false");
    const auth = FIREBASE_APP;
  return (
    <View style={styles.container}>
      <Text>Works</Text>
      <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChange={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChange={(text) => setPassword(text)}></TextInput>

      { loading ? <ActivityIndicator 
      }

    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});