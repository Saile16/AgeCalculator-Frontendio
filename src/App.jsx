import { useEffect, useState } from "react";
import Arrow from "./assets/icon-arrow.svg";
import "./App.css";
const monthsUtil = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState({
    year: "-",
    month: "-",
    days: "-",
  });
  const [error, setError] = useState({
    error: false,
    mensaje: "",
  });

  useEffect(() => {
    if (day.length == 0 || month.length == 0 || year.length == 0) {
      setError({
        error: true,
        mensaje: "This field is required",
      });
    } else if (
      day <= 0 ||
      day > 31 ||
      month <= 0 ||
      month > 12 ||
      year <= 0 ||
      year > 2023
    ) {
      setError({
        error: true,
        mensaje: "Must be a valid date",
      });
    } else {
      setError({
        error: false,
        mensaje: "",
      });
    }
  }, [day, month, year]);
  const ageCalculator = () => {
    if (error.error) {
      return;
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let resultAge = currentYear - Number(year);
    let resultMonth;
    let resultDay;
    if (currentMonth >= month) {
      resultMonth = currentMonth - Number(month);
    } else {
      resultAge--;
      resultMonth = 12 + currentMonth - Number(month);
    }

    if (currentDay >= day) {
      resultDay = currentDay - Number(day);
    } else {
      resultMonth--;
      let days = monthsUtil[currentMonth - 2];
      resultDay = days + currentDay - Number(day);
      if (resultMonth < 0) {
        resultMonth = 11;
        resultDay--;
      }
    }

    setResult({
      year: resultAge,
      month: resultMonth,
      days: resultDay,
    });
  };

  return (
    <div className="App">
      <div className="contenedor">
        <div className="card">
          <div className="container-form">
            <div className="container-input">
              <label className="label">DAY</label>
              <input
                maxLength={2}
                type="text"
                name="day"
                onChange={(e) => setDay(e.target.value)}
                className="input"
                placeholder="DD"
              />
              {error ? <label className="error">{error.mensaje}</label> : ""}
            </div>
            <div className="container-input">
              <label className="label">MONTH</label>
              <input
                min={1}
                max={12}
                maxLength={2}
                type="text"
                name="month"
                onChange={(e) => setMonth(e.target.value)}
                className="input"
                placeholder="MM"
              />
              {error ? <label className="error">{error.mensaje}</label> : ""}
            </div>
            <div className="container-input">
              <label className="label">YEAR</label>
              <input
                type="text"
                maxLength={4}
                name="year"
                onChange={(e) => setYear(e.target.value)}
                className="input"
                placeholder="YYYY"
              />
              {error ? <label className="error">{error.mensaje}</label> : ""}
            </div>
          </div>

          <div className="contenedor-linea">
            <div className="linea"></div>
            <div className="img-arrow">
              <img
                src={Arrow}
                alt="arrow"
                onClick={() => ageCalculator()}
                disabled={true}
              />
            </div>
          </div>

          <div className="container-result">
            <div className="container-result-age">
              <p className="number">{result.year}</p>
              <p className="label-result">years</p>
            </div>
            <div className="container-result-age">
              <p className="number">{result.month}</p>
              <p className="label-result">months</p>
            </div>
            <div className="container-result-age">
              <p className="number">{result.days}</p>
              <p className="label-result">days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
