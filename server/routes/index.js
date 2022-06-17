module.exports = [
  {
    method: "GET",
    path: "/config",
    handler: "config.getConfig",
    config: { policies: [] },
  },
];
