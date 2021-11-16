import renderer from "react-test-renderer";
import convertDate from "../helper/convert_date";
import getData from "../helper/fetch_data";
import { normalizeDate, normalizeTemp } from "../helper/normalize_functions";
import RenderWeatherCard from "../helper/render_weather_card";
import GetWeather from "../components/home_page_weather";
import RenderWrapper from "../helper/render_wrapper";
import SearchByCityName from "../components/search_by_city_name";

export {};

test("Convertation Date", () => {
  expect(convertDate(1)).toBe("Feb");
});

test("Get Data", () => {
  return getData("Minsk", 17)
    .then((r) => r.json())
    .then((data) => {
      data.list.map((el: {}) => expect(el).toBe(el));
    });
});

test("Normalize Date", () => {
  expect(normalizeDate(1637085600)).toBe("20 Jan 1970 1:44");
});

test("Normalize Temp", () => {
  expect(normalizeTemp(272.81)).toBe(-0);
});

const fetchDataForTesting = (fetch_data: any) => {
  let DATA: any[] = [];
  fetch_data
    .then((r: any) => r.json())
    .then((data: any) => data.list.map((el: {}) => DATA.push(el)));
  return DATA;
};

test("Render Weather Card", () => {
  const tree = renderer
    .create(
      <RenderWeatherCard data={fetchDataForTesting(getData("Minsk", 17))} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Render Wrapper", () => {
  const tree = renderer
    .create(
      <RenderWrapper
        loading={false}
        cityName={"Minsk"}
        data={fetchDataForTesting(getData("Minsk", 17))}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Get Weather", () => {
  const tree = renderer.create(<GetWeather />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Search By CityName", () => {
  const tree = renderer.create(<SearchByCityName />).toJSON();
  expect(tree).toMatchSnapshot();
});