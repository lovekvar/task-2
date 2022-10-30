const mongoose = require('mongoose');
// const mongoURI = process.env.MONGODB_CONNECTION_STRING;
const mongoURI = 'mongodb+srv://lovekv:Mon27at-1@cluster0.phzsuxu.mongodb.net/task-2?retryWrites=true&w=majority';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;