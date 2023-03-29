import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import CountryDetail from "./components/CountryDetail";
import FilteredCards from "./components/pages/FilteredCards";
import Activities from "./components/Activities";
import ActivityCreate from "./components/ActivityCreate";
import HomeButton from "./components/pages/HomeButton";
import backgroundImage from "/Users/pedro/Desktop/Henry/P INDIVIDUALES/PI-Countries-main/client/src/MOON_LANDSCAPE4_generated.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Link to="/home">
        <HomeButton>Home</HomeButton>
      </Link>

      <Route exact path="/home" component={Home} />
      <Route path="/countries/:countryId" component={CountryDetail} />
      <Route path="/createactivity" component={ActivityCreate} />
      <Route exact path="/filteredcountry" component={FilteredCards} />
      <Route exact path="/activities" component={Activities} />
    </div>
  );
}

export default App;
