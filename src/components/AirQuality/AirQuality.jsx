import { airQuality } from "../../data/dummyWeather";
import "../AirQuality/AirQuality.css";

const AirQuality = () => {
    return (
        <div className="air-quality">
            <h2>Air Quality Index</h2>
            <p>AQI: {airQuality.aqi}</p>
            <p>Status:{airQuality.status}</p>
        </div>
    );
};

export default AirQuality;