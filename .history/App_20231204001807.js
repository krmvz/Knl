import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Linking, SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStack
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Welcome back!
    //   </Text>
    //   <Button
    //     title="Sign in"
    //   />
    //   <Button
    //     title="Sign up"
    //   />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack
    </NavigationContainer>
    
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
