//<--- Import Express Server Library --->//
const express = require('express');
const app = express();
const path = require('path');

//<--- Import .env to reference secret keys --->//
require('dotenv').config();


//Middleware
app.use(express.urlencoded({ extended: false }));

//<--- Server Port --->//
// Match Proxy //
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Listening on Port: ", port);
});

//<--- Local/Build Path Switch connecting to DB ---> //
let staticDir;
let herokuConnect; 


if(process.env.MONGODB){
    staticDir = path.resolve('./client/build')
    herokuConnect = process.env.MONGODB
} else {
    staticDir = path.resolve('./client/public')
    herokuConnect =  "" // INSERT LOCAL MONGODB ADDRESS EX: "mongodb://localhost:27017/til"
}
//<--- Local/Build Server Switch --->//
app.use(express.static(staticDir));

//<--- Import Mongoose Dependencies --->//
const mongoose = require('mongoose')
const ObjectId = require("mongodb").ObjectId;
const dbConnect = mongoose.connection;

mongoose.connect( herokuConnectVar, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

// Schema Declaration //
const postSchema = new mongoose.Schema({
    // author: String,
    // postTitle: String,
    // date: Date,
    // time: String,
    // postContent: String,
    // keyWords: Array,
  });
  





// Catchall to send back to index.html
app.get("*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
  