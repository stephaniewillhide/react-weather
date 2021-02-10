import React from "react";

export default function WeatherForecastPreview(props) {
  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);

    return `${temperature}°C`;
  }

  return (
    <div className="WeatherForecastPreview col-6 col-md-2 text-center">
      {hours()}
      <img src={icon} alt={props.data.main.description}/>
      {temperature()}
    </div>
  );
}