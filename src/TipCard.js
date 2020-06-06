import React from "react";
import "./TipCard.css";

export default function TipCard() {
  return (
    <div className="TipCard">
      <div className="card-body bg-light mb-2 tea-tip">
        <p className="card-text">
          👉 A great weather to have a warm
          <span className="tea-flavour"> chamomile tea </span>OR...
        </p>
      </div>
    </div>
  );
}
