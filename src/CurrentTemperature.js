import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  let unit = props.unit;
  let temperature = props.data.temperature;

  function setTemperatureValue() {
    if (unit === "metric") {
      return `${Math.round(temperature)}ºC`;
    } else {
      return `${Math.round(props.data.temperature * 1.8 + 32)} ºF`;
    }
  }

  return (
    <div className="CurrentTemperature">
      <div className="mainInfo row">
        <div className="mainText col-8 mb-2">
          <p className="temperature mt-4 mb-0">{setTemperatureValue()}</p>
        </div>

        <div className="mainIconWrapper col-4">
          <WeatherIcon iconCode={props.data.icon} />
        </div>
      </div>
      <h3 className="weatherDescription mt-2">{props.data.description}</h3>
    </div>
  );
}
