"use strict";

const config = require("./config");
const bootstrap = require("./bootstrap");
const register = require("./register");
const controllers = require("./controllers");
const routes = require("./routes");
const services = require("./services");

module.exports = {
  bootstrap,
  register,
  config,
  controllers,
  routes,
  services,
};
