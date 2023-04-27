export const getMaxDaysInMonth = (month, year) => {
  const date = new Date(year, month, 0);
  return date.getDate();
};
