//Dependecies
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

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


//SignUp Endpoint

app.post('/signup', (req, res) =>{

    const user = req.body;

    const existingUser = USERS.find( u => u.email  === user.email);
    try {
        if(existingUser){
            res.status(403).json({message : "User Already Exist"})
        }

        else{
            USERS.push(user);

            const token = generateJwt(user);
        
            res.status(200).json({message : "Account Created Successfully", token})
            
        }
    } catch (error) {

        res.json({message : " Internal Server Error"})
        
    }
   


})


//Login Endpint

app.post('/login', (req,res)  => {
    const user = req.body;

    const existingUser = USERS.find(u => u.email === user.email && u.password === user.password);

    if(existingUser){
        const token = generateJwt(user);
        res.status(200).json({message : "Logged In", token});
    }

    else{ 

        res.status(403).json({message: 'User Not Found'});

    }

})




app.listen(PORT, () => {
  console.log(`Server is Running on Port : ${PORT}`);
});
