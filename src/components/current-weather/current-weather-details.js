import "./current-weather-details.css";

const CurrentWeatherDetails = ({ data }) => {
  return (
    <div className="details">
      <div className="parameter-row">
        <span className="parameter-label top">Details</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Feels like</span>
        <span className="parameter-value">
          {Math.round(data.main.feels_like)}°C
        </span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Wind</span>
        <span className="parameter-value">{data.wind.speed} m/s</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Humidity</span>
        <span className="parameter-value">{data.main.humidity}%</span>
      </div>
      <div className="parameter-row bottom">
        <span className="parameter-label">Pressure</span>
        <span className="parameter-value">{data.main.pressure} hPa</span>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
