import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { auth } from 'firebase'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation()

  // const handleSignOut = () => {
  //   auth
  //   .signOut()
  //   .then(() => {
  //     navigation.replace("Login")
  //   })
  //   .catch(error => alert(error.message))
  // }

  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 50, textAlign: 'center'}}>Good luck! bomj</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
<Button title='' onPress={() => navigation.navigate("UserPage")}></Button>
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
})