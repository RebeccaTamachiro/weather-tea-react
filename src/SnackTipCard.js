import React, { useState } from "react";
import "./SnackTipCard.css";

export default function SnackTipCard(props) {
  const [snackTip, setSnackTip] = useState(null);
  const [temperatureTracker, setTemperatureTracker] = useState(null);

  let summerSnackTips = [
    "Refresh yourself and go healthy with some fruit salad",
    "Great weather to enjoy some greek yogurt with blueberries",
  ];

  let winterSnackTips = [
    "Great weather to have some tasty heartwarming fruitcake",
    "Why not grab a blanket, some popcorn and watch a movie",
  ];

  let neutralSnackTips = [
    "Good weather to try and taste some lupin beans",
    "It is always a great weather to have some bretzels",
  ];

  function matchSnackTip() {
    if (props.temperature < 10) {
      setSnackTip(
        winterSnackTips[Math.floor(Math.random() * winterSnackTips.length)]
      );
    }

    if (props.temperature >= 10 && props.temperature <= 20) {
      setSnackTip(
        neutralSnackTips[Math.floor(Math.random() * neutralSnackTips.length)]
      );
    }
    if (props.temperature > 20) {
      setSnackTip(
        summerSnackTips[Math.floor(Math.random() * summerSnackTips.length)]
      );
    }
    setTemperatureTracker(props.temperature);
  }

  if (temperatureTracker === props.temperature) {
    return (
      <div className="TipCard">
        <div className="card-body bg-light align-middle mb-2">
          <p className="card-text">
            <span role="img" aria-label="pointer">
              👉{" "}
            </span>
            {snackTip} OR...
          </p>
        </div>
      </div>
    );
  } else {
    matchSnackTip();
    return (
      <div className="card-body bg-light mb-2 teaTip">
        <p className="card-text">Loading...</p>
      </div>
    );
  }
}
