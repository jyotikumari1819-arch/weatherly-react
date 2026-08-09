import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch, onUseLocation }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "") {
      return;
    }

    onSearch(city);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <p className="search-tip">
        Tip: Search by city name, e.g. Tokyo, Delhi, Warsaw
      </p>

      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Search</button>

        <button type="button" className="location-btn" onClick={onUseLocation}>
          Use My Location
        </button>
      </div>
    </form>
  );
};

export default SearchBar;