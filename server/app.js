const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

//import models
require("./models/user");

app.use(express.json());

//import Routes
app.use(require("./routes/auth"));
const { MONGOURI } = require("./keys");

//Create Connection to Mongo Db
mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

mongoose.connection.on("error", () => {
  console.log("DB ERROR", error);
});

//App listening to port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
