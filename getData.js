const axios = require('axios');
const fs = require('fs');

let results = [] 

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();


var last = new Date();
last = new Date(last.setDate(last.getDate() - 5));
var dd1 = String(last.getDate()).padStart(2, '0');
var mm1 = String(last.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy1 = last.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
last = yyyy1 + '-' + mm1 + '-' + dd1;

let Braga = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Braga, Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Porto = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Porto, Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Lisboa = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Lisboa, Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Aveiro = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Aveiro,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Beja = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Beja,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Braganca = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Braganca,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Castelo = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Castelo%20Branco,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Coimbra = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Coimbra,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Evora = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Evora,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Faro = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Faro,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Guarda = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Guarda,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Leiria = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Leiria,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Portalegre = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Portalegre,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Santarem = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Santarem,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Setubal = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Sesimbra,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Viana = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Viana%20do%20Castelo,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let VilaReal = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Vila%20Real,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'
let Viseu = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=3ad411add2e2404e8b5143606200104&q=Viseu,%20Portugal&format=json&date=' + last + '&enddate=' + today + '&tp=24'

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


axios.all([r_Braga,r_Porto, r_Lisboa,r_Aveiro,r_Beja,r_Braganca,r_Castelo,r_Coimbra,r_Evora,r_Faro,r_Guarda,r_Leiria,r_Portalegre,r_Santarem,r_Setubal,r_Viana,r_VilaReal,r_Viseu]).then(axios.spread((...responses) => { 
    results.push.apply(results, responses[0].data.data.weather)
    results.push.apply(results, responses[1].data.data.weather)
    results.push.apply(results, responses[2].data.data.weather) 
    results.push.apply(results, responses[3].data.data.weather) 
    results.push.apply(results, responses[4].data.data.weather) 
    results.push.apply(results, responses[5].data.data.weather) 
    results.push.apply(results, responses[6].data.data.weather) 
    results.push.apply(results, responses[7].data.data.weather) 
    results.push.apply(results, responses[8].data.data.weather) 
    results.push.apply(results, responses[9].data.data.weather) 
    results.push.apply(results, responses[10].data.data.weather) 
    results.push.apply(results, responses[11].data.data.weather) 
    results.push.apply(results, responses[12].data.data.weather) 
    results.push.apply(results, responses[13].data.data.weather) 
    results.push.apply(results, responses[14].data.data.weather) 
    results.push.apply(results, responses[15].data.data.weather) 
    results.push.apply(results, responses[16].data.data.weather) 
    results.push.apply(results, responses[17].data.data.weather) 
    

    results.forEach(element => {
        delete element.astronomy
        delete element.maxtempF
        delete element.mintempF
        delete element.avgtempF
        delete element.totalSnow_cm
        delete element.sunHour
        element.humidity = element.hourly[0].humidity
        element.pressure = element.hourly[0].pressure
        element.FeelsLikeC = element.hourly[0].FeelsLikeC
        delete element.hourly
        element.month = new Date(element.date).getMonth() + 1;
    }); 

    var i = 0;
    for(;i<results.length;i++){ 
        if(i <= 5){ 
            results[i].city = "Braga"
        } else if(i>=6 && i<=11){ 
            results[i].city = "Porto"
        } else if(i>=12 && i<=17){ 
            results[i].city = "Lisboa"
        } else if(i>=18 && i<=23){ 
            results[i].city = "Aveiro"
        } else if(i>=24 && i<=29){ 
            results[i].city = "Beja" 
        } else if(i>=30 && i<=35){ 
            results[i].city = "Braganca"
        } else if(i>=36 && i<=41){ 
            results[i].city = "Castelo Branco"
        } else if(i>=42 && i<=47){ 
            results[i].city = "Coimbra"
        } else if(i>=48 && i<=53){ 
            results[i].city = "Evora"
        } else if(i>=54 && i<=59){ 
            results[i].city = "Faro"
        } else if(i>=60 && i<=65){ 
            results[i].city = "Guarda"
        } else if(i>=66 && i<=71){ 
            results[i].city = "Leiria"
        } else if(i>=72 && i<=77){ 
            results[i].city = "Portalegre"
        } else if(i>=78 && i<=83){ 
            results[i].city = "Santarem"
        } else if(i>=84 && i<=89){ 
            results[i].city = "Setubal"
        } else if(i>=90 && i<=95){ 
            results[i].city = "Viana do Castelo"
        } else if(i>=96 && i<=101){ 
            results[i].city = "Vila Real"
        } else if(i>=102 && i<=107){ 
            results[i].city = "Viseu"
        }
    }
    
    console.log(results);
    console.log(results.length);
    var myJSON = JSON.stringify(results);
    console.log(myJSON);
    fs.writeFile("thing.json", myJSON, function (err, result) {
        if (err) console.log('error', err);
    });
    // use/access the results 
    })).catch(errors => {
// react on errors.
})