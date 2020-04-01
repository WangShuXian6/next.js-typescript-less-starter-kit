const path = require("path");
const withLess = require("@zeit/next-less");
const withImages = require("next-images");

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
require("dotenv").config({
  path: path.join(process.cwd(), `./.env.${process.env.NODE_ENV}`)
});

module.exports = {
  ...withImages(
    withLess({
      cssModules: true,
      webpack(config, options) {
        config.resolve.alias["@/components"] = path.join(
          __dirname,
          "components"
        );
        config.resolve.alias["@/assets"] = path.join(__dirname, "assets");
        config.resolve.alias["@/constants"] = path.join(__dirname, "constants");
        config.resolve.alias["@/lib"] = path.join(__dirname, "lib");
        config.resolve.alias["@/mock"] = path.join(__dirname, "mock");
        config.resolve.alias["@/pages"] = path.join(__dirname, "pages");
        config.resolve.alias["@/services"] = path.join(__dirname, "services");
        return config;
      }
    })
  ),
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    SERVER_URL: process.env.SERVER_URL
  }
};
