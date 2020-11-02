const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");

//Create Connection to Mongo Db
mongoose.connect(MONGOURI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log("DB CONNECTED");
});

mongoose.connection.on("error", () => {
  console.log("DB ERROR", error);
});

//import models
require("./models/user");
require("./models/post");

app.use(express.json());

//import Routes
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

//App listening to port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
