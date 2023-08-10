const express = require('express');
const APP_SERVER = express();

// REGISTER ALL THE CONTROLLER IN APP SERVER

APP_SERVER.use("/users", require("./Controllers/Users.controller"));
APP_SERVER.use("/mahal", require("./Controllers/Mahal.controller"));
APP_SERVER.use("/booking", require("./Controllers/Bookings.controller"));

module.exports = APP_SERVER;