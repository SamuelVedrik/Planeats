import React, { useState, useContext, createContext } from "react";
import { googleConfig } from "../../config";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = async () => {
    try {
      const { type, accessToken, idToken, user } = await Google.logInAsync(
        googleConfig
      );
      if (type === "success") {
        try{
            const credentials = firebase.auth.GoogleAuthProvider.credential(
                idToken, accessToken);
            await firebase.auth().signInWithCredential(credentials)

        } catch (e){ 
            console.log(e)
        }

    } else {
      console.log("Cancelled.");
    }
  } catch (e) {
      console.error(e.message);
    }
  };

  const googleSignOut = async () => {
    try {
      firebase.auth().signOut();
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        googleSignIn,
        googleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
