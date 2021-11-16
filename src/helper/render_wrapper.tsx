import RenderWeatherCard from "./render_weather_card";

interface RenderWrapperProps {
  loading: boolean;
  cityName: string;
  data: any[]
}

const RenderWrapper = ({ loading, cityName, data }: RenderWrapperProps) => {
  return (
    <div className="wrapper_weather">
      <h2 className="city_name_header">{cityName}</h2>
      {loading && <div className="loading"></div>}
      <div className="data_block">{<RenderWeatherCard data={data} />}</div>
    </div>
  );
};

export default RenderWrapper;
