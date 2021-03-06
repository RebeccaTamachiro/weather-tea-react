import React, { useState } from "react";
import axios from "axios";

import CurrentTemperature from "./CurrentTemperature";
import WeatherParameters from "./WeatherParameters";
import SnackTipCard from "./SnackTipCard";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";

import "./WeatherSnack.css";

export default function WeatherSnack(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [unit, setUnit] = useState(props.defaultUnit);
  const [celsiusStyle, setCelsiusStyle] = useState(
    "btn btn-secondary border-1 activeUnitWrapper"
  );
  const [fahrenheitStyle, setFahrenheitStyle] = useState(
    "btn btn-secondary border-1 alternativeUnitWrapper"
  );

  let inputCity = null;

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      newCity: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search(city) {
    const apiKey = "461572920dce0becb1819d70275340e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(`q=${inputCity}`);
  }

  function updateCity(event) {
    inputCity = event.target.value;
  }

  function chooseCelsius(event) {
    event.preventDefault();
    setUnit("metric");
    setCelsiusStyle("btn btn-secondary border-1 activeUnitWrapper");
    setFahrenheitStyle("btn btn-secondary border-1 alternativeUnitWrapper");
  }

  function chooseFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    setCelsiusStyle("btn btn-secondary border-1 alternativeUnitWrapper");
    setFahrenheitStyle("btn btn-secondary border-1 activeUnitWrapper");
  }

  function handleGeolocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiVariable = `lat=${latitude}&lon=${longitude}`;
    search(apiVariable);
  }

  function chooseCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleGeolocation);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSnack">
        <div className="row mainCardWrapper mt-4">
          <div className="mainCard mt-0 mb-1 p-3">
            <h2 className="mb-0">
              Now in
              <span className="location"> {weatherData.newCity}</span>:
            </h2>
            <div className="row">
              <div className="mainInfo col">
                <CurrentTemperature data={weatherData} unit={unit} />
                <div className="row">
                  <WeatherParameters data={weatherData} />
                  <div className="col-5">
                    <div
                      className="btn-group btn-group-toggle mt-4"
                      data-toggle="buttons"
                    >
                      <label className={celsiusStyle} onClick={chooseCelsius}>
                        ºC
                      </label>
                      <label
                        className={fahrenheitStyle}
                        onClick={chooseFahrenheit}
                      >
                        ºF
                      </label>
                    </div>
                  </div>
                </div>
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="interactive col mt-4 mr-2">
                <SnackTipCard temperature={weatherData.temperature} />

                <p className="mb-2">
                  ...find a different city{" "}
                  <span role="img" aria-label="smile">
                    🙂
                  </span>
                </p>
                <form className="mb-2" onSubmit={handleSubmit}>
                  <div className="input-group my-0">
                    <input
                      type="search"
                      autoComplete="off"
                      className="form-control bg-light citySearch"
                      onChange={updateCity}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-warning btn-outline-dark button-addon2"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <a
                    href="/"
                    className="mb-3 mt-1 secondaryInfo"
                    onClick={chooseCurrentLocation}
                  >
                    (my current location)
                  </a>
                </form>
              </div>
            </div>
            <h2 className="forecastHeader mt-2">
              What to expect for the next hours:
            </h2>

            <Forecast city={weatherData.newCity} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    search(props.defaultCity);
    return (
      <div className="Weather">
        <div className="row mainCardWrapper mt-4">
          <div className="loadingCard mb-1" />
        </div>
      </div>
    );
  }
}
