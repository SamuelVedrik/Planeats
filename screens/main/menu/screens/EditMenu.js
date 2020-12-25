import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {NameInput, DismissKeyboard, DescriptionInput} from "../components/EditMenuInputs";
import MenuImagePicker from "../components/MenuImagePicker";

const EditMenu = () => {
    
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");

    return (
    <DismissKeyboard >
        <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === "ios" ? "position": "padding"}
        keyboardVerticalOffset={30}
        >
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                <MenuImagePicker />
                <NameInput onChangeText={(text) => setName(text)}/>
                <DescriptionInput onChangeText={(text) => setNotes(text)}/>
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

export default EditMenu;