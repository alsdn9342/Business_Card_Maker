const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID ,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


 