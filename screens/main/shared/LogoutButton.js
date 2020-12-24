import React from "react";
import { TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../../authentication/AuthProvider";
import { useContext } from "react";

const LogOutButton = () => {
  const { googleSignOut } = useContext(AuthContext);

  const onPress = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        onPress: null,
      },
      {
          text: "Yes",
          onPress: () => {googleSignOut()}
      }
    ]);
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ paddingRight: 10 }}>
      <View style={styles.danger}>
        <MaterialIcons
          style={{ padding: 5 }}
          name="logout"
          size={24}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  danger: {
    borderRadius: 10,
    backgroundColor: "red",
  },
  container: {
    borderWidth: 2,
    borderColor: "black",
  },
});

export { LogOutButton };
