var express = require("express");
var app =express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/",function(req,res){
    request("https://api.covid19india.org/data.json", function(error, response, body){
      if(!error && response.statusCode === 200){
          var data = JSON.parse(body);
      res.render("results",{data:data});
  }
  });
});

app.get("/dailyupdates",function(req,res){
  request("https://api.covid19india.org/data.json", function(error, response, body){
    if(!error && response.statusCode === 200){
        var data = JSON.parse(body)
    res.render("dailyupdates",{data:data});
}
});
});


app.get("/test",function(req,res){
  request("https://api.covid19india.org/data.json", function(error, response, body){
    if(!error && response.statusCode === 200){
        var data = JSON.parse(body)
    res.render("tested",{data:data});
}
});
});





app.listen(3000,function(req,res){
   console.log("Covid-19 app has started");
});