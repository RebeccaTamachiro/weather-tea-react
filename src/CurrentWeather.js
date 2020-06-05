import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let WeatherData = {
    temperature: 20,
    description: "Overcast clouds",
    wind: 13,
    humidity: 21,
  };
  return (
    <div className="CurrentWeather">
      <div className="main-info row">
        <div className="main-text col mb-2">
          <p className="temperature mt-4 mb-0">{WeatherData.temperature}ºC</p>
        </div>

        <div className="main-icon-wrapper col pt-3">
          <i className="fas fa-cloud mt-4" />
        </div>
      </div>
      <h3 className="weather-description mt-2">{WeatherData.description}</h3>
      <div className="row">
        <div className="col-7">
          <p className="parameters mt-4 mb-0">
            Wind: <span> {WeatherData.wind} </span>km/h
            <br />
            Humidity: <span>{WeatherData.humidity}</span>%
          </p>
        </div>
        <div className="col-5">Button</div>
      </div>
    </div>
  );
}
