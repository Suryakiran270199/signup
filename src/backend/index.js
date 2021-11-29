const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const app = express();
const authRoute = require('./routes/Auth')
require('./Passport'); 
const cors = require('cors');

app.use(cookieSession({
    name:"session",
    keys:["hippi"],
    maxAge:24 * 60* 60* 100
    
}))

app.use(passport.initialize());
app.use(passport.session())

app.use(cors({
    origin:"http:localhost:3000",
    methods:"GET, POST, PUT, DELETE",
    credentials:true,
}))

app.use("/auth", authRoute)

const PORT = 4000;
app.listen(PORT, () =>{
    console.log(`listening port ${PORT}`)
});