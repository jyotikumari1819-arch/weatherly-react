// Pretending this data came from a weather API.
export const cityWeatherData = {
    bhubaneswar: {
        city: "Bhubaneswar",
        country: "IN",
        temperature: 33,
        feelsLike: 35,
        humidity: 78,
        windSpeed: 14,
        pressure: 1012,
        visibility: 8,
        condition: "Cloudy",
        icon: "☁️",
        isDayTime: true,
    },
    delhi: {
        city: "Delhi",
        country: "IN",
        temperature: 36,
        feelsLike: 39,
        humidity: 55,
        windSpeed: 12,
        pressure: 1008,
        visibility: 6,
        condition: "Sunny",
        icon: "🌞",
    },

    mumbai: {
        city: "Mumbai",
        country: "IN",
        temperature: 30,
        feelsLike: 34,
        humidity: 68,
        windSpeed: 10,
        pressure: 1015,
        visibility: 9,
        condition: "Partly Cloudy",
        icon: "🌧️",
    },

    tokyo: {
        city: "Tokyo",
        country: "JP",
        temperature: 27,
        feelsLike: 29,
        humidity: 68,
        windSpeed: 10,
        pressure: 1015,
        visibility: 9,
        condition: "Partly Cloudy",
        icon: "⛅",
    },
};

export const currentWeather = cityWeatherData.bhubaneswar;

// pretending this came from an API

export const hourlyForecast = [
    {
        time: "9 AM",
        temperature: 29,
        icon: "🌞",
    },

    {
        time: "10 AM",
        temperature: 30,
        icon: "⛅",
    },
    {
        time: "11 AM",
        temperature: 31,
        icon: "☁️",
    },
    {
        time: "12 PM",
        temperature: 32,
        icon: "🌧️",

    },
    {
        time: "1 PM",
        temperature: 34,
        icon: "🌧️",

    },
    {
        time: "2 PM",
        temperature: 33,
        icon: "☁️",

    },
    {
        time: "3 PM",
        temperature: 32,
        icon: "⛅",

    },
    {
        time: "4 PM",
        temperature: 30,
        icon: "☁️",

    },
    {
        time: "5 PM",
        temperature: 31,
        icon: "☁️",

    },
    {
        time: "6 PM",
        temperature: 30,
        icon: "🌧️",

    },
    {
        time: "7 PM",
        temperature: 31,
        icon: "🌧️",

    },
    {
        time: "8 PM",
        temperature: 30,
        icon: "☁️",

    },
    {
        time: "9 PM",
        temperature: 32,
        icon: "☁️",
    },
    {
        time: "10 PM",
        temperature: 29,
        icon: "🌧️",
    }
];



export const weeklyForecast = [
    {
        day: "Monday",
        temperature: 30,
        icon: "🌞",
    },

    {
        day: "Tuesday",
        temperature: 33,
        icon: "🌧️",
    },
    {
        day: "Wednesday",
        temperature: 32,
        icon: "⛅",
    },
    {
        day: "Thursday",
        temperature: 30,
        icon: "☁️",
    },
    {
        day: "Friday",
        temperature: 32,
        icon: "🌧️",
    },
    {
        day: "Saturday",
        temperature: 34,
        icon: "🌞",
    },
    {
        day: "Sunday",
        temperature: 32,
        icon: "🌧️",
    },


];

export const airQuality = {
    aqi: 82,
    status: "Moderate",
};

