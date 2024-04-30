const API_KEY = "ca78e580526bd972670c0579259554ae";
const UNITS_METRIC = "metric";

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {

  constructURL(locationName) {

    this.weatherURL = new URL(WEATHER_API_BASE_URL);

    this.weatherURL.searchParams.append("q", locationName);
    this.weatherURL.searchParams.append("appid", API_KEY);
    this.weatherURL.searchParams.append("units", UNITS_METRIC);

    return this.weatherURL.toString();
  }

  async invokeWeatherURL() {

    const responseObj = await fetch(this.weatherURL.toString())

    const weatherResponseJSON = await responseObj.json();

    return weatherResponseJSON;

  }

}

export { WeatherAPI }