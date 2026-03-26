# 🌦️ Weather App

A simple, clean React-based weather application that fetches real-time weather data using the OpenWeather API.

---

## 🚀 Features

- Search weather by city name  
- Real-time temperature and conditions  
- Displays:
  - Temperature (°C)
  - Feels like
  - Humidity
  - Pressure
  - Wind speed
  - Visibility  
- Dynamic weather icons  
- Clean and minimal UI  

---

## 🛠️ Tech Stack

- React (Functional Components + Hooks)  
- Material UI  
- OpenWeather API  

---

## ⚙️ Setup & Installation

1. Clone the repository

git clone https://github.com/sal12321/weatherStack_miniReact-vite.git
cd vite-mini-project-materialUI

2. Install dependencies

npm install  

3. Add your API key  

Replace `YOUR_API_KEY` in App.jsx:

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${reqCity}&appid=YOUR_API_KEY`;

4. Run the app

npm start  

---

## 📁 Project Structure

src/  
│── App.jsx  
│── WeatherCard.jsx  
│── App.css  

---

## ⚠️ Notes

- API returns temperature in Kelvin → converted to Celsius in UI  
- Handles invalid city input  
- No backend required (client-side only)

---

## 📌 Future Improvements

- Add loading spinner  
- Error UI (instead of alerts)  
- Unit toggle (°C / °F)  
- Save recent searches  
- Background based on weather  

---

## 📄 License

This project is for learning and personal use.
