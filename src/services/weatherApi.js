const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const getIsDayTime = (currentTime, sunrise, sunset) => {
  return currentTime >= sunrise && currentTime < sunset;
};

const formatWeatherData = (data) => ({
  city: data.name,
  country: data.sys.country,
  temperature: Math.round(data.main.temp),
  feelsLike: Math.round(data.main.feels_like),
  humidity: data.main.humidity,
  windSpeed: data.wind.speed,
  pressure: data.main.pressure,
  visibility: data.visibility / 1000,
  condition: data.weather[0].main,
  iconCode: data.weather[0].icon,
  timezone: data.timezone,

  isDayTime: getIsDayTime(
    data.dt,
    data.sys.sunrise,
    data.sys.sunset
  ),
});

export const fetchWeatherByCity = async (cityName) => {
  const response = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "City not found");
  }

  return formatWeatherData(data);
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const response = await fetch(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Location weather not found");
  }

  return formatWeatherData(data);
};