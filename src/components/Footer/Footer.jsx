import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Chasing clouds, one city at a time. ☁️</p>

      <div className="footer-links">
        <a
          href="YOUR_GITHUB_LINK"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <span>•</span>

        <a
          href="YOUR_LINKEDIN_LINK"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <span>•</span>

        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noreferrer"
        >
          Weather data by OpenWeather
        </a>
      </div>

      <small>© 2026 Jyoti Kumari</small>
    </footer>
  );
}

export default Footer;