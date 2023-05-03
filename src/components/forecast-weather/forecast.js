import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      {data.list.slice(0, 4).map((item, idx) => (
        <div className="future-forecast">
          <div className="daily-item">
            <img
              alt="weather"
              className="icon-small"
              src={`icons/${item.weather[0].icon}.svg`}
            />
            <p className="min-max">
              {Math.round(item.main.temp_max)}°C /{" "}
              {Math.round(item.main.temp_min)}°C
            </p>
            <label className="day">{forecastDays[idx]}</label>
          </div>
          <hr className="rounded" id={idx}/>
        </div>
      ))}
    </>
  );
};

export default Forecast;
