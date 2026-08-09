import "./WeatherDetails.css";

const WeatherDetails = ({ weather }) => {
    return (
        <div className="weather-details">
            <h2>Weather Details</h2>

            <div className="details-grid">
                <div className="detail-card">
                    <p>Humidity</p>
                    <h3>{weather.humidity}%</h3>
                </div>

                <div className="detail-card">
                    <p>Wind Speed</p>
                    <h3>{weather.windSpeed} km/h</h3>
                </div>

                <div className="detail-card">
                    <p>Pressure</p>
                    <h3>{weather.pressure} hPa</h3>
                </div>

                <div className="detail-card">
                    <p>Visibility</p>
                    <h3>{weather.visibility} km</h3>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;