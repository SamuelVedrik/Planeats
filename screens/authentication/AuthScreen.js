import React, { useState, useContext } from "react";
import {StyleSheet, Text, View, Button} from 'react-native';
import {AuthContext} from './AuthProvider';


const AuthScreen = () => {

    const {googleSignIn} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Button onPress={googleSignIn} title={"Sign in"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AuthScreen;
