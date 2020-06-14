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
    let temperature = props.data.main.temp;
    if (props.unit === "metric") {
      return `${Math.round(temperature)}ºC`;
    } else {
      return `${Math.round(temperature * 1.8 + 32)}ºF`;
    }
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
