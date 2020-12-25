import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DismissKeyboard } from "./EditMenuInputs";

const DEFAULT = "../../../../assets/logo.png";

const MenuImagePicker = () => {
  const [image, setImage] = useState("");

  useEffect(() => {
    (async () => {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    })();
  }, []);

  const pickImage = async () => {
    try {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [3, 3],
      });
      if (!pickerResult.cancelled) {
        await handleImagePicked(pickerResult);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const takeImage = async () => {
    try {
      const cameraResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [3, 3],
      });
      if (!cameraResult.cancelled) {
        await handleImagePicked(cameraResult);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleImagePicked = async (pickerResult) => {
    setImage(pickerResult.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <DismissKeyboard>
          {image ? (
            <Image style={styles.image} source={{ uri: image }} />
          ) : (
            <Image style={styles.image} source={require(DEFAULT)} />
          )}
        </DismissKeyboard>
      </View>
      <View style={styles.chooseContainer}>
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <MaterialCommunityIcons name="image-plus" size={28} color="black" />
          <Text style={styles.buttonText}>{"Choose Image"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={takeImage} style={styles.button}>
          <MaterialIcons name="camera-alt" size={28} color="black" />
          <Text style={styles.buttonText}>{"Take New Picture"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "75%",
    // borderWidth: 2
  },
  chooseContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "2%",
  },
  imageContainer: {
    alignItems: "center",
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: 20,
    marginTop: "1%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "1%",
  },
  buttonText: {
    marginLeft: "5%",
    fontFamily: "Poppins_500Medium",
  },
});

export default MenuImagePicker;
