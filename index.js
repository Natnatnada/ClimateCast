function updateWeather(response) {
  let temperatureElement = document.getElementById("temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.getElementById("city");
  let descriptionElement = document.getElementById("description");
  let humidityElement = document.getElementById("humidity");
  let windSpeedElement = document.getElementById("wind-speed");
  let timeElement = document.getElementById("date");
  let date = new Date(response.data.time * 1000);
  let climateElement = document.getElementById("icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  climateElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}
//format the date to page
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${day} ${hours}:${minutes}`;
  }
function searchCity(city) {
  let apiKey = "00291061a7t55b134fa2o7e85554a1fb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  // console.log(apiUrl)

  axios.get(apiUrl).then(updateWeather);
}

function updateCity() {
  event.preventDefault();
  let searchInput = document.getElementById("inputSearch");
  let cityName = document.getElementById("city");
  cityName.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", updateCity);
searchCity("Valparaiso");

function displayForecast(){
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml +=
      `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature">9º</div>
        </div>
      </div>
    `;
  });
  let forecast = document.getElementById("forecast")
  forecast.innerHTML = forecastHtml;
}
searchCity("Banff");
displayForecast();