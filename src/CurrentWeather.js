import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div className="main-info row">
        <div className="main-text col mb-2">
          <p className="temperature mt-4 mb-0">
            {Math.round(props.data.temperature)}ºC
          </p>
        </div>

        <div className="main-icon-wrapper col pt-3">
          <WeatherIcon iconCode={props.data.icon} />
        </div>
      </div>
      <h3 className="weather-description mt-2">{props.data.description}</h3>
      <div className="row">
        <div className="col-7">
          <p className="parameters mt-4 mb-0">
            Wind: <span> {props.data.wind} </span>km/h
            <br />
            Humidity: <span>{props.data.humidity}</span>%
          </p>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
}
