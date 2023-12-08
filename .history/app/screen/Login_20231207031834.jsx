import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_APP } from '../../FirebaseConfig';
import { TextInput } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("false");
    const auth = FIREBASE_APP;
    const signIn = async () => {
        setLoading(true);
        try{
            const response = await auth.signInWithEmailAndPassword(email, password);
            console.log(response);
            alert('Check your Emails!');
        } catch (error) {
            console.log(error);
            alert('Sign in failed:' + error.massage);
        }finally{
            setLoading(false);
        }
    }

    const signUp = async () =>{
        setLoading(true);
        try{
            const response = await auth.createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch (error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

  return (
    <View>
      <Text>Works</Text>
      <TextInput value={email} placeholder="Email" autoCapitalize="none" onChange={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} placeholder="Password" autoCapitalize="none" onChange={(text) => setPassword(text)}></TextInput>

      { loading ? ( <ActivityIndicator size="large" color="#0000ff"/> ) : (
      <>
        <Button title="Login" onPress={signIn}></Button>
        <Button title="Create a new account" onPress={signUp}></Button>
      </>
      )}

    </View>
  )
}

export default Login;

// const styles = StyleSheet.create({
//     container: {
//         marginHorizontal: 20,
//         flex: 1,
//         justifyContent: 'center',
//     },
//     input: {
//         marginVertical: 4,
//         height: 50,
//         borderWidth: 1,
//         borderRadius: 4,
//         padding: 10,
//         backgroundColor: '#fff'
//     }
// });