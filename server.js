//<--- Import Express Server Library --->//
const express = require('express');
const app = express();
const path = require('path');

//<--- Import .env to reference secret keys --->//
require('dotenv').config();

//<--- Contact form Libraries --->//
const nodemailer = require('nodemailer');
const cors = require('cors');
const { getMaxListeners } = require('process');



//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

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
  }
  
  //<--- Local/Build Server Switch --->//
  app.use(express.static(staticDir));

//<--- NodeMailer Setup --->//
const transporter = nodemailer.createTransport({
  service: "gmail",
  // port: 587,
  auth: {
    type:"OAuth2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  }
})



//<--- verify connection configuration --->//
transporter.verify(function(error, success) {
  if(error){
    console.log(error);
  } else {
    console.log("Server is ready to take our messages: ", success)
  }
})

//<--- Incoming form information from contact form --->//
let sendSuccess;

app.post('/send-email', (req, res, next) => {

  console.log("inside email post")
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let content = req.body.content;

  let mail = {
    from: email,
    to: process.env.EMAIL,
    subject: subject,
    text:"From " + name + `\n` + content
  }

  transporter.sendMail(mail, (err, data) => {
    if(err) {

      sendSuccess = false

    } else {
      console.log("== Message Sent ==")


      sendSuccess = true
    }  
  })
})

app.get("/email", (req, res) => {

  res.send(sendSuccess)

})


app.post("/test", (req, res) => {
  console.log("Received from front end")

  let test = req.body.testInput

  console.log("Testinput = ", test)
})

// Catchall to send back to index.html
app.get("*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });
  