const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

//routes
const userRouter = require("./routes/user.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/user", userRouter);

module.exports = app;
