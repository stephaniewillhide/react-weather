import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit ] = useState('celsius');
  function convertToFahrenheit(event) {

  }
  if (unit === 'celsius') {
    return (
      <div className="WeatherTemperature d-inline">
        <h1 className="d-inline">{Math.round(props.celsius)}</h1>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature d-inline">
        {/* <span className="temperature">{Math.round(fahrenheit())}</span> */}
        <span className="unit">
          {/* <a href="/" onClick={showCelsius}>
            °C
          </a>{" "} */}
          | °F
        </span>
      </div>
    );
  }
}