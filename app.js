const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const passportLocalMongoose = require("passport-local-mongoose");
const _ = require("lodash");
const socketio = require("socketio");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

mongoose.set('useNewUrlParser', true); //remove deprecation warning
mongoose.set('useFindAndModify', false); //remove deprecation warning
mongoose.set('useCreateIndex', true); //remove deprecation warning
mongoose.connect("mongodb://localhost:27017/biofuel"); //connects to mongodb

const userSchema =new mongoose.Schema({
    fboName : String,
    mobNumber : String,
    address: String,
    pincode: String,
    email : String,
    password:String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("userAccount", userSchema);

app.get("/",(req,res)=>{
    res.render("Hello");
});


app.listen(3000, ()=>{
    console.log("Server is listening at port 3000");
});