import React from "react";

export default function WeatherParameters(props) {
  return (
    <div className="WeatherParameters col-7">
      <p className="parameters mt-4 mb-0">
        Wind: <span> {Math.round(props.data.wind * 3.6)} </span>km/h
        <br />
        Humidity: <span>{props.data.humidity}</span>%
      </p>
    </div>
  );
}
