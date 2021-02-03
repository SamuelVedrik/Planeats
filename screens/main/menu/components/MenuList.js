import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { AuthContext } from "../../../authentication/AuthProvider";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { userMenuQuery } from "../../../../services/menuServices";
import { useNavigation } from "@react-navigation/native";

const DEFAULT = "../../../../assets/logo.png";

const MenuListComponent = ({ data, onPress }) => {
  const { name, notes, imageURL, storageRef } = data;
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.componentContainer}>
      <View style={styles.imageContainer}>
        {imageURL ? (
          <Image style={styles.componentImage} source={{ uri: imageURL }} />
        ) : (
          <Image style={styles.componentImage} source={require(DEFAULT)} />
        )}
      </View>
      <Text style={styles.componentText}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
};

const MenuList = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  let [values, loading, error] = [null, null, null];
  if(user){
    [values, loading, error] = useCollectionData(userMenuQuery(user.uid), {idField: "id"});
  } else{
    values = []
  }
  // const [values, loading, error] = useCollectionData(userMenuQuery(userID));


  const renderItem = ({item}) => {
    return <MenuListComponent data={item} onPress={() => navigation.navigate("Edit Menu", {data:item})}/>;
  };

  return (
    <View style={{width:"100%", flex:1}}>
      <FlatList data={values} renderItem={renderItem} keyExtractor={(item, index)=> index.toString()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 10
  },
  imageContainer: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  componentImage: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    borderRadius: 20,
    marginHorizontal: 10
  },
  componentText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 24,
    marginHorizontal: 10

  }
});

export default MenuList;
