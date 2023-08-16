const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Jat1nSood:Iamjatin24@cluster0.sllzdm9.mongodb.net/?retryWrites=true&w=majority";

const mongodb = async() =>{

    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

    } catch (error) {

        console.error("Error connecting to MongoDB:", error);

       
    }

       

    }

    module.exports = mongodb;