import React, { ChangeEvent, useEffect, useState } from "react";
import RenderWrapper from "../helper/render_wrapper";
import getData from "../helper/fetch_data";
import "./weather_app.css";

const SearchByCityName = () => {
  const [data, setData] = useState<any[]>([]);
  const [cityName, setCityName] = useState<string>(
    localStorage.getItem("city_name") || "Minsk"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getData(cityName, 40)
      .then((r) => r.json())
      .then((data) => {
        data.list.map((el: {}) => setData((prevState) => [...prevState, el]));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      setData([]);
    };
  }, [cityName]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
      event.preventDefault();
      setCityName(event.target.value);
    };

  return (
    <>
      <input
        className="search"
        placeholder="Type city name..."
        value={cityName}
        onChange={handleSearch}
      />
      <RenderWrapper loading={loading} cityName={cityName} data={data} />
    </>
  );
  }

export default React.memo(SearchByCityName);
