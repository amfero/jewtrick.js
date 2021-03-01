var request = require('request');
var config = require('./config.json');
var url = config.url;

setInterval(function() {
    request(url, function (error, response, body) {
        if(body == "0") {
            console.log('2b2t не отвечает');
        }
        if(body == '1') {
            console.log('jew trick невозможен из-за количества игроков');
        }
        if(body == '2') {
            console.log('ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ');
        }
    });
}, config.seconds * 1000);