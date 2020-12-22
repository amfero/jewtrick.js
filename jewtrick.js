var request = require("request");
var url = "https://jewtrick.ml/server/jewtrickstatus.html";


setInterval(function() {

    request(url, function (error, response, body) {

            if(body === "0") {
                console.log("сервер не отвечает")
            }
            if(body === "1") {
              console.log("Уже поздно пизда")
          }

          if(body === "2") {
              console.log("ДАВААААААААААААЙ")
          }
  });

          }, 1000)