
///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3001
const { DATABASE_URL, PORT = 3001 } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
const cors = require("cors");
const morgan = require("morgan");
//import mongoose
const mongoose = require("mongoose");
const People = require("./models/people");
const peoplesControllers = require("./components/peoples");


// import middlware
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use("/people", peoplesControllers);
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(DATABASE_URL);


// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error));

///////////////////////////////

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));