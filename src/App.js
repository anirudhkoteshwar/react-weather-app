import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import CurrentWeatherDetails from "./components/current-weather/current-weather-details";
import Forecast from "./components/forecast-weather/forecast";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
} from "./components/apis/openweather";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error(err));
  };

  console.log(currentWeather);
  console.log(forecast);
  //const elem = document.querySelector(".body");
  //elem.style.backgroundImage = `url(../public/backgrounds/${currentWeather.weather[0].icon}.jpg)`;
  //      style={{
  //  background: `url(./backgrounds/${currentWeather.weather[0].icon}.jpg) no-repeat center center/cover` ,
  //  backgroundRepeat: "no-repeat",
  //  width: '100%',

  //  position: "absolute",
  //}}

  const backimg = currentWeather
    ? `${currentWeather.weather[0].icon}.jpg`
    : "unknown.jpg";
  console.log(backimg);

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(/backgrounds/${backimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "center",
        zIndex: "9999 !important",
      }}
    >
      <div className="weather-display">
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
      <div className="sidebar">
        <div className="searchbar">
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        {currentWeather && (
          <hr className="rounded" id="search-detail-divider" />
        )}
        {currentWeather && <CurrentWeatherDetails data={currentWeather} />}
        {forecast && <hr className="rounded" id="detail-forecast-divider" />}
        <div className="forecast-weather">
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
