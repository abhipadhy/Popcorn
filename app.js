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

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()) );
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({extended:true,limit: '50mb'}));
var port=process.env.PORT || 3000;
app.listen(port,process.env.IP,function(){
	console.log("server started.");
});