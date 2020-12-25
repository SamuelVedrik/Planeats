import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const NameInput = ({ onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons name="edit" size={24} color="black" />
      <TextInput
        label="Name"
        placeholder={"Enter dish name"}
        mode="flat"
        selectionColor="#004E64"
        underlineColor="#004E64"
        style={styles.textInputStyle}
        onChangeText={onChangeText}
        theme={{colors:{
            primary:"#004E64"
        }}}
      />
    </View>
  );
};

const DescriptionInput = ({ onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons name="notes" size={24} color="black" />
      <TextInput
        label="Notes"
        placeholder={"Enter notes"}
        mode="flat"
        selectionColor="#004E64"
        underlineColor="#004E64"
        style={{...styles.textInputStyle, height:150}}
        multiline={true}
        onChangeText={onChangeText}
        theme={{colors:{
            primary:"#004E64"
        }}}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    paddingTop: "1%",
  },
  textInputStyle: {
    width: "70%",
    backgroundColor: "white",
  },
});

export { NameInput, DismissKeyboard, DescriptionInput };
