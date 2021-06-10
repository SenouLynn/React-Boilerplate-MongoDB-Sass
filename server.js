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
let productionState = true;


if(!productionState){
    staticDir = path.resolve('./client/build')

} else {
    staticDir = path.resolve('./client/public')

//<--- Local/Build Server Switch --->//
app.use(express.static(staticDir));
}




// Catchall to send back to index.html
app.get("*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
  