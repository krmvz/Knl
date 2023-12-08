import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/homePage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome back!
      </Text>
      <Button
        title="Login"
      />
      <Button
        title="Sign up"
      />
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
