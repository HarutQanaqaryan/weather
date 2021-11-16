import { Link, Routes, Route} from "react-router-dom";
import "./App.css";
import SearchByCityName from "./components/search_by_city_name";
import GetWeather from "./components/home_page_weather"

function App() {
  return (
    <div>
        <Link to="/weather" className="nav_btn">
          Home
        </Link>
        <Link to="/search_weather" className="nav_btn">
          Search
        </Link>
        <Routes>
          <Route path={"weather"} element={<GetWeather />} />
          <Route path={"search_weather"} element={<SearchByCityName />} />
        </Routes>
    </div>
  );
}

export default App;
