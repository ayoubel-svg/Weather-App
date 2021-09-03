const cityJs = document.querySelector(".cityJs");
const tempJs = document.querySelector(".temp");
const iconJs = document.querySelector(".iconJs");
const descriptionJs = document.querySelector(".description");
const humidityJs = document.querySelector(".humidityJs");
const windSpeed = document.querySelector(".windSpeedJs");
const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".fa-search");
const container = document.querySelector(".container");
const myCity = document.querySelector(".city");
const myHumidity = document.querySelector(".humidity");
const myWindSpeed = document.querySelector(".windSpeed");
let weather = {
  apiKey: "19f9e90bdf5ad82377b35d5eb62bafac",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    cityJs.innerHTML = name;
    tempJs.innerHTML = temp + "°C";
    iconJs.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    descriptionJs.innerHTML = description;
    humidityJs.innerHTML = humidity;
    windSpeed.innerHTML = speed;
  },
  search: function () {
    weather.fetchWeather(searchBar.value);
  },
};

searchBtn.addEventListener("click", () => {
  weather.search();
  container.style.height = "300px";
  myCity.style.display = "flex";
  tempJs.style.display = "flex";
  myHumidity.style.display = "flex";
  myWindSpeed.style.display = "flex";
  iconJs.style.display = "flex";
  descriptionJs.style.display = "flex";
  searchBar.value = "";
});
searchBar.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
    container.style.height = "300px";
    myCity.style.display = "flex";
    tempJs.style.display = "flex";
    myHumidity.style.display = "flex";
    myWindSpeed.style.display = "flex";
    iconJs.style.display = "flex";
    descriptionJs.style.display = "flex";
    searchBar.value = "";
  }
});
