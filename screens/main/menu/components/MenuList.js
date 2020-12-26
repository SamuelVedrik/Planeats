import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { AuthContext } from "../../../authentication/AuthProvider";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { userMenuQuery } from "../../../../services/menuServices";

const DEFAULT = "../../../../assets/logo.png";

const MenuListComponent = ({ data }) => {
  const { name, notes, imageURL, storageRef } = data;
  return (
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
  );
};

const MenuList = () => {
  const { user } = useContext(AuthContext);
  let [values, loading, error] = [null, null, null];
  if(user){
    [values, loading, error] = useCollectionData(userMenuQuery(user.uid));
  } else{
    values = []
  }
  // const [values, loading, error] = useCollectionData(userMenuQuery(userID));

  const renderItem = ({item}) => {
    return <MenuListComponent data={item} />;
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
