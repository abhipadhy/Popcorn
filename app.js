
var express=require('express');
var app=express();
var path=require('path');
var bodyparser=require('body-parser');
const { compile } = require('ejs');
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
        res.render("search.ejs",{key:process.env.APIKEY});
});

app.get('/trending',function(req,res){
    res.render("trending.ejs",{key:process.env.APIKEY});
});
app.get('/',function(req,res){
    res.render("home.ejs",{key:process.env.APIKEY});
});


app.post('/',function(req,res){
    var query = req.body.query;
    res.redirect("/search");
});


app.get('/genre',function(req,res){
    res.render("genre.ejs",{key:process.env.APIKEY});
});

app.get('*', function(req, res){
    console.log('page not found');
    res.render("404.ejs");
  });