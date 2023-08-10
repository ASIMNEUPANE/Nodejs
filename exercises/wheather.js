
const ax = require("axios");

async function logMovies() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto')
    const movies = await response.json();
    console.log(movies);
  }

