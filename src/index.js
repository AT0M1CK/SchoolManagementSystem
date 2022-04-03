// main index file

var express = require("express");

var app = express();

let students = [
    {
        name:"raj",
        age:12,
    },
    {
        name:"ram",
        age:16,
    },
    {
        name:"bheem",
        age:13,
    },
    {
        name:"arjun",
        age:14,
    },
    {
        name:"seeta",
        age:15,
    }
]



app.get('/',function(req,res){
    res.send("You are on the root of server");
})

app.get('/students',function(req,res){
    res.send(students);
})


var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address.port;
    console.log("Starting server...");
})

