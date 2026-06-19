"use strict";

const yargs = require("yargs");
const gecode = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");

const argv = yargs
  .options({
    address: {
      describe: "Address to look for.",
      demand: true,
      alias: "a",
      string: true,
    },
  })
  .help()
  .alias("help", "-h").argv;

gecode.gecodedAddress(argv.address, (errorMessage, results) => {
  if (errorMessage !== undefined) {
    console.log(`${errorMessage}`);
  } else {
    const { name: name, latitude: latitude, longitude: longitude } = results;
    weather.getWeather(latitude, longitude, (err, msg) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(
        `Name: ${name}\nIt's currently ${msg.temperature}. It feels like ${msg.apparentTemperature}\n`,
      );
    });
  }
});
