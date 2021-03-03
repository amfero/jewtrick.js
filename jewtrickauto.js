var request = require('request');
var robot = require('robotjs');
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
            setTimeout(() => robot.mouseClick(), config.timeoutBeforeConnect);
            console.log('ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ЖЕВТРИК ТАЙМ ');
        }
    });
}, config.interval);

