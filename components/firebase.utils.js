import firebase from 'firebase/app'
import "firebase/database";

// Optionally import the services that you want to use
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
    
    messagingSenderId: '640989795548',
    
  };

export const storeHighScore = (userId, score) => {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      highscore: score,
    });
}



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default firebase
