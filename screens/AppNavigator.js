import React, { useContext, useState, useEffect } from "react";
import { View, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase/app";
import { AuthContext } from "./authentication/AuthProvider";
import AuthScreen from "./authentication/screens/AuthScreen";
import MainNavigator from "./main/MainNavigator";
import { StatusBar } from 'expo-status-bar';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        {user == null ? (
          <AppStack.Screen name="Auth" component={AuthScreen} />
        ) : (
          <AppStack.Screen name="Main" component={MainNavigator} />
        )}
      </AppStack.Navigator>
      <StatusBar style="dark"/>
    </NavigationContainer>
  );
};

export default AppNavigator;
