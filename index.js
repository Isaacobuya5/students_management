const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Students = require("./routes/students");
const port = process.env.PORT || "3000";

mongoose
  .connect(
    "mongodb+srv://isaac:YZv5xlNvqwuJMa2Z@cluster0-zob1a.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(success => console.log("Succesful connection"))
  .catch(error => console.log("Failed to connect " + error));

app.get("/", (req, res) =>
  res.send({
    message: "My first route"
  })
);

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use("/api", Students);

app.listen(port, () => console.log("Server running succesfully"));
