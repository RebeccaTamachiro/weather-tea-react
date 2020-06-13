import React from "react";

export default function WeatherParameters(props) {
  if (props.unit === "metric") {
    return (
      <div className="WeatherParameters col-7">
        <p className="parameters mt-4 mb-0">
          Wind: <span> {Math.round(props.data.wind * 3.6)} </span>km/h
          <br />
          Humidity: <span>{props.data.humidity}</span>%
        </p>
      </div>
    );
  } else {
    return (
      <div className="WeatherParameters col-7">
        <p className="parameters mt-4 mb-0">
          Wind: <span> {Math.round(props.data.wind)} </span>mph
          <br />
          Humidity: <span>{props.data.humidity}</span>%
        </p>
      </div>
    );
  }
}
