"use strict";

const { pluginId } = require("../utils");

module.exports = {
  getConfig: async (ctx) => {
    const config = await strapi.plugin(pluginId).service("config").getConfig();
    ctx.send(config);
  },
};
