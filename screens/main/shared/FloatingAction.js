import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FloatingAction = ({ onPress, icon}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          {icon}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    // borderWidth: 2,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    backgroundColor: "#004E64",
  },
});

export default FloatingAction;
