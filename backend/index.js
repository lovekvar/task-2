const dotenv = require('dotenv');
dotenv.config();
// console.log("Connection String : ",process.env.MONGODB_CONNECTION_STRING);
const connectToMongo = require('./dbConnect');
const cors = require('cors');
const express = require('express');
connectToMongo();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use('/api', require('./routes'));
app.listen(port, () => {
    console.log(`LegalAI task 2 backend listening at http://localhost:${port}`)
  })