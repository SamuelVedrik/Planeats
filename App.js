import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { firebaseConfig } from "./config";
import { AuthProvider } from "./screens/authentication/AuthProvider";
import AppNavigator from "./screens/AppNavigator";
import firebase from "firebase";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";

if (!firebase.apps.length) {
  console.log("Initializing app");
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [fontLoaded] = useFonts({ Inter_900Black, Poppins_500Medium });
  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
