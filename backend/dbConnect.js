const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_CONNECTION_STRING;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;