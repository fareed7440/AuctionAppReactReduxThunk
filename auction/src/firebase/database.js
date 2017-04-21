import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAEiMR32RZ9jGWkz_mD0oAPM23HFBxunxM",
    authDomain: "auctionapp-a4c8b.firebaseapp.com",
    databaseURL: "https://auctionapp-a4c8b.firebaseio.com",
    projectId: "auctionapp-a4c8b",
    storageBucket: "auctionapp-a4c8b.appspot.com",
    messagingSenderId: "467510284868"
  };
  firebase.initializeApp(config);


 export const auth = firebase.auth();
export const database = firebase.database();
  export const storage =  firebase.storage();
