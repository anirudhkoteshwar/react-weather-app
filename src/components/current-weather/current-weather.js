import "./current-weather.css";

const CurrentWeather = ({ data }) => {
    
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        
      </div>
      <div className="bottom">
      <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
    </div>
  );
};

export default CurrentWeather;
