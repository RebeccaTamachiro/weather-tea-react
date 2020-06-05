import React from "react";
import CurrentWeather from "./CurrentWeather";
import TipCard from "./TipCard";
import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col app-title">
          <h1>Weather Tea</h1>
        </div>
      </div>
      <div className="row main-card-wrapper mt-4">
        <div className="main-card mt-0 mb-1 p-3">
          <h2 className="mb-0">
            Now in
            <span className="location"> Lisbon</span>:
          </h2>
          <div className="row">
            <div className="main-info col">
              <CurrentWeather />
              <p class="my-0 secondary-info">
                Last updated:
                <span> May 22 </span>,<span>22:05</span>
              </p>
            </div>
            <div className="interactive col mt-4 mr-2">
              <TipCard />
              <SearchEngine />
            </div>
          </div>
          <h2 className="forecast-header mt-2">
            What to expect for the next hours:
          </h2>
          <div className="card-group row bg-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
