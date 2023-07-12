import React, { useState } from 'react'
import axios from 'axios';
import './App.css';
import WeatherDisplay from './weatherDisplay';

const App = () => {

  const [enteredCity, setCity] = useState('Mumbai');
  const [weatherData, setWeatherData] = useState(undefined);


  const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: { city: enteredCity },
    headers: {
      'X-RapidAPI-Key': '3f679a80c0msh634dc2fc890ee24p1d9b32jsn852606cfead0',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data;
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  }


  const cityNameHandler = (event) => {
    event.preventDefault();
    const inputString = event.target[0].value;
    if (inputString.length === 0) return;
    setCity(inputString);
    fetchData();
  }


  return (
    <div className='mainContainer'>
      <div className='projectTitle'>UpStorm</div>
      <div className='projectBlock'>
        <div className='formContainer'>
          <form onSubmit={cityNameHandler}>
            <div className='inputGroup'>
              <label for='cityInput'>Location</label>
              <input className='enterCityInput' placeholder='Enter city' id='cityInput' ></input>
              <button className='submitButton'>Search</button>
            </div>
          </form>
        </div>
        <div className='weatherDisplayMain'>
          {weatherData && <WeatherDisplay dataPoint={weatherData} />}
          {!weatherData && <div className='emptyMessage'><p>Enter the name of city</p></div>}
        </div>
      </div>
    </div>
  )
}

export default App
