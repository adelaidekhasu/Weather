function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
function searchCity(city) {
  let apiKey = "8oaaaefd0359f2cf8tfe5b5d83828854";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input").value;
  searchCity(searchInput);
}

let searchformelement = document.querySelector("#search-form");
searchformelement.addEventListener("submit", handleSearchSubmit);
searchCity("Pretoria");