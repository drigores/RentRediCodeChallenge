const axios = require('axios');
const API_KEY =  process.env.OPENWEATHERMAP_API_KEY || "7afa46f2e91768e7eeeb9001ce40de19"; 


  function transformTimezone(dt, timezone) {
    const date = new Date();
    date.setSeconds(date.getSeconds() + timezone);
    return date.toUTCString();
  }

async function fetchWeatherData(lat,lon) {
    try {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        console.log(`Fetching weather data from: ${API_URL}`);
        const response = await axios.get(API_URL);
        const data = response.data;
        data.date = transformTimezone(data.dt, data.timezone);
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        throw error;
    }
}
module.exports = { fetchWeatherData };