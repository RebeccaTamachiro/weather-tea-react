import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./ForecastCard.css";

export default function ForecastCard(props) {
  function hours() {
    let hours = new Date(props.data.dt * 1000).getHours();
    if (hours < 10) {
      return `0${hours}:00`;
    } else {
      return `${hours}:00`;
    }
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}º`;
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
