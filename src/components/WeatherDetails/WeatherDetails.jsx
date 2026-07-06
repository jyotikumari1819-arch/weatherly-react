import { currentWeather } from "../../data/dummyWeather";
import "./WeatherDetails.css";

const WeatherDetails = () => {
    return (
        <div className="weather-details">
            <h2>Weather Details</h2>

            <div className = "details-grid">
                <div className="detail-card">
                    <p>Humidity</p>
                    <h3>{currentWeather.humidity} %</h3>
                </div>

                <div className="detail-card">
                    <p>Wind Speed</p>
                    <h3>{currentWeather.windSpeed} km/h</h3>
                </div>
                <div className="detail-card">
                    <p>Pressure</p>
                    <h3>{currentWeather.pressure}</h3>
                </div>
                <div className="detail-card">
                    <p>Visibility</p>
                    <h3>{currentWeather.visibility}</h3>
                </div>
            </div>
        </div>
    );
};
export default WeatherDetails;