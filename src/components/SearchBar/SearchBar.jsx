import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className ="search-bar">
            <input type ="text" placeholder="Search your city..." />
            <button>Search</button>
        </div>
    );
};

export default SearchBar;