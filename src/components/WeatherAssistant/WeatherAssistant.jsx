import "./WeatherAssistant.css";

const WeatherAssistant = ({ weather }) => {
    const getWeatherTips = () => {
        const tips = [];
    const condition = weather.condition?.toLowerCase();
    
    

    if(condition?.includes("rain")) {
        tips.push({
            icon: "🌧️",
            title: "Rain Alert",
            message: "Carry an umbrella and avoid unnecessary outdoor travel.",

        });
    }
    if(condition?.includes("cloud")) {
        tips.push({
            icon:"☁️",
            title: "Cloud Weather",
            message: "Good weather for short outdoor plans, but keep an eye on rain.",
        });
    }
    if(condition?.includes("clear")) {
        tips.push({
            icon:"☀️",
            title:  "Clear Sky",
            message: "Great weather for outdoor plans. Stay hydrated if it feels hot.",

        });
    }
     if(condition?.includes("snow")) {
        tips.push({
            icon:"❄️",
            title: "Snow Alert",
            message: "Wear warm layers and be careful while travelling.",

        });
        }
        if(condition?.includes("thunderstorm")) {
        tips.push({
            icon:"⛈️",
            title: "Thunderstorm Alert",
            message: "Stay indoors and avoid open areas if possible.",
      });
   }
       if(weather.temperature >= 35) {
        tips.push ({
            icon: "🔥",
            title:"High Temperature",
            message:"Avoid going out during peak afternoon hours and drink enough water.",
        });
       }
        if(weather.temperature <=10) {
        tips.push ({
            icon: "🧥",
            title:"Cold Weather",
            message: "Wear warm clothes and avoid staying outside for too long.",
        });
       }
       if(weather.humidity >= 75) {
        tips.push({
            icon: "💧",
            title: "High Humidity",
            message: "It may feel warmer than the actual temperature. Stay hydrated.",
        });
       }

       if(weather.windSpeed >= 8) {
        tips.push ({
            icon: "💨",
            title: "Strong Wind",
            message: "Be careful outdoors and avoid carrying loose lightweight items.",
        });
       }
       if(weather.visibility <= 3){
        tips.push({
            icon:"👀",
            title: "Low Visibility",
            message: "Travel carefully, especially while driving at night ",
          });
       }
       if(tips.length === 0) {
        tips.push ({
            icon: "🌿",
            title:"Comfortable Weather",
            message: "Weather looks manageable. Have a good day!",

        });
       }
 return tips;
  };

  const tips = getWeatherTips();

  return (
    <section className="weather-assistant section">
      <h2>Smart Weather Assistant</h2>
      <p className="assistant-subtitle">
        Personalized tips based on current weather conditions
      </p>

      <div className="assistant-tips">
        {tips.map((tip, index) => (
          <div className="assistant-card" key={index}>
            <span className="assistant-icon">{tip.icon}</span>

            <div>
              <h3>{tip.title}</h3>
              <p>{tip.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherAssistant;