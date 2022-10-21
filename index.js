const dotenv = require("dotenv").config();
const colors = require("colors");
const errorHandler = require("./middlewares/errorHandler");
const dbConnection = require("./utils/dbConnection");



const app = require("./apps");

// db connection
dbConnection();

// server
const port = process.env.PORT || 5000;

// global error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});