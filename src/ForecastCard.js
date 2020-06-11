import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastCard.css";

export default function ForecastCard(props) {
  function hours() {
    let hours = new Date(props.data.dt * 1000).getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}ºC`;
  }

  return (
    <div className="ForecastCard col">
      <div className="cardHeader">{hours()}</div>
      <div className="iconWrapper">
        <WeatherIcon iconCode={props.data.weather[0].icon} />
      </div>
      <div className="cardFooter">{temperature()}</div>
    </div>
  );
}
