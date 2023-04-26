import Arrow from "../assets/icon-arrow.svg";
import { useEffect, useState } from "react";

import FormInput from "./FormInput";
import AgeResults from "./AgeResults";
const monthsUtil = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const Card = () => {
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [year, setYear] = useState("");
  const [data, setData] = useState({ day: 0, month: 0, year: 0 });
  const { day, month, year } = data;
  const [result, setResult] = useState({
    year: "-",
    month: "-",
    days: "-",
  });
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name == "day") {
      if (value > 32 || value < 0) {
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

  // const [error, setError] = useState({
  //   error: false,
  //   msj: "",
  // });

  const ageCalculator = () => {
    if (day == 0 || month == 0 || year == 0) {
      setErrors({
        day: "This field is required",
        month: "This field is required",
        year: "This field is required",
      });
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
        <button className="img-arrow" onClick={() => ageCalculator()}>
          <img src={Arrow} alt="arrow" />
        </button>
      </div>

      <AgeResults result={result} />
    </div>
  );
};

export default Card;
