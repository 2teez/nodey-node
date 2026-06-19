"use strict";

import "dotenv/config";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .options({
    address: {
      describe: "Address looking for.",
      demand: true,
      alias: "a",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

const API_KEY = process.env.OPENWEATHER_KEY;
const encodedAddress = encodeURIComponent(argv.address);
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=${API_KEY}&units=metric`;

const fetchWeather = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(`Error handling waether: ${err.message}`);
  }
};

fetchWeather();
