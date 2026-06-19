"use strict";

const request = require("request");

const getWeather = (lat, lon, callback) => {
  const API_KEY = "ab45724cc15822eeff6cc675a219acb4";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  request(
    {
      url: url,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        return callback(`HTTP: ${error}`, undefined);
      }
      if (response.statusCode !== 200) {
        return callback(`API Error: ${response.statusCode}`, undefined);
      }

      if (!body || !body.coord) {
        return callback("Invalid API response", undefined);
      }

      return callback(undefined, {
        temperature: body.main.temp,
        apparentTemperature: body.main.feels_like,
      });
    },
  );
};

module.exports.getWeather = getWeather;
