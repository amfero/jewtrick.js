var request = require("request");
var cheerio = require("cheerio");
var url = "https://jewtrick.ml/server/jewtrickstatus.html";

setInterval(function() {

    request(url, function (error, response, body) {
        var $page = cheerio.load(body),
            text = $page("body").text();

            //

          if(text === "2") {
              console.log("ДАВААААААААААААЙ")
          }
  });

          }, 1000)
