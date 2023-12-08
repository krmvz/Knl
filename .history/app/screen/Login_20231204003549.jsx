import { View, Text } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login