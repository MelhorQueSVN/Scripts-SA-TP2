const fs = require('fs')
//const tf = require('@tensorflow/tfjs');



fs.readFile("thing.json", function (error, content) {
    var data = JSON.parse(content);


    var braga_data = []

    var i = 0;
    for (; i < data.length; i++) {
        if (data[i].city === 'Braga') {
            braga_data.push(data[i])
        }

    }
    braga_data.forEach(element => {
        delete element.city
        delete element.month
        delete element.date
    });


    braga_data = Object.values(braga_data)


    var braga_final_array = []

    i = 0
    for (; i < braga_data.length; i++) {
        braga_final_array.push(Object.values(braga_data[i]))
    }
    console.log(braga_final_array);





});