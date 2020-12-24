import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {firebaseConfig} from './config'
import {AuthProvider} from './screens/authentication/AuthProvider'
import AppNavigator from './screens/AppNavigator'
import firebase from "firebase";


if (!firebase.apps.length) {
  console.log("Initializing app")
  firebase.initializeApp(firebaseConfig);
}


const App = () => {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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

export default App;
