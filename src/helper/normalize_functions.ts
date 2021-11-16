import convertDate from "./convert_date";

export const normalizeDate = (seconds: number): string => {
  const normalizeTime = (time: number) => (time <= 9 ? "0" + time : time);
  let date = new Date(seconds);
  return `${date.getDate()} ${convertDate(
    date.getMonth()
  )} ${date.getFullYear()} ${date.getHours()}:${normalizeTime(
    date.getUTCMinutes()
  )}`;
};

export const normalizeTemp = (temp: number): number => {
  return Math.round(temp - 273.15);
};
