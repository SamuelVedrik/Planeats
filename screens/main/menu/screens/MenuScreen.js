import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FloatingAction from "../../shared/FloatingAction";
import { Entypo } from '@expo/vector-icons';
import MenuList from "../components/MenuList"

const MenuScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <MenuList />
      <FloatingAction 
        onPress={() => {navigation.navigate("Add Menu")}}
        icon={<Entypo name="plus" size={28} color="white"/>}
      />
    </View>
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

export default MenuScreen;
