import "./WeatherCard.css"
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

  const tempC = (main.temp - 273.15).toFixed(1);
  const feelsLikeC = (main.feels_like - 273.15).toFixed(1);

  const icon = weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div class  = "card">
      <h2>{name}, {sys.country}</h2>

      <div class = "row">
        <img src={iconUrl} alt="weather icon" />
        <h1>{tempC}°C</h1>
      </div>

      <p class = "desc">{weather[0]?.description}</p>

      <div class = "details">
        <p><strong>Feels Like:</strong> {feelsLikeC}°C</p>
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Pressure:</strong> {main.pressure} hPa</p>
        <p><strong>Wind:</strong> {wind.speed} m/s</p>
        <p><strong>Visibility:</strong> {visibility / 1000} km</p>
      </div>
    </div>
  );
};



export default WeatherCard;