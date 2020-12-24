import React, { useContext, useState, useEffect } from "react";
import {View, Text} from 'react-native';
import firebase from "firebase/app";
import {AuthContext} from "./authentication/AuthProvider";
import AuthScreen from "./authentication/AuthScreen";
import MainNavigator from "./main/MainNavigator"



const AppNavigator = () => {

    const {user, setUser} = useContext(AuthContext);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        })
        return unsubscribe;
    }, [])

    return (
        user == null ? <AuthScreen /> : <MainNavigator />
    )
}

export default AppNavigator;