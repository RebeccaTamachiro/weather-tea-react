import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let unit = props.unit;

  if (unit === "metric") {
    return (
      <div className="CurrentWeather">
        <div className="mainInfo row">
          <div className="mainText col mb-2">
            <p className="temperature mt-4 mb-0">
              {Math.round(props.data.temperature)}ºC
            </p>
          </div>

          <div className="mainIconWrapper col">
            <WeatherIcon iconCode={props.data.icon} />
          </div>
        </div>
        <h3 className="weatherDescription mt-2">{props.data.description}</h3>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <div className="mainInfo row">
          <div className="main-text col mb-2">
            <p className="temperature mt-4 mb-0">
              {Math.round(props.data.temperature * 1.8 + 32)}ºF
            </p>
          </div>

          <div className="mainIconWrapper col">
            <WeatherIcon iconCode={props.data.icon} />
          </div>
        </div>
        <h3 className="weatherDescription mt-2">{props.data.description}</h3>
      </div>
    );
  }
}
