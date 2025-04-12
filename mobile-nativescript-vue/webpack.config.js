const nodeLibs = require("node-libs-browser");

module.exports = {
  resolve: {
    fallback: {
      "util": nodeLibs.util,
    },
  },
};
