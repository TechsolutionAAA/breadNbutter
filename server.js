require("dotenv").config();
var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const Route = require("./routes/index");

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use("/v1/api", Route);

// enable cors without external module
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTION, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

app.listen(port, () => console.log("Backend API is now running on port: " + port));