import "./WeatherEffect.css";

const WeatherEffect = ({ condition }) => {
    const weatherType = condition?.toLowerCase();

    console.log("Weather condition:", weatherType);

    if (weatherType?.includes("rain") || weatherType?.includes("drizzle")) {
        return (
            <div className="weather-effect rain-effect">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }

    if (weatherType?.includes("cloud")) {
        return (
            <div className="weather-effect cloud-effect">
                <div className="cloud cloud-one"></div>
                <div className="cloud cloud-two"></div>
                <div className="cloud cloud-three"></div>
            </div>
        );
    }

    if (weatherType?.includes("clear")) {
        return <div className="weather-effect sunny-effect"></div>;
    }

    if (weatherType?.includes("snow")) {
        return (
            <div className="weather-effect snow-effect">
                <span>❄</span>
                <span>❄</span>
                <span>❄</span>
                <span>❄</span>
                <span>❄</span>
                <span>❄</span>
                <span>❄</span>
                <span>❄</span>
            </div>
        );
    }

    if (weatherType?.includes("thunderstorm")) {
        return (
              <div className="weather-effect storm-effect">
             <div className="lightning"></div>
        </div>

        );
      
    }

    return null;
};

export default WeatherEffect;