import * as firebase from 'firebase';

const config = {
    apiKey: "Your key here",
    authDomain: "Your firebase domamin here",
    databaseURL: "Your firebase url here",
    storageBucket: "Your storageBucket here",
    messagingSenderId: "Your messaging Sender ID here"
};

export const firebaseApp = firebase.initializeApp(config);
