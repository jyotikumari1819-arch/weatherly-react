import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
// import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
//import Forecast from "../components/Forecast/Forecast";
//import AirQuality from "../components/AirQuality/AirQuality";
import Footer from "../components/Footer/Footer";
import {
  fetchWeatherByCity,
  fetchWeatherByCoords,
} from "../services/weatherApi";
import { currentWeather } from "../data/dummyWeather";
import WeatherEffect from "../components/WeatherEffect/WeatherEffect";
import WeatherAssistant from "../components/WeatherAssistant/WeatherAssistant";

const Home = () => {
  const [weather, setWeather] = useState({
    ...currentWeather,
    isDayTime: currentWeather.isDayTime ?? true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const realWeather = await fetchWeatherByCity(cityName);
      setWeather(realWeather);
    } catch (apiError) {
      console.error("Weather API error:", apiError);
      setError(apiError.message || "City not found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");


    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const locationWeather = await fetchWeatherByCoords(
            latitude,
            longitude
          );

          setWeather(locationWeather);

        } catch (locationError) {
          console.error("Location weather error:", locationError);
          setError(
            locationError.message || "Unable to fetch weather for your location."
          );
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied or unavailable");
        setLoading(false);
      }
    );
  };

  const themeClass = weather.isDayTime
    ? "day-theme"
    : "night-theme";

 return (
  <div className={`app-container ${themeClass}`}>
    <WeatherEffect condition={weather.condition} />

    <Navbar />

    <SearchBar
      onSearch={handleSearch}
      onUseLocation={handleUseLocation}
    />

    {loading && <p className="loading-text">Loading weather...</p>}

    {error && <p className="error-text">{error}</p>}

    <WeatherCard weather={weather} />
    <WeatherDetails weather={weather} />
    <WeatherAssistant weather={weather} />

    {/* <HourlyForecast /> */}
    {/* <Forecast /> */}
    {/* <AirQuality /> */}

    <Footer />
  </div>
);
};

export default Home;