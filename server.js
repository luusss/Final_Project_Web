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



server.get("/luusss", (req, res) => {

    luusssDB.find({},{_id:0}).then(results=>{
       
        res.send(results);
    })
    
})


server.post("/luusss", (req, res) => {
  
    var upFile=req.files.myFile1;
    var ASD= "/upload/"+upFile.name;
    req.body.myFile1 = ASD;
    upFile.mv(__dirname+"/Public/upload/"+upFile.name, function(err){

        });
         luusssDB.insert(req.body).catch(err => console.log(err));//加入資料庫
    res.redirect("/Funny.html")
})


server.listen(5500)