const WeatherCard = ({ data }) => {
  if (!data) return <p>No data available</p>;

  const {
    name,
    sys,
    weather,
    main,
    wind,
    visibility,
  } = data;

  // Convert Kelvin → Celsius
  const tempC = (main.temp - 273.15).toFixed(1);
  const feelsLikeC = (main.feels_like - 273.15).toFixed(1);

  // Weather icon URL (OpenWeather)
  const icon = weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div style={styles.card}>
      <h2>{name}, {sys.country}</h2>

      <div style={styles.row}>
        <img src={iconUrl} alt="weather icon" />
        <h1>{tempC}°C</h1>
      </div>

      <p style={styles.desc}>{weather[0]?.description}</p>

      <div style={styles.details}>
        <p><strong>Feels Like:</strong> {feelsLikeC}°C</p>
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Pressure:</strong> {main.pressure} hPa</p>
        <p><strong>Wind:</strong> {wind.speed} m/s</p>
        <p><strong>Visibility:</strong> {visibility / 1000} km</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "350px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "12px",
    background: "#4b5c77",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  desc: {
    textTransform: "capitalize",
    marginBottom: "10px",
  },
  details: {
    textAlign: "left",
    fontSize: "14px",
  },
};

export default WeatherCard;