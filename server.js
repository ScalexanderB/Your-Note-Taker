// Server Dependencies
const express = require("express");
const app = express();

// Port for listener to call
let PORT = process.env.PORT || 4000;

// Routers
const apiRouter = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// For parsing data using express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware
app.use(express.static("public"));
app.use(express.static("db"));

app.use(apiRouter);
app.use(htmlRouter);

// listener for starting the server
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

// run 'npm start' or 'nodemon server.js' to start up the server..