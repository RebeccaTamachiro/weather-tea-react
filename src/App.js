import React from "react";
import Credit from "./Credit";
import Weather from "./Weather";
import WeatherSnack from "./WeatherSnack";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="teaApp">
              <div className="teaAppTitle">
                <h1>Weather Tea</h1>
              </div>
              <Weather defaultCity="q=São Paulo" defaultUnit="metric" />
            </div>
          </div>

          <div className="col">
            <div className="snackApp">
              <div className="snackAppTitle">
                <h1>Weather Snack</h1>
              </div>
              <WeatherSnack defaultCity="q=São Paulo" defaultUnit="metric" />
            </div>
          </div>
        </div>
        <div className="row">
          <Credit />
        </div>
      </div>
    </div>
  );
}
