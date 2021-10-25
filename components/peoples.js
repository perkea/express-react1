const express = require("express");
const peoplesRouter = express.Router();
const People= require("../models/people");

// ROUTES
////////////////////////////////
// create a test route
peoplesRouter.get("/", (req, res) => {
  res.send("hello world");
});
// PEOPLE INDEX ROUTE
peoplesRouter.get("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE CREATE ROUTE
  peoplesRouter.post("/", async (req, res) => {
    try {
      // send all people
      res.json(await People.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
// PEOPLE DELETE ROUTE
peoplesRouter.delete("/people/:id", async (req, res) => {
    try {
      // send all people
      res.json(await People.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE UPDATE ROUTE
  peoplesRouter.put("/people/:id", async (req, res) => {
    try {
      // send all people
      res.json(
        await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = peoplesRouter