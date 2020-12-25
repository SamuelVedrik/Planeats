import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase/app";
import { AuthContext } from "./authentication/AuthProvider";
import AuthScreen from "./authentication/screens/AuthScreen";
import MainNavigator from "./main/MainNavigator";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

const AppStack = createStackNavigator();

const AppNavigator = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setInitialized(true);
    });
    return unsubscribe;
  }, []);

  if (initialized) {
    return (
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {user == null ? (
            <AppStack.Screen name="Auth" component={AuthScreen} />
          ) : (
            <AppStack.Screen name="Main" component={MainNavigator} />
          )}
        </AppStack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    );
  } else {
    return <AppLoading />
  }
};

export default AppNavigator;
