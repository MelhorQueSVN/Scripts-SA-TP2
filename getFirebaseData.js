const firebase = require('firebase')

let config = {
    apiKey: "AIzaSyCOC8roJrsNvrCeZPf7IRGIwza0Zni6m_I",
    authDomain: "weather-106c2.firebaseapp.com",
    databaseURL: "https://weather-106c2.firebaseio.com",
    projectId: "weather-106c2",
    storageBucket: "weather-106c2.appspot.com",
    messagingSenderId: "708196993827",
    appId: "1:708196993827:web:3791d55dc78022b2e5da96",
    measurementId: "G-V6RCL99N5C"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// Update dos valores da BD
firebase.database().ref("previsao").child("porto").on("value",function(Snapshot){
    console.log(Snapshot.val())
}) 
