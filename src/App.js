//Style
import "./styles/app.scss";
//Components
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Home path="/" exact />
        </Route>
        <Route>
          <SearchResults path="/search" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
