import Arrow from "../assets/icon-arrow.svg";
import { useState } from "react";

import FormInput from "./FormInput";
import AgeResults from "./AgeResults";
import { ageCalculator } from "../utils/ageCalculator";
import { getMaxDaysInMonth } from "../utils/getMaxDaysInMonth";

const Card = () => {
  const [data, setData] = useState({ day: 0, month: 0, year: 0 });
  const { day, month, year } = data;
  const [result, setResult] = useState({
    year: "-",
    month: "-",
    days: "-",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    //MaxDays in the month
    const maxDays = getMaxDaysInMonth(month, year);
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name == "day") {
      if (value > maxDays || value < 0) {
        setErrors((prevData) => ({
          ...prevData,
          [name]: " Must be a valid day",
        }));
      } else {
        setErrors((prevData) => ({
          ...prevData,
          [name]: "",
        }));
      }
    }
    if (name == "month") {
      if (value > 12 || value < 0) {
        setErrors((prevData) => ({
          ...prevData,
          [name]: " Must be a valid month",
        }));
      } else {
        setErrors((prevData) => ({
          ...prevData,
          [name]: "",
        }));
      }
    }

    if (name == "year") {
      if (value > 2023 || value < 0) {
        setErrors((prevData) => ({
          ...prevData,
          [name]: "Must be in the past",
        }));
      } else {
        setErrors((prevData) => ({
          ...prevData,
          [name]: "",
        }));
      }
    }
  };

  const handleAgeCalculator = () => {
    if (day == 0 || month == 0 || year == 0) {
      setErrors({
        day: "This field is required",
        month: "This field is required",
        year: "This field is required",
      });
    } else {
      const { resultAge, resultMonth, resultDay } = ageCalculator(
        day,
        month,
        year
      );
      setResult({
        year: resultAge,
        month: resultMonth,
        days: resultDay,
      });
    }
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
          // placeholder="DD"
          value={day}
          onChange={handleChange}
          errors={errors.day}
        />
        <FormInput
          label="MONTH"
          maxLength={2}
          type="text"
          name="month"
          className="input"
          // placeholder="MM"
          value={month}
          onChange={handleChange}
          errors={errors.month}
        />
        <FormInput
          label="YEAR"
          maxLength={4}
          type="text"
          name="year"
          className="input"
          // placeholder="YYYY"
          value={year}
          onChange={handleChange}
          errors={errors.year}
        />
      </div>

      <div className="container-divider">
        <div className="divider"></div>
        <button className="img-arrow" onClick={() => handleAgeCalculator()}>
          <img src={Arrow} alt="arrow" />
        </button>
      </div>

      <AgeResults result={result} />
    </div>
  );
};

export default Card;
