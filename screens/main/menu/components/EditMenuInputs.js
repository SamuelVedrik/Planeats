import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const NameInput = ({ onChangeText }) => {
  const [text, setText] = useState(null);

  const isEmpty = () => {
    return text === "";
  };
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons name="edit" size={24} color="black" />
      <View style={{width:"70%"}}>
        <TextInput
          label="Name"
          placeholder={"Enter dish name"}
          mode="flat"
          selectionColor="#004E64"
          underlineColor="#004E64"
          style={{backgroundColor: "white"}}
          onChangeText={(currText) => {
            onChangeText(currText);
            setText(currText);
          }}
          theme={{
            colors: {
              primary: "#004E64",
            },
          }}
        />
        <HelperText type="error" visible={isEmpty()}>
          {"Name is a required field."}
        </HelperText>
      </View>
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
        style={{ ...styles.textInputStyle, height: 150 }}
        multiline={true}
        onChangeText={onChangeText}
        theme={{
          colors: {
            primary: "#004E64",
          },
        }}
      />
    </View>
  );
};

const SaveOrCancel = ({ onSave, onCancel }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onSave} style={styles.saveButton}>
        <Text style={styles.buttonText}>{"Save"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
        <Text style={styles.buttonText}>{"Cancel"}</Text>
      </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: "5%",
  },
  saveButton: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#25a18e",
    borderColor: "#c7c7c7",
    borderWidth: 1,
  },
  cancelButton: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#d43024",
    borderColor: "#c7c7c7",
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: "Poppins_500Medium",
    color: "white",
  },
});

export { NameInput, DismissKeyboard, DescriptionInput, SaveOrCancel };
