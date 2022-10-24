const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

//routes
const userRouter = require("./routes/user.route");
const jobInfoRouter = require("./routes/job.route");
const hiringManagerRouter = require("./routes/hiringManager.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/user", userRouter);
app.use("/jobs", jobInfoRouter);
app.use("/hiringmanager", hiringManagerRouter);

module.exports = app;
