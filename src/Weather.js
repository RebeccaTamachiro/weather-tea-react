import React, { useState } from "react";
import axios from "axios";

import CurrentWeather from "./CurrentWeather";
import TipCard from "./TipCard";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
  }

  function search() {
    const apiKey = "461572920dce0becb1819d70275340e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="row main-card-wrapper mt-4">
          <div className="main-card mt-0 mb-1 p-3">
            <h2 className="mb-0">
              Now in
              <span className="location"> Lisbon</span>:
            </h2>
            <div className="row">
              <div className="main-info col">
                <CurrentWeather />
                <p className="my-0 secondary-info">
                  Last updated:
                  <span> May 22</span>, <span>22:05</span>
                </p>
              </div>
              <div className="interactive col mt-4 mr-2">
                <TipCard />
                <p className="mb-2">...find a different city 🙂</p>
                <form className="mb-2">
                  <div className="input-group my-0">
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control bg-light city-search"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-danger button-addon2"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <a href="/" className="mb-3 mt-1 secondary-info">
                    (my current location)
                  </a>
                </form>
              </div>
            </div>
            <h2 className="forecast-header mt-2">
              What to expect for the next hours:
            </h2>
            <div className="card-group row bg-transparent">
              <Forecast />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <p>Loading...</p>;
  }
}
