import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TouchableOpacity
      style
      >
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})