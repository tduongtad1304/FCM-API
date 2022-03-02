const express = require("express");
const bodyparser = require("body-parser");
var admin = require("firebase-admin");

var serviceAccount = require("./tad_service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(bodyparser.json());

const port = 3000;

const notification_options = {
  priority: "high",
  timeToLive: 60 * 60 * 24,
};

app.post("/firebase/notification", (req, res) => {
  const registrationToken = req.body.registrationToken;

  const message = {
    notification: {
      title: req.body.title,
      body: req.body.body,
    },
  };

  console.log(message);
  
  const options = notification_options;

  admin
    .messaging()
    .sendToDevice(registrationToken, message, options)
    .then((response) => {
      res.status(200).send("Notification sent successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log("listening to PORT = " + port);
});