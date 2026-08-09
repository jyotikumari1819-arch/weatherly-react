import "./WeatherCard.css";

const WeatherCard = ({weather}) => {
    return (
        <div className="weather-card">
            <h2>
                {weather.city}, {weather.country}
            </h2>

            <div className="weather-main">
                <p className="weather-icon">{weather.icon}</p>
                <h1>{weather.temperature} °C</h1>
            </div>

            <p>{weather.condition}</p>
            <p>Feels like {weather.feelsLike } °C</p>
        </div>
    );
};

export default WeatherCard;