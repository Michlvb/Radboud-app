import React  from 'react';
import firebase from 'firebase/app'
import "firebase/database";
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storeData from '../localstorage/LocalStorage'


//Optionally import the services that you want to use
//import "firebase/auth";
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


// export const getActivity = async (user,department) => {
//   try {
//     var users = await database.ref('department/'+department+"/"+user).once('value').then(snapshot => {
//       return snapshot.val().activity;
//     })
//     return users
//   }catch (error) {
//     console.log("Error while fetching user data: ", error.message)
//   } 

//Get users from certain department in database
export const getUsersFromDepartment = async (department) => {
  try {
    var users = await database.ref('department/' + department).get().then((snapshot) => {
      var check = []
      snapshot.forEach((child) => {
        const data =  {name:child.key, score:  JSON.stringify(child.val().score)}
        check.push(data)
      })
      return check;
    })   
    return users
    }
    // return users;
    catch (error) {
    console.log("Error while fetching user data: ", error.message)
  }
}

export const getUserFromDepartment = async (username, department) => {
  try{ 
    var uRef = database.ref('department/'+department+'/'+username)
    const user = await uRef.get()
    return user
  } catch (error) {
    console.log("Error while fetching user data: ", error.message)
  }
}

export const updateDistance = async (username, department, dist) => {
  var uRef = database.ref('department/'+department+'/'+username)
  const user = await uRef.get()
  try {
    let {last_distance, total_distance} = user.val()
    last_distance = Math.round(dist)
    total_distance += last_distance

    uRef.update({
      last_distance,
      total_distance
    })
  } catch (error) {
    console.log("Error while fetching user data: ", error.message)
  }
}

export const updateUser = async (user, dep, value) => {
  var uRef = database.ref('department/'+dep+'/'+user)
  try {
    await uRef.update({
      activity,
      last_distance,
      score,
      total_co2,
      total_distance
    })

  } catch (error) {
    console.log("Error Updating user info " + error.message);
  }
}

//Add user to database
export const AddUser = async (username, department) => {
  if(!username || !department) return;

  const users = await getUsersFromDepartment(department)
  
  for(var i = 0; i < users.length; i++)
    if(users[i] == username){
      Alert.alert("Username already taken. Please enter a different one.");
      return false;
    }

  try{
      database
      .ref('department/' + department.toLowerCase() +'/'+username.toLowerCase())
      .set({score: 0, total_distance: 0, last_distance: 0, total_co2: 0, activity:[{id:'Fietsen', date:'None',msg: "no activity yet."},{id: 'Afval', date:'None', msg: 'no activity yet'}, {id: 'Scorebord', date:'None', msg:'no activity yet'}]})
      storeData(username, department, 0);
      Alert.alert("You account has been made!")
    } catch (error) {
      console.log('User not added: ', error.message)
    }
    return username;
  }

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export const database = firebase.database()

export default firebase