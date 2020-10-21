import firebase from "firebase";
import { useImperativeHandle } from "react";

var firebaseConfig = {
    apiKey: "AIzaSyDFOJs0dFtHLU73H3skVk7DKKvItwWD_DY",
    authDomain: "dna-mtoren.firebaseapp.com",
    databaseURL: "https://dna-mtoren.firebaseio.com",
    projectId: "dna-mtoren",
    storageBucket: "dna-mtoren.appspot.com",
    messagingSenderId: "184328254339",
    appId: "1:184328254339:web:1ae78dbcad9de673367cb6",
    measurementId: "G-F72KNSBEC2"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const database = firebase.database();

  export const generateUserDocument = async (user, additionalData) => {
      if (!user) return;
      const userRef = firestore.doc(`users/${user.uid}`);
      const snapshot = await userRef.get();
      if(!snapshot.exists) {
          const { email, displayName, photoURL } = user;
          try {
              await userRef.set({
                  displayName,
                  email,
                  photoURL,
                  ...additionalData
              });
          } catch (error) {
              console.error("error creating user document", error);
          }
      }
      return getUserDocument(user.uid);
  };

  const getUserDocument = async uid => {
      if (!uid) return null;
      try{
          const userDocument = await firestore.doc(`users/${uid}`).get();
          return {
              uid,
              ...userDocument.data()
          };
      }catch(error) {
          console.error('Error Fetching user', error);
      }
  };
