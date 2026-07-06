import { hourlyForecast } from "../../data/dummyWeather";
import "./HourlyForecast.css";

const HourlyForecast = () => {
    return (
        <div className="hourly-forecast">
            <h2>Hourly Forecast</h2>

            <div className="hourly-list">
            {hourlyForecast.map((item, index) => (
                <div className="hourly-card" key={index}>
                    <p>{item.time}</p>
                    <p>{item.icon}</p>
                    <p>{item.temperature} °C</p>
                </div>
             ))}
        </div>
         </div>
    );
};

export default HourlyForecast;