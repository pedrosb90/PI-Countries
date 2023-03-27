import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import CountryDetail from "./components/CountryDetail";
import FilteredCards from "./components/pages/FilteredCards";
import Activities from "./components/Activities";
import ActivityCreate from "./components/ActivityCreate";
import HomeButton from "./components/pages/HomeButton";

function App() {
  return (
    <div className="bg">
      <Link to="/home">
        <HomeButton>Home</HomeButton>
      </Link>

      <Route exact path="/home" component={Home} />
      <Route path="/countries/:countryId" component={CountryDetail} />
      <Route path="/createactivity" component={ActivityCreate} />
      <Route exact path="/filteredcountry" component={FilteredCards} />
      <Route exact path="/activities" component={Activities} />
      {/* <img className={`${styles.bgImage}`} src={image} alt="pic" /> */}
    </div>
  );
}

export default App;
