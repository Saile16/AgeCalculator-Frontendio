export const ageCalculator = (day, month, year) => {
  console.log(day, month, year);
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
  return { resultAge, resultMonth, resultDay };
};
