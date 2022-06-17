"use strict";

/**
 * config.js configuration service
 */

const { pluginId } = require("../utils");

module.exports = ({ strapi }) => {
  return {
    getConfig() {
      return { sharedLink: strapi.plugin(pluginId).config("sharedLink") };
    },
  };
};
