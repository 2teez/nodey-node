"use strict";

require("dotenv").config();

const request = require("request");

const gecodedAddress = (address, callback) => {
  const API_KEY = process.env.OPENWEATHER_KEY;
  let encodedAddress = encodeURIComponent(address);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=${API_KEY}&units=metric`;

  request(
    {
      url: url,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        callback(`HTTP: ${error}`, undefined);
        return;
      } else if (body.cod !== 200) {
        callback(`${body.message}`, undefined);
        return;
      }
      callback(undefined, {
        name: body["name"],
        latitude: body["coord"]["lat"],
        longitude: body["coord"]["lon"],
      });
    },
  );
};

module.exports = {
  gecodedAddress: gecodedAddress,
};
