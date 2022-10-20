const dotenv = require("dotenv").config();
const colors = require("colors");
const errorHandler = require("./middlewares/errorHandler");


const app = require("./app");

// db connection
dbConnection();

// server
const port = process.env.PORT || 5000;

// global error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});