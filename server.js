var express = require("express");
var server = express();
var bodyParser = require("body-parser");

var fileUpload = require("express-fileupload");

server.use(express.static(__dirname + "/Public"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*1024*1024}}))

var DB=require("nedb-promises");
var luusssDB = DB.create(__dirname+"/luusss.db");
var PorfolioDB = DB.create(__dirname+"/Porfolio.db");
var ContactDB = DB.create(__dirname+"/Contact.db");


server.get("/luusss", (req, res) => {

    luusssDB.find({},{_id:0}).then(results=>{
       
        res.send(results);
    }).catch(error=>{

    })
    
})

server.get("/portfolio", (req, res) => {

    PorfolioDB.find({}).then(results=>{
        res.send(results);
    })
    
})

server.post("/contact", (req, res) => {
    ContactDB.insert(req.body);
    var upFile=req.files.myFile1;
    upFile.mv(__dirname+"/public/upload/"+upFile.name, function(err){
        
        res.redirect("/error.html");

    })
    res.redirect("/Home.html")
})


server.listen(80)