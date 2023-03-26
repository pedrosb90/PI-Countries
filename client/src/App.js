import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import CountryDetail from "./components/CountryDetail";
import Activities from "./components/Activities";
import ActivityCreate from "./components/ActivityCreate";
import image from "/Users/pedro/Desktop/Henry/P INDIVIDUALES/PI-Countries-main/client/src/binary globe image herny pi.avif";

function App() {
  return (
    <div className="App">
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Route exact path="/home" component={Home} />
      <Route path="/countries/:countryId" component={CountryDetail} />
      <Route path="/createactivity" component={ActivityCreate} />
      <Route path="/activities" component={Activities} />

      <img src={image} alt="pic" />
    </div>
  );
}

export default App;
