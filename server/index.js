//Dependecies
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { check, validationResult } = require( 'express-validator');
const {z} = require('zod')

//Config
const app = express();
app.use(cors());
app.use(express.json());

//PORT
const PORT = 5000;

// Array for now
let ADMINS = [];
let USERS = [];
let COURSES = [];

//JWT Generation and authentication

const secretKey = "MySecretKey";

const generateJwt = (data) => {
  const payload = {email : data.email}; 

  return jwt.sign(payload, secretKey); // You can also add timer here with this syntax : {expiresIn : 1h}
};

// Input validation
const signUpInput = z.object({
    name : z.string().min(3).max(50),
    email : z.string().email("This is not a valid email"),
    password : z.string().min(8).max(50)
})
//SignUp Endpoint

app.post('/signup',(req, res) =>{
    const parsedInput = signUpInput.safeParse(req.body);
    if(!parsedInput.success){
        res.status(411).json({message : "parsing error"});
    }

    const email = parse;
    const existingUser = USERS.find( u => u.email  === user.email);
    try {
        if(existingUser){
            res.status(403).json({message : "user exists"})
        }

        else{
            USERS.push(user);

            const token = generateJwt(user);
        
            res.status(200).json({message : "registered", token})
            
        }
    } catch (error) {

        res.json({message : " Internal Server Error"})
        
    }
   


})


//Login Endpint

app.post('/login', (req,res)  => {
    const user = req.body;
    console.log("login", user)
    const existingUser = USERS.find(u => u.email === user.email && u.password === user.password);

    if(existingUser){
        console.log("existing")
        const token = generateJwt(user);
        res.status(200).json({message : "logged in", token});
    }

    else{ 

        res.status(403).json({message: 'User Not Found'});

    }

})




app.listen(PORT, () => {
  console.log(`Server is Running on Port : ${PORT}`);
});
