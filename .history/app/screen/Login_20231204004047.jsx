import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP } from '../../FirebaseConfig';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");
    const auth = FIREBASE_APP;
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadiu
    }
})