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

// adicionar a BD
firebase.database().ref('previsao').child("aveiro").set({ distrito: "Aveiro", UV: 2 });
firebase.database().ref('previsao').child("beja").set({ distrito: "Beja", UV: 3 });
firebase.database().ref('previsao').child("braga").set({ distrito: "Braga", UV: 5 });
firebase.database().ref('previsao').child("braganca").set({ distrito: "Bragança", UV: 8  });
firebase.database().ref('previsao').child("castelobranco").set({ distrito: "Castelo Branco", UV: 10 });
firebase.database().ref('previsao').child("coimbra").set({ distrito: "Coimbra", UV: 1 });
firebase.database().ref('previsao').child("evora").set({ distrito: "Évora", UV: 2 });
firebase.database().ref('previsao').child("faro").set({ distrito: "Faro", UV: 3 });
firebase.database().ref('previsao').child("guarda").set({ distrito: "Guarda", UV: 5 });
firebase.database().ref('previsao').child("leiria").set({ distrito: "Leiria", UV: 4 });
firebase.database().ref('previsao').child("lisboa").set({ distrito: "Lisboa", UV: 1 });
firebase.database().ref('previsao').child("portalegre").set({ distrito: "Portalegre", UV: 2 });
firebase.database().ref('previsao').child("porto").set({ distrito: "Porto", UV: 6 });
firebase.database().ref('previsao').child("santarem").set({ distrito: "Santarém", UV: 7 });
firebase.database().ref('previsao').child("setubal").set({ distrito: "Setúbal", UV: 4 });
firebase.database().ref('previsao').child("vianadocastelo").set({ distrito: "Viana do Castelo", UV: 5 });
firebase.database().ref('previsao').child("vilareal").set({ distrito: "Vila Real", UV: 6 });
firebase.database().ref('previsao').child("viseu").set({ distrito: "Viseu", UV: 9 });
