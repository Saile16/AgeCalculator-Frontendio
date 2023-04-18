import Arrow from "../assets/icon-arrow.svg";
import { useEffect, useState } from "react";

import FormInput from "./FormInput";
import AgeResults from "./AgeResults";
const monthsUtil = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Card = () => {
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
    msj: "",
  });

  useEffect(() => {
    if (day.length == 0 || month.length == 0 || year.length == 0) {
      setError({
        error: true,
        msj: "This field is required",
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
        msj: "",
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
    <div className="card">
      <div className="container-form">
        <FormInput
          label="DAY"
          maxLength={2}
          type="text"
          name="day"
          className="input"
          placeholder="DD"
          onChange={(e) => setDay(e.target.value)}
          error={error}
        />
        <FormInput
          label="MONTH"
          maxLength={2}
          type="text"
          name="month"
          className="input"
          placeholder="MM"
          onChange={(e) => setMonth(e.target.value)}
          error={error}
        />
        <FormInput
          label="YEAR"
          maxLength={4}
          type="text"
          name="year"
          className="input"
          placeholder="YYYY"
          onChange={(e) => setYear(e.target.value)}
          error={error}
        />
      </div>

      <div className="container-divider">
        <div className="divider"></div>
        <div className="img-arrow">
          <img
            src={Arrow}
            alt="arrow"
            onClick={() => ageCalculator()}
            disabled={true}
          />
        </div>
      </div>

      <AgeResults result={result} />
    </div>
  );
};

export default Card;
