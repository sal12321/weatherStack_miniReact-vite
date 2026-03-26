# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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

git clone weatherStack_miniReact-vite  
cd weather-app  

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
