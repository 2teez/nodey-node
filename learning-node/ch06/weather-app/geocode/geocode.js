"use strict";

const request = require("request");

const gecodedAddress = (address) => {
  const API_KEY = "ab45724cc15822eeff6cc675a219acb4";
  let encodedAddress = encodeURIComponent(address);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedAddress}&appid=${API_KEY}&units=metric`;

  request(
    {
      url: url,
      json: true,
    },
    (error, response, body) => {
      if (error) {
        throw new Error(`HTTP Error: ${error}`);
      }
      // console.log(JSON.stringify(body, null, 2));
      const Lat = body["coord"]["lat"];
      const Lon = body["coord"]["lon"];
      const name = body["name"];
      console.log(`Name: ${name}`);
      console.log(`Latitude: ${Lat}\nLongitude: ${Lon}`);
    },
  );
};

module.exports = {
  gecodedAddress: gecodedAddress,
};
