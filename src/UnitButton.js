import React from "react";
import "./UnitButton.css";

export default function UnitButton() {
  return (
    <div className="UnitButton">
      <div className="btn-group btn-group-toggle mt-4" data-toggle="buttons">
        <label className="btn btn-secondary border-1 active-unit-wrapper">
          <input type="radio" name="options" checked />
          ºC
        </label>
        <label className="btn btn-secondary border-1 alternative-unit-wrapper">
          <input type="radio" name="options" />
          ºF
        </label>
      </div>
    </div>
  );
}
