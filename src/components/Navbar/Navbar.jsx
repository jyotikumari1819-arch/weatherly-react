import "./Navbar.css";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-icon">🌥️</span>
                <h1>Weathering</h1>
            </div>

            <button className="theme-btn">
                🌙
            </button>
        </nav>
    );
}

export default Navbar;