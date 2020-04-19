require('dotenv').config();

const nodemailer = require('nodemailer');
//const log = console.log;


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



setInterval(function () {
    var date = new Date(); // Create a Date object to find out what time it is
    if (date.getHours() === 14 && date.getMinutes() === 00) { // Check the time
        var info = null
        var distritosDanger = []
        var emailsToSend = []
        // Update dos valores da BD
        firebase.database().ref("previsao").on("value", function (Snapshot) {
            info = Snapshot.val();
            info = Object.values(info);

            var i = 0
            for (; i < info.length; i++) {
                if (info[i].UV >= 7) {
                    distritosDanger.push(info[i].distrito)
                }
            }
            console.log(distritosDanger);
            firebase.database().ref('distritos').on("value", function (results) {
                info = results.val();
                info = Object.values(info);
                console.log(info);
                var i = 0
                for (; i < info.length; i++) {
                    if (distritosDanger.includes(info[i].distrito)) {
                        emailsToSend.push(info[i].email)
                    }
                }
                console.log(emailsToSend);
                // Step 1
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL, // TODO: your gmail account
                        pass: process.env.PASSWORD // TODO: your gmail password
                    }
                });

                // Step 2
                let mailOptions = {
                    from: 'emailtesterjs123@gmail.com', // TODO: email sender
                    to: emailsToSend, // TODO: email receiver
                    subject: 'ALERTA - PERIGO DE RADIAÇÃO UV',
                    text: 'Boa tarde,\n\n Esperamos que esteja tudo bem. Passamos por cá para o alertar que o distrito onde vive amanhã estará com um elevado indíce de raios UV, pelo que aconselhamos, sobretudo a evitar explosição solar.\n\n\n Com os melhores cumprimentos,\nA equipa de desenvolvimento.'
                };

                console.log("vou mandar um email");

                // Step 3
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        return log('Error occurs');
                    }
                    return log('Email sent!!!');
                });


            })
        })
    }

}, 60000);