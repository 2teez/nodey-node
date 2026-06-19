"use strict";

require("dotenv").config();

const yargs = require("yargs");
//import { hideBin } from "yargs/helpers"; // for ES MOdule in js
const request = require("request");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;
//console.log(JSON.stringify(argv, null, 2));
//
const API_KEY = process.env.OPENWEATHER_KEY;
//const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
let encodedAddress = encodeURIComponent(argv.address);
request(
  {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=${API_KEY}&units=metric`,
    json: true,
  },
  (error, response, body) => {
    if (error) {
      console.log("Unable to connect:", error);
    } else {
      console.log(`City: ${body["name"]} - ${body["sys"]["country"]}`);
      console.log(`Latitude: ${body["coord"]["lat"]}`);
      console.log(`Latitude: ${body["coord"]["lon"]}`);
    }
  },
);
