const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  const weatherPromise = fetch(fullURL);
  return weatherPromise.then((response) => response.json());
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  try {
    const data = await getWeatherData(city)
    showWeatherData(data)
  } catch(err) {
    console.log(err)
    console.log("Something get wrong !")
  }
  
};

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
