
// here we are creating an array of objects
export const currentWeather = {
    city: "Bhubaneswar",
    country:"IN",
    temperature: 33,
    feelsLike:35,
    humidity:78,
    windSpeed:14,
    pressure:1012,
    visibility: 8,
    condition: "cloudy",
    icon: "☁️",
};

// pretending this came from an API

export const hourlyForecast = [
    {
        time:"9AM",
        temp: 29,
        icon:"🌞",
    },

    {
        time:"10 AM",
        temp: 30,
        icon:"⛅",
    },
    {
        time:"11 AM",
        temp: 31,
        icon:"☁️",
    },
];

export const weeklyForecast = [
    {
        day:"Monday",
        temp: 30,
        icon: "🌞",
    },

    {
        day:"Tuesday",
        temp: 31,
        icon:"🌧️",     
    },

];    

export const airQuality  = {
    aqi = 82,
    status: "Moderate",
};
   
    