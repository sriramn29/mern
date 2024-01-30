var express = require('express')
var mdb = require('mongoose');
var cors = require('cors');
var User = require('../back_end/models/login')
var bodyParser = require('body-parser')
var app = express()
var allowedOrigin = ["http://localhost:3000"]
app.use(
    cors({
        origin: allowedOrigin,
        credentials: true,
        methods: ["GET","POST"]
    })
)
app.use(bodyParser.json())
mdb.connect("mongodb+srv://sriramn29:9360398871@kec.cdsdsgi.mongodb.net/Kongu",{useNewUrlParser: true, useUnifiedTopology: true})
var db = mdb.connection;
db.once('open',()=>{
    console.log("Connection to MongoDB is Successful");
})
app.get("/",(reqeuest,response)=>{
    response.send("Welcome to Backend server")
})
// app.get("/users",(reqeuest,response)=>{
//     response.status(200).send("This is user Route")
// })
// app.get("/user",(request, response) => {
//     response.json({
//         course:"MERN"
//     })

// })
// const newLogin = new login_module({
//     user_name:"Kongu",
//     name:"Sriram N",
//     email:"sriramnavaneethakrishnan@gmail.com",
//     password:"Sriram@29/12"
// })
//newLogin.save().then(()=>console.log("Login Created"))
app.post("/signup",(req, res) => {
    try {
        var {name, email,password}= req.body
    console.log(name,email,password)
    const newUser = new User({
        name:name,
        email:email,
        password:password
    })
    newUser.save().then(()=>{message:"User Added"});
    return res.json({message:"User Note Added"})
        
    } catch (error) {
        
    }
})
app.listen(3001)
console.log("Backend Started!!!")

/*
mdb.connect('mongodb+srv://sriramn29:<password>@kec.cdsdsgi.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mdb.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("Connected to MongoDB");
});
const newUser = new User({ name: 'Prasanth K S', email: 'prasanthksp@gmail.com' });
newUser.save().then(() => console.log('User saved!'));
Create a model for this seperately
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const user_module = mongoose.model('user', userSchema);
module.exports = user_module;

*/