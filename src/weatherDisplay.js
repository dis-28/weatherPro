import React from 'react'
import './weatherDisplay.css'
const weatherDisplay = (props) => {



  const formatTimestampToTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString('en-US', { timeStyle: 'short' });
  };
  const sunrise = formatTimestampToTime(props.dataPoint.sunrise);
  const sunset = formatTimestampToTime(props.dataPoint.sunset);
  console.log(props.dataPoint)
  return (
    <div className='weatherDetailsMain' style={{ background: props.dataPoint.temp > 24 ? '#f8961e' : '#a2d2ff' }}>
      <div className='sunPos'>
        <div className='sunrise'></div>
        <div className='timing'>
          <div>{sunrise}</div>
          <div>{sunset}</div>
        </div>
        <div className='sunset'></div>
      </div>
      <div className='humCloud'>
        <div className='hum_image'></div>
        <div className='hum_text'>
          <div className='humidity'>
            <span>Humidity: </span>
            <span>{props.dataPoint.humidity}</span>
          </div>
          <div className='cloudPct'>
            <span>cloud pct: </span>
            <span>{props.dataPoint.cloud_pct}</span>
          </div>
        </div>
      </div>
      <div className='tempWind'>
        <div className='windGroup'>
          <div className='windImage'></div>
          <div className='windInfo'>
            <div className='windDirection'>
              <span>Wind Direction: </span>
              <span>{props.dataPoint.wind_degrees}</span>
            </div>
            <div className='windSpeed'>
              <span>Wind Speed: </span>
              <span>{props.dataPoint.wind_speed}</span>
              <span>m/s</span>
            </div>
          </div>
        </div>
        <div className='temp'>
          <span>{props.dataPoint.temp}</span>
          <span className='degree'></span>
        </div>
      </div>
    </div>
  )
}

export default weatherDisplay
