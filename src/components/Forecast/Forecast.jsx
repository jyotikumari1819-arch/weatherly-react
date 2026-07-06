import { weeklyForecast } from "../../data/dummyWeather"; // 1. Import the data
import "./Forecast.css";

const Forecast = () => {
  return (
    <div className="forecast">
      <h2>Weekly Forecast</h2>

      <div className="forecast-list">
      {/* 2. Map the data to UI */}
      {weeklyForecast.map((item, index) => (
        <div key={index}>
          <p>{item.day}</p>
          <p>{item.icon}</p>
          <p>{item.temperature}°C</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Forecast;