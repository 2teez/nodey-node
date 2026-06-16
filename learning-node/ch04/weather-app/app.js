"use strict";

const API_KEY = "ab45724cc15822eeff6cc675a219acb4";

const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;

const fetchWeather = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
  }
};

fetchWeather();
