import Navbar from '../components/Navbar/Navbar';
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import WeatherDetails from "../components/WeatherDetails/WeatherDetails";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import Forecast from "../components/Forecast/Forecast";
import AirQuality from "../components/AirQuality/AirQuality";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div className ="app-container">
           <Navbar />
           <SearchBar />
           <WeatherCard />
           <WeatherDetails />
           <HourlyForecast />
           <Forecast />
           <AirQuality />
           <Footer />
        </div>
    );
};
export default Home;

