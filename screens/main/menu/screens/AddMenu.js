import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView, Alert} from 'react-native';
import {NameInput, DismissKeyboard, DescriptionInput, SaveOrCancel} from "../components/EditMenuInputs";
import MenuImagePicker from "../components/MenuImagePicker";
import {AuthContext} from "../../../authentication/AuthProvider";
import {addMenu} from "../../../../services/menuServices";

const AddMenu = ({navigation, route}) => {
    
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");
    const [imageURI, setImageURI] = useState("");
    const {user} = useContext(AuthContext)


    const onCancel = () => {
      navigation.goBack();
    }

    const onSave = () => {
      if(name === ""){
        Alert.alert("Please fill in all required fields!")
      } else{
        (async () => {
          await addMenu(user.uid, {name, notes, imageURI});
        })();
        navigation.goBack();
      }
    }

    return (
    <DismissKeyboard >
        <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === "ios" ? "position": "padding"}
        keyboardVerticalOffset={30}
        >
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                <MenuImagePicker setImageURI={(uri) => {setImageURI(uri)}}/>
                <NameInput onChangeText={(text) => setName(text)}/>
                <DescriptionInput onChangeText={(text) => setNotes(text)}/>
                <SaveOrCancel onCancel={onCancel} onSave={onSave}/>
            </ScrollView>
        </KeyboardAvoidingView> 
    </DismissKeyboard>
    )


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    //   justifyContent: 'center',
      flexDirection: 'column',
    },
  });

export default AddMenu;