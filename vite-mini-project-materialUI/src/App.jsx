import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

import TextField from '@mui/material/TextField';
import WeatherCard from "./WeatherCard";
import CityError from "./CityError";



function App() {

  let [city, setCity] = useState("");
  let [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  

  let getWeatherData = async (city) =>{
  const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  let result = await fetch(API_URL);
  result = await result.json();

  if(result.cod == 200){

  
    setWeatherData(result);
    setError(null); // no error found on response
    // console.log(result);

  }else{

    // let message  = `this fucking ${city} is not found`;
  
  setWeatherData(null);
    setError(result);

  
  // console.log("!=200");


  // console.log(result);
  }

  
  }


  let handleInput = (event) =>{
  // console.log(event.target.value);
  setCity(event.target.value);
  }

  let handleSubmit = (event) =>{

    // console.log("submit button");
    event.preventDefault();
    getWeatherData(city);
    setCity("");

  }


  return (
    <>
<h1>Find Your City’s Weather</h1>

<hr />



<form action="" onSubmit = {handleSubmit}>

  <TextField id="standard-basic"
   label="Jharkhand"
   variant="standard"
   required
   value = {city}
   onChange={handleInput} />

 
<Button variant="contained" type  = "submit" >Search</Button>


</form>

<hr />


  {weatherData&& (
        <div className="weatherBox">
          <WeatherCard data={weatherData} />
        </div>
      )}

  {error&& (
        <div className="ErrorBox" >
          <CityError result  = {error}/>
        </div>
      )}


    </>
  )
}

export default App




