import React, { MouseEvent } from "react";
import { useEffect, useState } from "react";
import "./weather_app.css";
import getData from "../helper/fetch_data";
import RenderWrapper from "../helper/render_wrapper";

const GetWeather = () => {
  const [data, setData] = useState<any[]>([]);
  const [cityName, setCityName] = useState<string>(
    localStorage.getItem("city_name") || "Minsk"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getData(cityName, 17)
      .then((r) => r.json())
      .then((data) => {
        data.list.map(
          (el: {}, idx: number) => {
           return idx % 8 === 0 && setData((prevState) => [...prevState, el])
          }
           
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setData([]);
    };
  }, [cityName]);

  const getClickedCityWeather = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setCityName(event.currentTarget.innerText);
    localStorage.setItem("city_name", event.currentTarget.innerText);
  };

  return (
    <div>
      <button onClick={getClickedCityWeather} className="city_name_btn">
        Minsk
      </button>
      <button onClick={getClickedCityWeather} className="city_name_btn">
        Bratislava
      </button>
      <button onClick={getClickedCityWeather} className="city_name_btn">
        Moscow
      </button>
      <RenderWrapper loading={loading} cityName={cityName} data={data} />
    </div>
  );
};

export default React.memo(GetWeather);
