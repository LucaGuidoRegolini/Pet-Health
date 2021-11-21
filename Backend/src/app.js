const express = require("express");
const cors = require("cors");

require("express-async-errors");
require("./db");

const router = require("./routers");
const errorHandler = require("./errors/handler.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

module.exports = app;
