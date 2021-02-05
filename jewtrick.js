var request = require("request");
var url = "https://jewtrick.ml/jewtrickstatus.html";


setInterval(function() {

    request(url, function (error, response, body) {
          if(body === "2") {
              console.log("ДАВААААААААААААЙ")
          }
  });

          }, 2 * 1000)