const nodeFetch = require('node-fetch');

global.fetch = nodeFetch;

const axios = require('axios');
const tf = require('@tensorflow/tfjs');
const firebase = require('firebase');

let config = {
  apiKey: 'AIzaSyCOC8roJrsNvrCeZPf7IRGIwza0Zni6m_I',
  authDomain: 'weather-106c2.firebaseapp.com',
  databaseURL: 'https://weather-106c2.firebaseio.com',
  projectId: 'weather-106c2',
  storageBucket: 'weather-106c2.appspot.com',
  messagingSenderId: '708196993827',
  appId: '1:708196993827:web:3791d55dc78022b2e5da96',
  measurementId: 'G-V6RCL99N5C',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

let results = [];

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var last = new Date();
last = new Date(last.setDate(last.getDate() - 6));
var dd1 = String(last.getDate()).padStart(2, '0');
var mm1 = String(last.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy1 = last.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
last = yyyy1 + '-' + mm1 + '-' + dd1;

let Braga =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Braga, Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Porto =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Porto, Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Lisboa =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Lisboa, Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Aveiro =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Aveiro,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Beja =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Beja,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Braganca =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Braganca,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Castelo =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Castelo%20Branco,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Coimbra =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Coimbra,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Evora =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Evora,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Faro =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Faro,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Guarda =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Guarda,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Leiria =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Leiria,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Portalegre =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Portalegre,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Santarem =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Santarem,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Setubal =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Sesimbra,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Viana =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Viana%20do%20Castelo,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let VilaReal =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Vila%20Real,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';
let Viseu =
  'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Viseu,%20Portugal&format=json&date=' +
  last +
  '&enddate=' +
  today +
  '&tp=24';

const r_Braga = axios.get(Braga);
const r_Porto = axios.get(Porto);
const r_Lisboa = axios.get(Lisboa);
const r_Aveiro = axios.get(Aveiro);
const r_Beja = axios.get(Beja);
const r_Braganca = axios.get(Braganca);
const r_Castelo = axios.get(Castelo);
const r_Coimbra = axios.get(Coimbra);
const r_Evora = axios.get(Evora);
const r_Faro = axios.get(Faro);
const r_Guarda = axios.get(Guarda);
const r_Leiria = axios.get(Leiria);
const r_Portalegre = axios.get(Portalegre);
const r_Santarem = axios.get(Santarem);
const r_Setubal = axios.get(Setubal);
const r_Viana = axios.get(Viana);
const r_VilaReal = axios.get(VilaReal);
const r_Viseu = axios.get(Viseu);

axios
  .all([
    r_Braga,
    r_Porto,
    r_Lisboa,
    r_Aveiro,
    r_Beja,
    r_Braganca,
    r_Castelo,
    r_Coimbra,
    r_Evora,
    r_Faro,
    r_Guarda,
    r_Leiria,
    r_Portalegre,
    r_Santarem,
    r_Setubal,
    r_Viana,
    r_VilaReal,
    r_Viseu,
  ])
  .then(
    axios.spread((...responses) => {
      results.push.apply(results, responses[0].data.data.weather);
      results.push.apply(results, responses[1].data.data.weather);
      results.push.apply(results, responses[2].data.data.weather);
      results.push.apply(results, responses[3].data.data.weather);
      results.push.apply(results, responses[4].data.data.weather);
      results.push.apply(results, responses[5].data.data.weather);
      results.push.apply(results, responses[6].data.data.weather);
      results.push.apply(results, responses[7].data.data.weather);
      results.push.apply(results, responses[8].data.data.weather);
      results.push.apply(results, responses[9].data.data.weather);
      results.push.apply(results, responses[10].data.data.weather);
      results.push.apply(results, responses[11].data.data.weather);
      results.push.apply(results, responses[12].data.data.weather);
      results.push.apply(results, responses[13].data.data.weather);
      results.push.apply(results, responses[14].data.data.weather);
      results.push.apply(results, responses[15].data.data.weather);
      results.push.apply(results, responses[16].data.data.weather);
      results.push.apply(results, responses[17].data.data.weather);

      results.forEach((element) => {
        delete element.astronomy;
        delete element.maxtempF;
        delete element.mintempF;
        delete element.avgtempF;
        delete element.totalSnow_cm;
        delete element.sunHour;
        element.humidity = element.hourly[0].humidity;
        element.pressure = element.hourly[0].pressure;
        element.FeelsLikeC = element.hourly[0].FeelsLikeC;
        delete element.hourly;
        //element.month = new Date(element.date).getMonth() + 1;
        delete element.date;
        element.maxtempC = (element.maxtempC - 0) / (40 - 0);
        element.mintempC = (element.mintempC - -4) / (26 - -4);
        element.avgtempC = (element.avgtempC - 0) / (32 - 0);
        element.humidity = (element.humidity - 22) / (99 - 22);
        element.pressure = (element.pressure - 983) / (1038 - 983);
        element.FeelsLikeC = (element.FeelsLikeC - 2) / (33 - 2);
        element.uvIndex = parseFloat(element.uvIndex);
      });

      var results_braga = [];
      var results_porto = [];
      var results_lisboa = [];
      var results_aveiro = [];
      var results_beja = [];
      var results_braganca = [];
      var results_castelobranco = [];
      var results_coimbra = [];
      var results_evora = [];
      var results_faro = [];
      var results_guarda = [];
      var results_leiria = [];
      var results_portalegre = [];
      var results_santarem = [];
      var results_setubal = [];
      var results_vianacastelo = [];
      var results_vilareal = [];
      var results_viseu = [];

      var i = 0;
      for (; i < results.length; i++) {
        //numeros errados
        if (i <= 6) {
          results_braga.push(Object.values(results[i]));
        } else if (i >= 7 && i <= 13) {
          results_porto.push(Object.values(results[i]));
        } else if (i >= 14 && i <= 20) {
          results_lisboa.push(Object.values(results[i]));
        } else if (i >= 21 && i <= 27) {
          results_aveiro.push(Object.values(results[i]));
        } else if (i >= 28 && i <= 34) {
          results_beja.push(Object.values(results[i]));
        } else if (i >= 35 && i <= 41) {
          results_braganca.push(Object.values(results[i]));
        } else if (i >= 42 && i <= 48) {
          results_castelobranco.push(Object.values(results[i]));
        } else if (i >= 49 && i <= 55) {
          results_coimbra.push(Object.values(results[i]));
        } else if (i >= 56 && i <= 62) {
          results_evora.push(Object.values(results[i]));
        } else if (i >= 63 && i <= 69) {
          results_faro.push(Object.values(results[i]));
        } else if (i >= 70 && i <= 76) {
          results_guarda.push(Object.values(results[i]));
        } else if (i >= 77 && i <= 83) {
          results_leiria.push(Object.values(results[i]));
        } else if (i >= 84 && i <= 90) {
          results_portalegre.push(Object.values(results[i]));
        } else if (i >= 91 && i <= 97) {
          results_santarem.push(Object.values(results[i]));
        } else if (i >= 98 && i <= 104) {
          results_setubal.push(Object.values(results[i]));
        } else if (i >= 105 && i <= 111) {
          results_vianacastelo.push(Object.values(results[i]));
        } else if (i >= 112 && i <= 118) {
          results_vilareal.push(Object.values(results[i]));
        } else if (i >= 119 && i <= 125) {
          results_viseu.push(Object.values(results[i]));
        }
      }
      results_braga = [].concat.apply([], results_braga);
      results_porto = [].concat.apply([], results_porto);
      results_lisboa = [].concat.apply([], results_lisboa);
      results_aveiro = [].concat.apply([], results_aveiro);
      results_beja = [].concat.apply([], results_beja);
      results_braganca = [].concat.apply([], results_braganca);
      results_castelobranco = [].concat.apply([], results_castelobranco);
      results_coimbra = [].concat.apply([], results_coimbra);
      results_evora = [].concat.apply([], results_evora);
      results_faro = [].concat.apply([], results_faro);
      results_guarda = [].concat.apply([], results_guarda);
      results_leiria = [].concat.apply([], results_leiria);
      results_portalegre = [].concat.apply([], results_portalegre);
      results_santarem = [].concat.apply([], results_santarem);
      results_setubal = [].concat.apply([], results_setubal);
      results_vianacastelo = [].concat.apply([], results_vianacastelo);
      results_vilareal = [].concat.apply([], results_vilareal);
      results_viseu = [].concat.apply([], results_viseu);

      tf.loadLayersModel('http://localhost:8080/keras_model/model.json')
        .then((model) => {
          var braga_tensor = tf.tensor3d([[results_braga]]);
          var porto_tensor = tf.tensor3d([[results_porto]]);
          var lisboa_tensor = tf.tensor3d([[results_lisboa]]);
          var aveiro_tensor = tf.tensor3d([[results_aveiro]]);
          var beja_tensor = tf.tensor3d([[results_beja]]);
          var braganca_tensor = tf.tensor3d([[results_braganca]]);
          var castelobranco_tensor = tf.tensor3d([[results_castelobranco]]);
          var coimbra_tensor = tf.tensor3d([[results_coimbra]]);
          var evora_tensor = tf.tensor3d([[results_evora]]);
          var faro_tensor = tf.tensor3d([[results_faro]]);
          var guarda_tensor = tf.tensor3d([[results_guarda]]);
          var leiria_tensor = tf.tensor3d([[results_leiria]]);
          var portalegre_tensor = tf.tensor3d([[results_portalegre]]);
          var santarem_tensor = tf.tensor3d([[results_santarem]]);
          var setubal_tensor = tf.tensor3d([[results_setubal]]);
          var vianadocastelo_tensor = tf.tensor3d([[results_vianacastelo]]);
          var vilareal_tensor = tf.tensor3d([[results_vilareal]]);
          var viseu_tensor = tf.tensor3d([[results_viseu]]);

          var pred = model.predict(braga_tensor).dataSync();
          var pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('braga')
            .update({ UV: pred_final });

          pred = model.predict(porto_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('porto')
            .update({ UV: pred_final });
          pred = model.predict(lisboa_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('lisboa')
            .update({ UV: pred_final });
          pred = model.predict(aveiro_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('aveiro')
            .update({ UV: pred_final });
          pred = model.predict(beja_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('beja')
            .update({ UV: pred_final });
          pred = model.predict(braganca_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('braganca')
            .update({ UV: pred_final });
          pred = model.predict(castelobranco_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('castelobranco')
            .update({ UV: pred_final });
          pred = model.predict(coimbra_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('coimbra')
            .update({ UV: pred_final });
          pred = model.predict(evora_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('evora')
            .update({ UV: pred_final });
          pred = model.predict(faro_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('faro')
            .update({ UV: pred_final });
          pred = model.predict(guarda_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('guarda')
            .update({ UV: pred_final });
          pred = model.predict(leiria_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('leiria')
            .update({ UV: pred_final });
          pred = model.predict(portalegre_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('portalegre')
            .update({ UV: pred_final });
          pred = model.predict(santarem_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('santarem')
            .update({ UV: pred_final });
          pred = model.predict(setubal_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('setubal')
            .update({ UV: pred_final });
          pred = model.predict(vianadocastelo_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('vianadocastelo')
            .update({ UV: pred_final });
          pred = model.predict(vilareal_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('vilareal')
            .update({ UV: pred_final });
          pred = model.predict(viseu_tensor).dataSync();
          pred_final = Math.round(pred * 10) / 10;
          firebase
            .database()
            .ref('previsao')
            .child('viseu')
            .update({ UV: pred_final });
        })
        .catch((err) => console.log(err));
    })
  )
  .catch((errors) => {
    // react on errors.
  });
