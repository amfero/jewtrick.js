var request = require("request");
var cheerio = require("cheerio");
var url = "https://jewtrick.ml/server/jewtrickstatus.html";


setInterval(function() {

    request(url, function (error, response, body) {
        var text = body;

            if(text === "0") {
                console.log("сервер не отвечает")
            }
            if(text === "1") {
              console.log("Уже поздно пизда")
          }

          if(text === "2") {
              console.log("ДАВААААААААААААЙ")
          }
  });

          }, 1000)
