"use strict";

import "dotenv/config";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import axios from "axios";

const argv = yargs(hideBin(process.argv))
  .options({
    a: {
      describe: "Address to be searched",
      demand: true,
      alias: "address",
      string: true,
    },
  })
  .help()
  .alias("help", "h").argv;

const API_KEY = process.env.OPENWEATHER_KEY;
let encodedAddress = encodeURIComponent(argv.address);
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=${API_KEY}&units=metric`;

axios
  .get(url)
  .then((info) => {
    if (info.data.cod !== 200) {
      throw new Error("Unable to find that address.");
    }
    console.log(info.data);
    return {
      name: info.data.name,
      temp: info.data.main.temp,
      feels_like: info.data.main.feels_like,
    };
  })
  .then((data) => {
    console.log(
      `${data.name} temperature ${data.temp}, but feels like ${data.feels_like}.`,
    );
  })
  .catch((e) => console.log(e));
