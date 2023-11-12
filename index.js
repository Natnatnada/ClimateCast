function updateWeather(response){
console.log(response.data)
let temperatureElement= document.getElementById("temperature");
let temperature = response.data.temperature.current;
let cityElement= document.getElementById("city")
cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML = Math.round(temperature);
}
 
function searchCity(city){
let apiKey= "00291061a7t55b134fa2o7e85554a1fb"
let apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
// console.log(apiUrl)

axios.get(apiUrl).then(updateWeather);
}

function updateCity(){
    event.preventDefault();
    let searchInput= document.getElementById("inputSearch")
    let cityName= document.getElementById("city")
    cityName.innerHTML= searchInput.value  
    searchCity(searchInput.value)
}


let searchForm= document.getElementById("searchForm")
searchForm.addEventListener("submit",updateCity)
searchCity("Valparaiso")