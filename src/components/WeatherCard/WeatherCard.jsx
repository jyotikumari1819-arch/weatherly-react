import { currentWeather } from "../../data/dummyWeather";
import "./WeatherCard.css";

const WeatherCard = () => {
    return (
        <div className="weather-card">
            <h2>
                {currentWeather.city}, {currentWeather.country}
            </h2>

            <div className="weather-main">
                <p className="weather-icon">{currentWeather.icon}</p>
                <h1>{currentWeather.temperature} °C</h1>
            </div>

            <p>{currentWeather.condition}</p>
            <p>Feels like {currentWeather.feelsLike } °C</p>
        </div>
    );
};

export default WeatherCard;