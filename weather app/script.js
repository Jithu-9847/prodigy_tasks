const apiKey = 'de09e4674a1144d890c75753241108';
const form = document.getElementById('city-form');
const temperatureElement = document.getElementById('temperature');
const conditionElement = document.getElementById('condition');
const weatherIconElement = document.getElementById('weather-icon');



function getWeather(city) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {

      const temperature = `${data.current.temp_c}°C`;
      const description = data.current.condition.text;
      const iconUrl = `http:${data.current.condition.icon}`;


      temperatureElement.textContent = temperature;
      conditionElement.textContent = description;
      weatherIconElement.src = iconUrl;
      weatherIconElement.style.display = 'block';
    })
    .catch(error => {

      console.error('There has been a problem with your fetch operation:', error);
      temperatureElement.textContent = '';
      conditionElement.textContent = 'Unable to fetch weather data. Please try again.';
      weatherIconElement.style.display = 'none';
    });
}
document.getElementById("fetch_btn").addEventListener("click", () => {

  const cityInput = document.getElementById('city-input').value;
  getWeather(cityInput)

})