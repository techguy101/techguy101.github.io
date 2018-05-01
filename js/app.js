(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCLvhatpx3gPRto6yCtb0Izko9az4fSaFM",
    authDomain: "hqweb-22b52.firebaseapp.com",
    databaseURL: "https://hqweb-22b52.firebaseio.com",
    projectId: "hqweb-22b52",
    storageBucket: "hqweb-22b52.appspot.com",
    messagingSenderId: "84040714446"
  };
  firebase.initializeApp(config);

  // Get elements
  const preObject = document.getElementById('bestanswer');

  // Create references
  const dbRefObject = firebase.database().ref().child('hq').child('bestanswer');

  // Sync object changes
  dbRefObject.on('value', snap => console.log(snap.val()));
  dbRefObject.on('value', snap => document.getElementById("bestanswer").innerHTML = snap.val());

}());
