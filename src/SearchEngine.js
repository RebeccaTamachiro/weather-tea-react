import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <p className="mb-2">...find a different city 🙂</p>
      <form className="mb-2">
        <div class="input-group my-0">
          <input
            type="text"
            autocomplete="off"
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
        <a href="/" className="mb-3 mt-1 secondary-text">
          (my current location)
        </a>
      </form>
    </div>
  );
}
