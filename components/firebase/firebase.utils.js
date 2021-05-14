import React from 'react';
import firebase from 'firebase/app'
import "firebase/database";
import { Alert } from 'react-native';

// Optionally import the services that you want to use
// import "firebase/auth";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

//Before launching the app, the rules for the realtime database should be changed
//Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBn3HMYH7Qvw_5rlfXaEq8WcMG-5J5jlbc',
    authDomain: 'radboud-umc.firebaseapp.com',
    databaseURL: 'https://radboud-umc-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'radboud-umc',
    messagingSenderId: '640989795548'
  };

//Get users in database
const getUsers = async () => {
  try {
    var users = database.ref('users/').once('value').then(snapshot => {
      var items = []
      snapshot.forEach((child) => {
        items.push(child.key)
      })    
      return items;
    })
    return users;
  } catch (error) {
    console.log("Error while fetching user data: ", error.message)
  }
}

//Add user to database
export const AddUser = async (username, password) => {
  if(!username || !password) return;

  const users = await getUsers()

  users.map((name) => {
    if(name == username){
      Alert.alert("Username already taken, please enter a different one.");
      return;
    }
  })
  
  try{
    database
    .ref('users/' + username)
    .set({password: password})
    Alert.alert("You account has been made!")
  } catch (error) {
    console.log('User not added: ', error.message)
  }
  return true;
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export const database = firebase.database()

export default firebase
