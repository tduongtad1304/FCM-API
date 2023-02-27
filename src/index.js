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
      image: req.body.imageUrl,
    }
  };

  const options = notification_options;

  admin
    .messaging()
    .sendToDevice(registrationToken, message, options)
    .then((response) => {
      if (response.results[0].messageId == null) {
        console.log(response.results[0].error);
        res.status(400).send(response.results[0].error);
      } else {
        console.log(message);
        res.status(200).send('Notification sent successfully with messageId: ' + response.results[0].messageId);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log("listening to PORT = " + port);
});