import { useState } from "react";
import Arrow from "./assets/icon-arrow.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="contenedor">
        <div className="card">
          <label>DAY</label>
          <input />
          <label>MONTH</label>
          <input />
          <label>YEAR</label>
          <input />

          <div className="contenedor-linea">
            <div className="linea"></div>
            <div className="img-arrow">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>

          <div className="container-result">
            <p>
              <span>38</span>years
            </p>
            <p>
              <span>38</span>months
            </p>
            <p>
              <span>38</span>days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
