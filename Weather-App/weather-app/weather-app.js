import { WeatherAPI } from "./weather-api.js"
class WeatherAppIntegration {

  init() {

    const searchBoxElement = document.querySelector(".search-box")

    searchBoxElement.addEventListener("keypress", this.handleUserEvent);
  }

  async handleUserEvent(event) {

    if (event.key == "Enter") {

      const userSuppliedLocation = event.target.value;
      console.log("Enter Key pressed -> " + userSuppliedLocation)

      const weatherAPIObj = new WeatherAPI();
      weatherAPIObj.constructURL(userSuppliedLocation);
      const weatherJSON = await weatherAPIObj.invokeWeatherURL();
      const locationElement = document.querySelector(".location .city");
      console.log(`Location -> ${weatherJSON.name} / ${weatherJSON.sys.country}`)
      locationElement.innerText = `${weatherJSON.name} / ${weatherJSON.sys.country}`;

      const dateElement = document.querySelector(".location .date");
      dateElement.innerText = `${WeatherAppIntegration.formatDate()}`;

      const temperatureElement = document.querySelector(".current .temp");
      console.log(`Temperature -> ${weatherJSON.main.temp}`);
      temperatureElement.innerText = `${weatherJSON.main.temp} °C`

      const weatherTypeElement = document.querySelector(".current .weather");
      console.log(`Type -> ${weatherJSON.weather[0].main}`);
      weatherTypeElement.innerText = `${weatherJSON.weather[0].main} `;

      const minMaxElement = document.querySelector(".current .hi-low");
      console.log(`Min / Max -> ${weatherJSON.main.temp_min} / ${weatherJSON.main.temp_max}`)
      minMaxElement.innerText = `${weatherJSON.main.temp_min} °C / ${weatherJSON.main.temp_max} °C`;

    } else {
      console.log("Key Press -> " + event.key);

    }
  }

  static formatDate() {

    const currentDate = new Date();

    return currentDate.toLocaleDateString("en-US", {
      "year": "numeric",
      "month": "long",
      "weekday": "long",
      "day": "numeric"
    })

  }

}

export { WeatherAppIntegration }

