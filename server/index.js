//Dependecies
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { check, validationResult } = require("express-validator");
const { z } = require("zod");

//DataBase Dependency
const mongodb = require("./db/connection");
const User = require("./models/User");
const Order = require("./models/Order")
mongodb();

//Config
const app = express();
app.use(cors());
app.use(express.json());

//PORT
const PORT = 5000;

// Array for now
let ORDERS = [];


//JWT Generation and authentication

const secretKey = "MySecretKey";

const generateJwt = (data) => {
  const payload = { email: data.email };

  return jwt.sign(payload, secretKey); // You can also add timer here with this syntax : {expiresIn : 1h}
};

// Input validation
const signUpInput = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email("This is not a valid email"),
  password: z.string().min(8).max(50),
});
//SignUp Endpoint

app.post("/signup", async (req, res) => {
  const parsedInput = signUpInput.safeParse(req.body);
  if (!parsedInput.success) {
    res.status(411).json({ message: "parsing error" });
  }

  const user = parsedInput.data;
  try {
    const existingUser = await User.findOne({ email: user.email });

    if (existingUser) {
      res.status(403).json({ message: "user exists" });
    } else {
      const newUser = new User({
        name: user.name,
        email: user.email,
        password: user.password,
      });

      await newUser.save();

      const token = generateJwt(user);

      res.status(200).json({ message: "registered", token, name: user.name });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: " Internal Server Error" });
  }
});

//Login Endpint

app.post("/login", async (req, res) => {
  const user = req.body;
  console.log("controll Reached Here");
  try {
    const existingUser = await User.findOne({
      email: user.email,
      password: user.password,
    });

    if (existingUser) {
      const token = generateJwt(user);
      res.status(200).json({
        message: "logged in",
        token,
        name: existingUser.name,
        email: existingUser.email,
      });
    } else {
      res.status(403).json({ message: "User Not Found" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error" });
  }
});

//Order Add

app.post("/buynow", async(req, res) => {
  const newOrderData = req.body;
try {
    const existingUserIndex = await Order.findOne({user : newOrderData.user});
  if (existingUserIndex) {
    existingOrder.addedProduct.push(...newOrderData.addedProduct);
    existingOrder = await existingOrder.save();
  } else {
    const newOrder = new Order({
        user: newOrderData.user,
        addedProduct: newOrderData.addedProduct,
  });

  existingOrder = await newOrder.save();
  }

  res.status(200).json({ message: "done" });
    
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
}
  
});

//Orders Fetch

app.get("/myorders", async (req, res) => {
    const  {user}  = req.query;
  
    try {
      const orders = await Order.findOne({user : user});

      if (!orders) {
        console.log("here")
        return res.json({ order: [] }); 
      }
      res.json({ order: orders.addedProduct });
      console.log(orders.addedProduct)


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is Running on Port : ${PORT}`);
});
