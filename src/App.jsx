import { useState } from "react";
import Arrow from "./assets/icon-arrow.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <div className="card">
          <div className="container-form">
            <div className="container-input">
              <label className="label">DAY</label>
              <input
                type="number"
                name="day"
                onChange={(e) => setDay(e.target.value)}
                className="input"
                placeholder="DD"
              />
            </div>
            <div className="container-input">
              <label className="label">MONTH</label>
              <input
                type="number"
                name="month"
                onChange={(e) => setMonth(e.target.value)}
                className="input"
                placeholder="MM"
              />
            </div>
            <div className="container-input">
              <label className="label">YEAR</label>
              <input
                type="number"
                name="year"
                onChange={(e) => setYear(e.target.value)}
                className="input"
                placeholder="YYYY"
              />
            </div>
          </div>

          <div className="contenedor-linea">
            <div className="linea"></div>
            <div className="img-arrow">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>

          <div className="container-result">
            <div className="container-result-age">
              <p className="number">-</p>
              <p className="label-result">years</p>
            </div>
            <div className="container-result-age">
              <p className="number">-</p>
              <p className="label-result">months</p>
            </div>
            <div className="container-result-age">
              <p className="number">-</p>
              <p className="label-result">days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
