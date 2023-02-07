import React from "react";
import "./Credit.css";

export default function Credit() {
  return (
    <div className="Credit">
      <small className="creditsText mt-1">
        Coded by {""}
        <a
          href="https://pt.linkedin.com/in/rebeccatamachiro/en"
          className="creditsLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rebecca Tamachiro
        </a>
        , open-sourced on {""}
        <a
          href="https://github.com/RebeccaTamachiro/weather-tea-react"
          className="creditsLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {""} and hosted on {""}
        <a
          href="https://pages.cloudflare.com/"
          className="creditsLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cloudflare Pages
        </a>
      </small>
    </div>
  );
}
