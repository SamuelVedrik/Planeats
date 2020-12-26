import firebase from "firebase/app";
import "firebase/firestore";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";


/**
 * Adds the new menu item to the user's menu collection.

 * @param {*} userID 
 * @param {*} menu 
 */
const addMenu = async (userID, menu) => {
  const db = firebase.firestore();
  const userMenuRef = db.collection("users").doc(userID).collection("menu");
  let imageURL = "";
  let storageRef = "";
  if(menu.imageURI !== ""){
    const [newImageURL, newStorageRef] = await uploadMenuImage(menu.imageURI);
    imageURL = newImageURL;
    storageRef = newStorageRef;
  }

  try {
    await userMenuRef.add({
      name: menu.name[0].toUpperCase() + menu.name.slice(1).toLowerCase(),
      notes: menu.notes,
      imageURL,
      storageRef
    });
  } catch (e) {
    console.error("From add Menu: ", e.message);
  }
};


const uploadMenuImage = async (uri) => {
    // Snippet was taken from https://github.com/expo/examples/blob/master/with-firebase-storage-upload/App.js
  
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    const ref = firebase.storage().ref().child(uuidv4());
    const snapshot = await ref.put(blob);
  
    // We're done with the blob, close and release it
    blob.close();
  
    return Promise.all([snapshot.ref.getDownloadURL(), snapshot.ref.fullPath]);
  };


const userMenuQuery = (userID) => {
  const db = firebase.firestore()
  return db.collection("users").doc(userID).collection("menu");
}

export {addMenu, uploadMenuImage, userMenuQuery};