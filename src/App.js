import React from "react";
import Credit from "./Credit";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col appTitle">
            <h1>Weather Tea</h1>
          </div>
        </div>
        <Weather defaultCity="São Paulo" defaultUnit="metric" />
        <div className="row">
          <Credit />
        </div>
      </div>
    </div>
  );
}
