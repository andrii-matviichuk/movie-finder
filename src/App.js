//Style
import "./styles/app.scss";
//Components
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={["/", "/&query="]} exact>
          <Home />
        </Route>
        <Route path="/&query=:id">
          <SearchResults />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
