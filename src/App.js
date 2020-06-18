import React, { useState } from "react";
import Credit from "./Credit";
import Weather from "./Weather";
import WeatherSnack from "./WeatherSnack";

import "./App.css";

export default function App() {
  const [version, setVersion] = useState("tea");

  function switchToSnack(event) {
    event.preventDefault();
    setVersion("snack");
  }

  function switchToTea(event) {
    event.preventDefault();
    setVersion("tea");
  }

  function switchToBoth(event) {
    event.preventDefault();
    setVersion("both");
  }

  if (version === "tea") {
    return (
      <div className="App">
        <div className="container-sm">
          <div className="teaApp">
            <div className="row">
              <div className="teaAppTitle col-8">
                <h1>Weather Tea</h1>
              </div>
              <div className="switchApp col-4">
                <button
                  className="snackButton btn btn-primary"
                  onClick={switchToSnack}
                >
                  Hungry?
                </button>
              </div>
            </div>
            <Weather defaultCity="q=São Paulo" defaultUnit="metric" />
          </div>
          <div className="row">
            <Credit />
          </div>
        </div>
      </div>
    );
  }
  if (version === "snack") {
    return (
      <div className="App">
        <div className="container-sm">
          <div className="snackApp">
            <div className="row">
              <div className="snackAppTitle col-8">
                <h1>Weather Snack</h1>
              </div>
              <div className="switchApp col-4">
                <button
                  className="teaButton btn btn-info"
                  onClick={switchToTea}
                >
                  Thirsty?
                </button>
                <a href="/" className="bothLink" onClick={switchToBoth}>
                  Actually, both
                </a>
              </div>
            </div>
            <WeatherSnack defaultCity="q=São Paulo" defaultUnit="metric" />
          </div>
          <div className="row">
            <Credit />
          </div>
        </div>
      </div>
    );
  }
  if (version === "both") {
    return (
      <div className="App">
        <div className="container-sm">
          <div className="row">
            <div className="teaApp col">
              <div className="row">
                <div className="teaAppTitle col-8">
                  <h1>Weather Tea</h1>
                </div>
                <div className="switchApp col-4 text-right">
                  <button
                    className="closeButton btn btn-danger"
                    onClick={switchToSnack}
                  >
                    X
                  </button>
                </div>
              </div>
              <Weather defaultCity="q=São Paulo" defaultUnit="metric" />
            </div>
            <div className="snackApp col">
              <div className="row">
                <div className="snackAppTitle col-8">
                  <h1>Weather Snack</h1>
                </div>
                <div className="switchApp col-4 text-right">
                  <button
                    className="closeButton btn btn-danger"
                    onClick={switchToTea}
                  >
                    X
                  </button>
                </div>
              </div>
              <WeatherSnack defaultCity="q=São Paulo" defaultUnit="metric" />
            </div>
          </div>
          <div className="row">
            <Credit />
          </div>
        </div>
      </div>
    );
  }
}
