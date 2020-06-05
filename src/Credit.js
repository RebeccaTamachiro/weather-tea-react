import React from "react";
import "./Credit.css";

export default function Credit() {
  return (
    <div className="Credit">
      <small className="credits-text mt-1">
        Coded by {""}
        <a
          href="https://pt.linkedin.com/in/rebeccatamachiro/en"
          className="credits-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rebecca Tamachiro
        </a>
        , open-sourced on {""}
        <a
          href="https://github.com/RebeccaTamachiro/weather-tea-react"
          className="credits-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {""} and hosted on {""}
        <a
          href="https://www.netlify.com/"
          className="credits-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </small>
    </div>
  );
}
