import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { AuthContext } from "../AuthProvider";
import { AntDesign } from "@expo/vector-icons";

const AuthScreen = () => {
  const { googleSignIn } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../assets/logo2.png")}
        style={styles.logo}
      />

      <TouchableOpacity onPress={googleSignIn}>
        <View style={styles.button}>
          <AntDesign name="google" size={32} color="white" />
          <Text style={styles.logInStyle}> Sign In with Google</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25A18E",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginBottom: "55%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    backgroundColor: "#004E64",
  },
  logInStyle: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: "white",
    fontWeight: "bold",
    marginLeft: "5%",
  },
});

export default AuthScreen;
