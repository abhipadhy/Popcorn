const uuid = require('uuid');
var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require('body-parser');
const { compile } = require('ejs');
const sessionId = uuid.v4();
require('dotenv').config();
app.use(express.static(path.join(__dirname, '/public')));

app.use(require("express-session")({
	secret:"divesh abhishek",
	resave:false,
	saveUninitialized: false
}));



app.use(express.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({extended:true,limit: '50mb'}));
var port=process.env.PORT || 3000;
app.listen(port,process.env.IP,function(){
	console.log("server started.");
});

app.get('/search',function(req,res){
        res.render("search.ejs");
});

app.get('/trending',function(req,res){
    res.render("trending.ejs");
});
app.get('/',function(req,res){
    res.render("home.ejs");
});

app.get('/404',function(req,res){
    res.render("404.ejs");
});