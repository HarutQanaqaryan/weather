import { useState, useEffect, FC, MouseEvent } from "react";
import { normalizeDate, normalizeTemp } from "./normalize_functions";

interface RenderWeatherCardProps {
  data: any[]
}

const RenderWeatherCard: FC<RenderWeatherCardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<any>();

  useEffect(() => {
    setIsOpen(data.map((_: any, idx: number) => ({ id: idx, open: false })));
  }, [data]);


  const openMoreDetails = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(
      isOpen.map((el: any) =>
        el.id === parseInt(event.currentTarget.id) ? { ...el, open: !el.open } : el
      )
    );
  };

  return (
    <div className="data_block">
      {data.map((el: any, idx: any) => (
      <div key={idx} className="weather_card">
          <h4 className="date">{normalizeDate(el.dt * 1000)}</h4>
          <img
            src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
            alt="Weather Icon"
            className="weather_icon"
          />
          <h1 className="main_temp">{normalizeTemp(el.main.temp)}°c</h1>
          <h5 className="weather_desctription">{el.weather[0].description}</h5>
          <h5>
            <span className="desctription_header">Feels Like </span>
            {normalizeTemp(el.main.feels_like)}°C
          </h5>
        <button className="more_details_btn" id={idx} onClick={openMoreDetails}>
          More Details
        </button>
        {isOpen.some((el: any) => el.open && el.id === idx) && (
          <div className="weather_desctriptions">
            <b className="temp_header">Min Temp </b>
            <span className="temp">{normalizeTemp(el.main.temp_min)}°c</span>
            <br />
            <b className="temp_header">Max Temp </b>
            <span className="temp">{normalizeTemp(el.main.temp_max)}°c</span>
            <b>
              <span className="desctription_header">Humidity </span>
              {el.main.humidity}%
            </b>
            <b>
              <span className="desctription_header">Pressure </span>
              {el.main.pressure}hPa
            </b>
          </div>
        )}
      </div>
      ))}
    </div>
  );
};

export default RenderWeatherCard;
