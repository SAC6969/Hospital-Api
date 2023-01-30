const express = require('express');
const PORT = 8000;

const app = express();
const db = require('./config/mongoose');
const passport = require('passport');
const JwtStrategy = require('./config/passport-jwt-strategy');

//// configure body parser
app.use(express.urlencoded())

//passport
app.use(passport.initialize());

//set routes
app.use('/',require('./routes'));

//listening port
app.listen(PORT,function(err){  
    if(err){
        console.log("error while starting server",err);
    }
    console.log("Server started.");
})