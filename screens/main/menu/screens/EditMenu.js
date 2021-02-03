import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import {
  NameInput,
  DismissKeyboard,
  DescriptionInput,
  SaveOrCancel,
} from "../components/EditMenuInputs";
import MenuImagePicker from "../components/MenuImagePicker";
import { AuthContext } from "../../../authentication/AuthProvider";
import { addMenu } from "../../../../services/menuServices";

const EditMenu = ({ navigation, route }) => {
  const data = route.params.data;

  const [name, setName] = useState(data.name);
  let [notes, setNotes] = useState(data.notes);
  let [imageURI, setImageURI] = useState(data.imageURL);

  const { user } = useContext(AuthContext);

  const onCancel = () => {
    navigation.goBack();
  };

  //   const onSave = () => {
  //     if (name === "") {
  //       Alert.alert("Please fill in all required fields!");
  //     } else {
  //       (async () => {
  //         await addMenu(user.uid, { name, notes, imageURI });
  //       })();
  //       navigation.goBack();
  //     }
  //   };
  const onSave = () => {
    Alert.alert("Saved");
    navigation.goBack();
  };

  return <DismissKeyboard >
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "position": "padding"}
      keyboardVerticalOffset={30}
      >
          <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
              <MenuImagePicker setImageURI={(uri) => {setImageURI(uri)}} currURI={imageURI}/>
              <NameInput onChangeText={(text) => setName(text)} currText={name}/>
              <DescriptionInput onChangeText={(text) => setNotes(text)} currText={notes}/>
              <SaveOrCancel onCancel={onCancel} onSave={onSave}/>
          </ScrollView>
      </KeyboardAvoidingView>
  </DismissKeyboard>

//   return (
//     <View style={styles.container}>
//       <NameInput onChangeText={(text) => setName(text)} currText={name} />
//     </View>
//   );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});

export default EditMenu;
